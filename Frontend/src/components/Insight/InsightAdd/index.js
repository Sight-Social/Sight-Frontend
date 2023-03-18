import { useState } from 'react';
import axios from 'axios';
import {
  Container,
  FormContent,
  FormLabel,
  FormWrap,
  FormH1,
  FormInput,
  FormContianer,
  FormButton,
} from './InsightAddElements';
import { useSelector } from 'react-redux';
const InsightAdd = ({ addInsight }) => {
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState('');
  const username = useSelector((state) => state.profile.username);

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <FormContianer
              onSubmit={(e) => {
                e.preventDefault();
                addInsight(url, tags);
              }}
            >
              <FormH1>New Insight</FormH1>
              <FormLabel htmlFor='for'>URL</FormLabel>
              <FormInput
                type='url'
                required
                onChange={(e) => setUrl(e.target.value)}
              />
              <FormLabel htmlFor='for'>Tags</FormLabel>
              <FormInput
                type='tags'
                required
                onChange={(e) => setTags(e.target.value)}
              />
              <FormButton type='submit'>Add</FormButton>
            </FormContianer>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};
export default InsightAdd;
