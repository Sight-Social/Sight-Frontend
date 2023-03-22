import React, { useState } from 'react';
import { DropDownContainer } from './DropDownButtonElements';
import AddFocalPoint from '../AddFocalPoint';
import { IconWrapper, CrudButton } from '../../RequestButtonElements.js';
import Add from '../../../assets/icons/Add.png';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  FormContent,
  FormLabel,
  FormWrap,
  FormH1,
  FormInput,
  Form,
  FormButton,
} from '../AddFocalPoint/AddFocalPointElements';
import { addFocalPoint } from '../../../features/focalpoints/focalpointSlice';

export function AddButton() {
  const dispatch = useDispatch();
  const sightToken = useSelector((state) => state.profile.tokens.sightToken);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddFP = async (title, description) => {
    try {
      dispatch(addFocalPoint({title, description, sightToken}));
    } catch (error) {
      console.log(error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    
    setIsOpen(!isOpen);
  }

  return (
    <DropDownContainer className='dropdown'>
      <CrudButton onClick={toggleMenu}>
        <IconWrapper src={Add} />
      </CrudButton>
      {isOpen && (
        <Container>
        <FormWrap>
          <FormContent>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddFP(title, description);
                toggleMenu();
              }}>
              <FormH1>New Focal Point</FormH1>
              <FormLabel htmlFor="for">Title</FormLabel>
              <FormInput
                type="title"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormLabel htmlFor="for">Description</FormLabel>
              <FormInput
                type="description"
                required
                onChange={(e) => setDescription(e.target.value)}
              />
              <FormButton type="submit">Add</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      )}
    </DropDownContainer>
  );
}

