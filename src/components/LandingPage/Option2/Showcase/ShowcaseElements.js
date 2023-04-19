import styled from 'styled-components';

export const IntroContainer = styled.div`
  background: var(--clr-gray);
  height: 55vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  text-align: left;
  max-width: 40vw;
  padding-right: 30px;
`;

export const IntroH1 = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: left;

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
  font-size: 32px;
  text-align: left;

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

export const ShowcaseGrids = styled.div`
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
  max-height: 500px;
  padding-right: 0;
  object-fit: contain;
  -o-object-fit: contain;
`;
