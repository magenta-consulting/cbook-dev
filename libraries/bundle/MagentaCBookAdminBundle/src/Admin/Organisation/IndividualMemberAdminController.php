<?php

namespace Magenta\Bundle\CBookAdminBundle\Admin\Organisation;


use Aws\Api\Service;
use Magenta\Bundle\CBookAdminBundle\Admin\BaseCRUDAdminController;
use Magenta\Bundle\CBookAdminBundle\Service\Organisation\OrganisationService;
use Magenta\Bundle\CBookModelBundle\Entity\Messaging\SonataNotificationMessage;
use Magenta\Bundle\CBookModelBundle\Entity\Organisation\IndividualMember;
use Magenta\Bundle\CBookModelBundle\Entity\Organisation\Organisation;
use Magenta\Bundle\CBookModelBundle\Entity\Person\Person;
use Magenta\Bundle\CBookModelBundle\Entity\System\DataProcessing\DPJob;
use Magenta\Bundle\CBookModelBundle\Service\ServiceContext;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class IndividualMemberAdminController extends BaseCRUDAdminController
{
    public function memberImportAction(Request $request)
    {
        $request = $this->getRequest();
//        $orgId = $request->get($this->admin->getIdParameter());
        
        /** @var Organisation $object */
        $object = $this->get(OrganisationService::class)->getCurrentOrganisation(new ServiceContext(ServiceContext::TYPE_ADMIN_CLASS, ['parent' => $this->admin->getParent()]));
        
        if (!$object || !$object instanceof Organisation) {
            throw $this->createNotFoundException(sprintf('unable to find the an Organisation'));
        }
        
        $orgId = $object->getId();
        
        if ($request->isMethod('post')) {
            $dpRepo = $this->getDoctrine()->getRepository(DPJob::class);
            if (!empty($dp = $dpRepo->findOneBy([
                'status' => DPJob::STATUS_PENDING,
                'type' => DPJob::TYPE_MEMBER_IMPORT,
                'ownerId' => $orgId]))) {
                $this->addFlash('sonata_flash_error', 'An Import of Members is still being processed. You can only upload a new file after the processing is finished for ' . $object->getName());
                return $this->redirectToList();
            }
            
            $fileFieldName = 'member-list';
            if (isset($_FILES[$fileFieldName])) {
                $errors = array();
                $file_name = $_FILES[$fileFieldName]['name'];
                $file_size = $_FILES[$fileFieldName]['size'];
                $file_tmp = $_FILES[$fileFieldName]['tmp_name'];
                $file_type = $_FILES[$fileFieldName]['type'];
                $explodedFileName = explode('.', $_FILES[$fileFieldName]['name']);
                $file_ext = strtolower(end($explodedFileName));
                
                $filePath = $this->get('magenta_book.spreadsheet_service')->getMemberImportFolder() . $orgId . '_' . $file_name;
                file_exists($filePath) ? unlink($filePath) : "";
                
                $expensions = array("xls", "xlsx");
                
                if (in_array($file_ext, $expensions) === false) {
                    $errors[] = "Extension not allowed, please choose a valid Microsoft Excel file.";
                }
                
                if ($file_size > 6291456) {
                    $errors[] = 'File size must be less than 6 MB';
                }
                
                if (empty($errors)) {
                    move_uploaded_file($file_tmp, $filePath);
//                    $dp = new DPJob();
//                    $dp->setOwnerId($orgId);
//                    $dp->setType(DPJob::TYPE_MEMBER_IMPORT);
//                    $dp->setResourceName($orgId . '_' . $file_name);
                    $dp = DPJob::newInstance($orgId . '_' . $file_name, DPJob::TYPE_MEMBER_IMPORT, $orgId);
                    $manager = $this->get('doctrine.orm.default_entity_manager');
                    $manager->persist($dp);
                    $manager->flush($dp);
                    $this->get('sonata.notification.backend')->createAndPublish(SonataNotificationMessage::TYPE_MEMBER_IMPORT, array(
                        'job-id' => $dp->getId()
                    ));
                    $this->addFlash('sonata_flash_success', 'Member List was uploaded successfully! Start importing now... Please check back in a few minutes');
                } else {
                    $this->addFlash('sonata_flash_error', implode(', ', $errors));
                }
            }
        } else {
            return new JsonResponse(['message' => 'Import is in progress']);
        }
        return $this->redirectToList();
    }
    
    public function editAction($id = null)
    {
        $request = $this->getRequest();
        $id = $request->get($this->admin->getIdParameter());
        /** @var IndividualMember $existingObject */
        $existingObject = $this->admin->getObject($id);
        
        if (!$existingObject) {
            throw $this->createNotFoundException(sprintf('unable to find the object with id: %s', $id));
        }
        
        /** @var Person $person */
        $person = $existingObject->getPerson();
        if (empty($person->getUser())) {
            $user = $person->initiateUser();
            $manager = $this->get('doctrine.orm.default_entity_manager');
            $manager->persist($user);
            $manager->flush($user);
        }
        
        return parent::editAction($id);
    }
    
    public function listAction()
    {
        $this->admin->setTemplate('list', '@MagentaCBookAdmin/Admin/Organisation/IndividualMember/CRUD/list.html.twig');
        return parent::listAction(); // TODO: Change the autogenerated stub
    }
}
