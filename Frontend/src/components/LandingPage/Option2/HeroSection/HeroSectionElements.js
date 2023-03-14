import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const IntroContainer = styled.div`
  /* border: 5px solid red; */
  background: var(--clr-black);
  height: 90vh;
  width: 100%;
  box-sizing: border-box;
`;

export const IntroRoundedDiv = styled.div`
  position: absolute;
  background: var(--clr-black);
  width: 50vw;
  height: 85vh;
  border-radius: 0px 0px 50px 0px;
  z-index: 3;
  @media screen and (max-width: 720px) {
    height: 80vh;
  }
  @media screen and (max-width: 520px) {
    height: 80vh;
  }
`;

export const Blurs = styled.img`
  position: absolute;
  width: 50vw;
  height: 80vh;
  object-fit: cover;
  z-index: 0;
`;

export const IntroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1200px;
  overflow: hidden;
`;

export const IntroImage = styled.img`
  width: 80%;
  height: 85%;
  -o-object-fit: none;
  object-fit: scale-down;
  background: var(--clr-dark);
  padding-left: 5vw;
  padding-top: 5vw;

  position: absolute;
  z-index: 1;

  @media screen and (max-width: 720px) {
    height: 95%;
  }
  @media screen and (max-width: 520px) {
    height: 90%;
  }
`;

export const IntroContent = styled.div`
  /* border: solid 5px white; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10vh;
  height: 90vh;
`;

export const IntroH1 = styled.h1`
  color: #fff;
  font-size: 96px;
  text-align: left;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 550px) {
    font-size: 32px;
  }
  @media screen and (max-width: 460px) {
    font-size: 24px;
  }
`;

export const IntroSubHeading = styled.p`
  color: #fff;
  font-size: 80px;
  text-align: left;
  margin: 10px auto;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 550px) {
    font-size: 20px;
  }
  @media screen and (max-width: 460px) {
    font-size: 18px;
  }
`;

export const IntroP = styled.p`
  /* border: 5px solid white; */
  color: #fff;
  text-align: left;
  max-width: 800px;
  font-size: 30px;
  font-weight: 500;
  margin: 25px 0;
  /* padding: 0 2em; */
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 550px) {
    font-size: 18px;
  }
  @media screen and (max-width: 460px) {
    font-size: 16px;
  }
`;

export const IntroButtonsContainer = styled.div`
  /* border: 5px solid white; */
  position: relative;

  display: flex;
  flex-direction: row;
  grid-template-rows: 1fr;
  gap: 0px 50px;
`;

export const IntroButtonWrapper = styled.div`
  /* display: flex;
    flex-direction: column;
    align-items: center; */
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
