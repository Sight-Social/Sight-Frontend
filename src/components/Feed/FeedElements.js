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

export const RefreshSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;
`;

export const Header = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.8rem;
  width: 100%;
  color: white;
  padding-left: 5px;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 5px;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  color: white;
  margin-top: 0px;
  margin-bottom: 0;
`;
