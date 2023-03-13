import styled from 'styled-components';
import '../../../App.css';

export const Container = styled.main`
  padding: 25px 50px 50px 50px;
  height: 100%;
  width: 100%;
  background-color: black;
`;
export const NavContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const PinnedInsightsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeaderAndButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Header = styled.h1`
  font-size: 20px;
  color: white;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: white;
  margin-right: auto;
`;

export const HeaderLink = styled.a`
  font-size: 16px;
  color: white;
  margin: 0 15px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: var(--clr-primary);
  }
`;

export const CardList = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 40px;

  @media screen and (min-width: 430px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 40px;
  }
  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 50px;
  }
  @media screen and (min-width: 1250px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 50px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /*   height: 100%; */
  /* width: auto; */
  width: 100%;
  height: 100%;

  background-color: var(--clr-black);
`;
