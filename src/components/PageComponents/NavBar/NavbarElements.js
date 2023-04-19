import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav ? 'var(--clr-black)' : 'var(--clr-black)'}; /* 'transparent' */
  height: 80px;
  display: flex;
  justify-content: flex-start;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  /* max-width: 80%; */
  padding-right: 20%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  margin-left: 20%;
  @media screen and (max-width: 768px) {
    margin-left: 0%;
    max-width: 100%;
    width: 100%;
  }
  max-width: 80%;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Futura';
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  margin: 0 1.5em;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid var(--clr-accent); /* color of underline for navbar */
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 8px;
  background: #0d6efd;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #c9e8f9;
    color: #010606;
  }
`;
