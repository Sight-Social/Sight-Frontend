import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsPlus } from 'react-icons/bs';

export const Container = styled.div`
  background-color: #1E1E1E;
  margin: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  //box-shadow: -5px 5px 10px rgba(25, 25, 25, 0.8);
  color: white;
  padding: 20px;
  height: 100%;
  max-width: 100%;
  text-decoration: none;
  /*filter: blur(0px);
  &:hover {
    filter: blur(2px);
  }*/
`;

export const Body = styled(Card.Body)`
  height: 100%;
  font-size: 18px;
  line-height: 1.5;
  color: white;
  text-decoration: none;
`;

export const Footer = styled(Card.Footer)`
  font-size: 14px;
  line-height: 1.5;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const PlusButton = styled.button`
  background-color: #1E1E1E;
  margin: 0px;
  padding: 0px;
  border: none;
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
    background-image: url(${BsPlus});
    background-repeat: no-repeat;
    background-position: center;
    background-color: #1E1E1E;
    border: none;
    color: white;
  }
`;

export const StyledItem = styled(Dropdown.Item)`
    color: white;
    &:hover {
        background-color: #1E1E1E;
        color: var(--clr-accent);
    } 
`;