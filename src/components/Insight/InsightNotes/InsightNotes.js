import React from 'react'
import { DropdownContainer, DropdownItem, NotesIcon } from './InsightNotesElements'
import { HiOutlinePencil } from 'react-icons/hi'


import { DropdownButton, Dropdown } from 'react-bootstrap';

export function InsightNotes() {
  return (    
  <DropdownButton variant="outline-secondary" title={<HiOutlinePencil />}>
  <Dropdown.Item href="#">Option 1</Dropdown.Item>
  <Dropdown.Item href="#">Option 2</Dropdown.Item>
  <Dropdown.Item href="#">Option 3</Dropdown.Item>
</DropdownButton>  )
}

