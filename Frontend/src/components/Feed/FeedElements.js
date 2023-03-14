import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  max-width: 80vw;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
`;

export const Header = styled.h1`
  font-size: 1.8rem;
  color: #000;
  color: white;
`;

export const ToolBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 50px;
  width: 100%;
`;
