//import { useState } from 'react';
import { WebAppNav } from '../components/WebAppNav';
import { Profile } from '../components/Profile/Profile';
import styled from 'styled-components';
import { OffCanvasNav } from '../components/NavOffcanvas';

export function ProfilePage() {

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: var(--clr-black);
    justify-content: center;
  `;

  return (
    <>
      <Wrapper>
        <OffCanvasNav />
        <WebAppNav />
        <Profile />
      </Wrapper>
    </>
  );
}
