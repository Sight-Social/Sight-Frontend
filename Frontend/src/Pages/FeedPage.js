// import { useState } from 'react';
import styled from 'styled-components';

import { Feed } from '../components/Feed/Feed';
import Footer from '../components/PageComponents/Footer/Footer';
/* import Sidebar from '../components/PageComponents/Sidebar'; */
import WebAppNav from '../components/WebAppNav';
import { FeedFilterBar } from '../components/Feed/FeedFilterBar';

export function FeedPage() {
  /* const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }; */

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;
    width: 100%;
  `;

  const FeedWrapper = styled.div`
    margin-top: 70px;
    display: flex;
    width: 100%;
    background-color: var(--clr-black);
  `;

  return (
    <>
      <Wrapper>
        <WebAppNav />
        <FeedWrapper>
          <Feed />
        </FeedWrapper>
        <FeedFilterBar />
      </Wrapper>
      <Footer />
    </>
  );
}
