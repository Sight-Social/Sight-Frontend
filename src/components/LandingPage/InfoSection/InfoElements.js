import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: var(--clr-light);
  background: ${({ lightBg }) =>
    lightBg ? 'var(--clr-light)' : 'var(--clr-black)'};
  /* border: solid red 5px; */

  @media screen and (max-width: 760px) {
    padding: 50px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 760px) {
    height: 1000px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 760px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  /* border: solid blue 5px; */
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  /* border: solid green 5px; */
`;

export const TopLine = styled.p`
  color: var(--clr-accent);
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 10px;
  padding-right: 15px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) =>
    lightText ? 'var(--clr-light)' : 'var(--clr-black)'};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 22px;
  line-height: 32px;
  color: ${({ lightTextDesc }) =>
    lightTextDesc ? 'var(--clr-light)' : 'var(--clr-black)'};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  max-height: 600px;
  padding-right: 0;
  object-fit: contain;
  -o-object-fit: contain;
`;

/* width: 80%;
  height: 85%;
  -o-object-fit: none;
  object-fit: scale-down;
  background: var(--clr-dark);
  padding-left: 5vw;
  padding-top: 5vw;

  position: absolute;
  z-index: 1; */
