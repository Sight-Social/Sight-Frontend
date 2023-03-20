//import { useState } from 'react';
import { WebAppNav } from '../components/WebAppNav';
import { Profile } from '../components/Profile/Profile';
import styled from 'styled-components';

export function ProfilePage() {
  //const [isOpen, setIsOpen] = useState(false);
  /*const toggle = () => {
    setIsOpen(!isOpen);
  };*/

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: var(--clr-black);
    justify-content: center;
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
