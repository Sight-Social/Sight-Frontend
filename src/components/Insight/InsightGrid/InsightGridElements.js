import styled from 'styled-components';
import '../../../App.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdAddPhotoAlternate } from 'react-icons/md';

export const UploadImageButton = styled.button`
  border: solid red 2px;
  width: 200px;
  height: 200px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadImageIcon = styled(RiDeleteBinLine)`
  width: 50px;
  height: 50px;
`;

export const StyledRiDeleteBinLine = styled(RiDeleteBinLine)`
  padding: 0px;
  margin-right: 8px;
  color: white;
  font-size: 21.5px;

  :hover {
    color: red;
  }
`;
export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: 0px;
  padding: 0px;
  margin-top: 5px;
`;
/* INSIGHT GRID */
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
  width: 80vw;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
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
  width: 60%;
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
  min-height: 85vh;
  background-color: var(--clr-black);
`;

export const CardDim = styled.div`
  height: 300px;
`;

export const NavContainer = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div`
  margin-top: 20px;
  padding: 0px 0px 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  /* @media screen and (min-width: 950px) {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px 10px 10px;
  } */
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
  height: 100%;
  padding-bottom: 75px;
`;

export const InsightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
  margin: 10px;
  background-color: var(--clr-gray);
  border-radius: 10px;
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InsightsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  width: 100%;
  min-height: 60vh;
`;
