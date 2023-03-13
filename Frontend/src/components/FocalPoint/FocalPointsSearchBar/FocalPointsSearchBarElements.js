import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  /* height: 50px; */
  background-color: var(--clr-black);
  border-radius: 10px;
  /* margin: 20px 0px 20px 0px; */
  padding: 10px;
  display: flex;

  /* @media screen and (min-width: 430px) {
    width: 95%;
  }
  @media screen and (min-width: 700px) {
    width: 44%;
  }
  @media screen and (min-width: 1250px) {
    width: 63.5%;
  } */
`;

export const Input = styled.input`
  font-family: 'Futura';
  width: 100%;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
`;
