import { useState } from 'react';
import styled from 'styled-components';

import Navbar from '../components/PageComponents/NavBar';
import { Feed } from '../components/Feed/Feed';
import Footer from '../components/PageComponents/Footer/Footer';
import Sidebar from '../components/PageComponents/Sidebar';
import WebAppNav from '../components/WebAppNav';
import { SubscriptionHeader } from '../components/Feed/SubscriptionWheelElements';

export function FeedPage(){
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
  const FeedWrapper = styled.div`
    background-color: var(--clr-black);
    padding: 50px 100px;
  `;
  return (
    <>
      <Wrapper>
        <WebAppNav />
        <FeedWrapper>
            <Feed />
        </FeedWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};
