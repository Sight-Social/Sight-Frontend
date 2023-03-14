import styled from 'styled-components';
import '../../../App.css';

export const Container = styled.div`
  display: flex;
  @media screen and (min-width: 430px) {
    flex-direction: column;
  }
  @media screen and (min-width: 760px) {
    flex-direction: row;
  }
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: var(--clr-black);
  padding: 20px;
  box-sizing: border-box;
`;

export const CompanyName = styled.h1`
  font-family: 'Futura';
  font-size: 24px;
  letter-spacing: 0.02em;
  color: white;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 430px) {
    margin-bottom: 5px;
  }
  @media screen and (min-width: 760px) {
    margin-bottom: 90px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
`;

export const LinkHeading = styled.h3`
  font-size: 18px;
  font-family: 'Futura';
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
`;

export const Link = styled.a`
  font-size: 16px;
  font-family: 'Futura';
  color: white;
  text-align: center;
  margin-bottom: 5px;
`;
