import { useState } from 'react';
import { WebAppNav } from '../components/WebAppNav';
import { Profile } from '../features/profile/Profile';
import styled from 'styled-components';

export function ProfilePage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: black;
    width: 100%;
  `;

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Wrapper>
        <WebAppNav />
        <Profile />
      </Wrapper>
    </>
  );
}
