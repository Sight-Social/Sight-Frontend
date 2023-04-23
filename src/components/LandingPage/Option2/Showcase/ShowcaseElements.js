import styled from 'styled-components';

export const IntroContainer = styled.div`
  background: var(--clr-gray);
  height: 100%;
  padding: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 760px) {
    padding: 0vh;
    height: 100%;
    padding-bottom: 5vh;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const PictureAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 760px) {
    align-items: flex-end;
  }
`;

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  max-width: 40vw;
  padding-right: 30px;

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 40px 20px 40px 30px;
    max-width: 100vw;
  }
`;

export const IntroH1 = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: left;
  font-style: italic;
  font-family: Futura;

  @media screen and (max-width: 760px) {
    font-size: 24px;
  }
`;

export const IntroSubHeading = styled.p`
  color: #fff;
  font-size: 32px;
  text-align: left;

  @media screen and (max-width: 760px) {
    font-size: 18px;
  }
`;

export const IntroP = styled.p`
  color: #fff;
  text-align: left;
  max-width: 800px;
  font-size: 30px;
  font-weight: 500;
  margin: 25px 0;

  @media screen and (max-width: 760px) {
    font-size: 16px;
  }
`;

export const ShowcaseGrids = styled.div`
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 760px) {
    height: 300px;
    width: 300px;
  }
`;

export const Img = styled.img`
  width: 100%;
  max-height: 500px;
  padding-right: 0;
  object-fit: contain;
  -o-object-fit: contain;
`;
