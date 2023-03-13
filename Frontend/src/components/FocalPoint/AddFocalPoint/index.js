import { useState } from 'react';

import {
  Container,
  FormContent,
  FormLabel,
  FormWrap,
  FormH1,
  FormInput,
  Form,
  FormButton,
} from './AddFocalPointElements';

const AddFocalPoint = ({ username, addFp, toggleMenu }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                addFp(title, description);
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
    </>
  );
};
export default AddFocalPoint;
