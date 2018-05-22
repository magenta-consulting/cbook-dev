<?php
namespace Bean\Component\Thing\Model;

/**
 * Class Thing: The most generic type of item.
 * @package Bean\Component\Thing\Model
 */
interface ThingInterface {
	public function getId();
	
	/**
	 * @return string
	 */
	public function getName(): ?string;
	
	/**
	 * @param string $name
	 */
	public function setName(string $name): void;
	
	/**
	 * @return string
	 */
	public function getDescription(): ?string;
	
	/**
	 * @param string $description
	 */
	public function setDescription(string $description): void;
	
	/**
	 * @return bool|null
	 */
	public function getEnabled(): ?bool;
	
	/**
	 * @param bool|null $enabled
	 */
	public function setEnabled(?bool $enabled): void;
}