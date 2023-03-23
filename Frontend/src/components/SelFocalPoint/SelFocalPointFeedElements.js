import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  width:100%;
  min-height: 70vh;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  width: 100%;
`;

export const RefreshSearchContainer = styled.div`
  padding: 5px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  width: 100%;
`;

export const Header = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.8rem;
  width: 97%;
  color: white;
  padding-left: 5px;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  color: white;
`;
