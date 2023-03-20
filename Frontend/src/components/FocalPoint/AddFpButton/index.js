import React, { useState } from 'react';
import { DropDownContainer } from './DropDownButtonElements';
import AddFocalPoint from '../AddFocalPoint';
import { IconWrapper, CrudButton } from '../../RequestButtonElements.js';
import Add from '../../../assets/icons/Add.png';
function AddButton({ username, addFp }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    console.log('ADD menu toggled' + isOpen);
    setIsOpen(!isOpen);
  }

  /* function handleMenuItemClick(item) {
    console.log('ButtonClicked: ' + item);
  } */

  return (
    <DropDownContainer className='dropdown'>
      <CrudButton onClick={toggleMenu}>
        <IconWrapper src={Add} />
      </CrudButton>
      {isOpen && (
        <AddFocalPoint
          username={username}
          addFp={addFp}
          toggleMenu={toggleMenu}
        />
      )}
    </DropDownContainer>
  );
}

export default AddButton;
