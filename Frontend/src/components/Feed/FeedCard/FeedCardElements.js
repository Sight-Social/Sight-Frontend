import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsPlus } from 'react-icons/bs';
import { TbBinaryTree2 } from 'react-icons/tb';

export const Container = styled(Card)`
  background-color: #1E1E1E;
  margin: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  //box-shadow: -5px 5px 10px rgba(25, 25, 25, 0.8);
  color: white;
  padding: 20px;
  max-width: 100%;
  text-decoration: none;
  /*filter: blur(0px);
  &:hover {
    filter: blur(2px);
  }*/
`;

export const Body = styled(Card.Body)`
  padding: 0px;
  margin: 0px;
`;

export const Footer = styled(Card.Footer)`
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

export const StyledTbBinaryTree2 = styled(TbBinaryTree2)`
  padding: 0px;
  margin-right: 8px;
  color: white;
  font-size: 21.5px;

  :hover {
    color: var(--clr-accent);
  }
`;

export const StyledBsPlus = styled(BsPlus)`
  padding: 0px;
  margin: 0px;
  color: white;
  font-size: 28px;

  :hover {
    color: var(--clr-accent);
  }
`;

export const StyledDropdown = styled(Dropdown)`
  .dropdown-menu {
    background-color: #1E1E1E;
    border: none;
    border-radius: 10px;
    box-shadow: -5px 5px 10px rgba(25, 25, 25, 0.8);
    color: white;
    text-decoration: none;
  }
  .dropdown-toggle::after {
    display: none;
  }
  .dropdown-toggle {
    background-color: #1E1E1E;
    border: none;
    color: white;
    padding: 0px;
  }
`;

export const StyledItem = styled(Dropdown.Item)`
    color: white;
    &:hover {
        background-color: #1E1E1E;
        color: var(--clr-accent);
    } 
`;