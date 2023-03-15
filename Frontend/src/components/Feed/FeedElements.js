import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  width: 100%;
`;

export const Header = styled.h1`
  display: flex;
  flex-direction: row;
  font-size: 1.8rem;
  padding-left: 65px;
  width: 100%;
  color: white;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  color: white;
  width: 40%;
`;
