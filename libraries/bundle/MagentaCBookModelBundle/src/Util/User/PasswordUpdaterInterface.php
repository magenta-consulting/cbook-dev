<?php
/*
 * This file is part of the FOSUserBundle package.
 *
 * (c) FriendsOfSymfony <http://friendsofsymfony.github.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace Magenta\Bundle\CBookModelBundle\Util\User;

use Magenta\Bundle\CBookModelBundle\Entity\User\UserInterface;

/**
 * @author Christophe Coevoet <stof@notk.org>
 */
interface PasswordUpdaterInterface
{
	/**
	 * Updates the hashed password in the user when there is a new password.
	 *
	 * The implement should be a no-op in case there is no new password (it should not erase the
	 * existing hash with a wrong one).
	 *
	 * @param UserInterface $user
	 *
	 * @return void
	 */
	public function hashPassword(UserInterface $user);
}