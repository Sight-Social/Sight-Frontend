import styled from 'styled-components';
import '../../../App.css';

export const EditCardBody = styled.a`
  cursor: pointer;
  color: white;
  text-decoration: none;
  width: 100%;
`;
export const NavAndContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: black;
  width: 80vw;
`;

export const EditableFpName = styled.input`
  font-weight: Bold;
  font-size: 2rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  border: none;
  padding: 5px;
  text-decoration: none;
  resize: none;
`;

export const EditableDescription = styled.input`
  font-size: 1rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  border: none;
  padding: 5px;
  text-decoration: none;
  width: 100%;
  resize: none;
`;

export const ProfileDropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-top: 50px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 90vh; */
  min-height: 85vh;
  background-color: var(--clr-black);
  padding: 0px 100px;
`;

export const CardDim = styled.div`
  height: 300px;
`;

export const NavContainer = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px 10px 10px;

  @media screen and (min-width: 950px) {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px 10px 10px;
  }
`;

export const Header = styled.h1`
  font-family: 'Futura';
  font-size: 28px;
  color: white;
  padding-right: 20px;
  margin-right: auto;
`;

export const AddMediaButton = styled.button`
  margin: 20px;
  background-color: var(--clr-light);
  text-align: center;
  border-radius: 10px;
  font-size: 32px;
  color: black;
  padding: 0px 8px 0px 8px;
  height: 40px;
  margin-left: auto;
`;

export const SearchBarContainer = styled.div`
  width: 70%;
`;

/* INSIGHT GRID */

export const InsightBackgrund = styled.div`
  background-color: black;
  border-radius: 15px;
  width: 100%;
  padding: 0 50px;
  height: 100%;

  /* display: flex;
  flex-direction: column; */
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InsightsGrid = styled.div`
  /* border: solid red 3px; */
  background-color: black;

  width: 80%;
  height: 100%;

  border-radius: 15px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 75px;

  padding: 0px 50px 50px 50px; // top right bottom left (NESW)

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 40px;
  /* align-items: center; */
  justify-content: center;

  @media screen and (min-width: 430px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 40px;
  }
  @media screen and (min-width: 950px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 50px;
  }
  @media screen and (min-width: 1350px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 50px;
  }
`;

/* height: 100%;
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
  } */
