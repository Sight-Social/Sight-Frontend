import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  border: solid red 1px;
  background-color: var(--clr-black);

  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.h1`
  font-size: 18px;
  color: black;
  padding-top: 10px;
  padding-left: 20px;
`;

export const Subheader = styled.h4`
  font-size: 14px;
  padding-left: 20px;
  color: white;
`;

export const InsightList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-areas:
    '. A'
    '. B'
    'C E'
    'D F'
    'G . ';

  .A {
    grid-area: 1 / 1 / 3 / 2;
  }
  .B {
    grid-area: 1 / 2 / 2 / 3;
  }
  .C {
    grid-area: 2 / 2 / 3 / 3;
  }
  .D {
    grid-area: 3 / 1 / 4 / 2;
  }
  .E {
    grid-area: 3 / 2 / 4 / 3;
  }
  .F {
    grid-area: 3 / 2 / 5 / 3;
  }
  .G {
    grid-area: 4 / 1 / 5 / 2;
  }

  &:nth-child(6n + 1) {
    grid-area: 1 / 1 / 3 / 2;
  }
  &:nth-child(6n + 2) {
    grid-area: 1 / 2 / 2 / 3;
  }
  &:nth-child(6n + 3) {
    grid-area: 2 / 2 / 3 / 3;
  }
  &:nth-child(6n + 4) {
    grid-area: 3 / 1 / 4 / 2;
  }
  &:nth-child(6n + 5) {
    grid-area: 3 / 2 / 4 / 3;
  }
  &:nth-child(6n) {
    grid-area: 3 / 2 / 5 / 3;
  }
  &:nth-child(6n + 6) {
    grid-area: 4 / 1 / 5 / 2;
  }
`;
