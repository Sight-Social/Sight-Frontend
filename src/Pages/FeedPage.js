import styled from 'styled-components';

import { Feed } from '../components/Feed/Feed';
import Footer from '../components/PageComponents/Footer/Footer';
import WebAppNav from '../components/WebAppNav';
import { FeedFilterBar } from '../components/Feed/FeedFilterBar';
import { OffCanvasNav } from '../components/NavOffcanvas';
export function FeedPage() {

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
      <OffCanvasNav />
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
