import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  position: sticky;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
`;

export const MobileIcon = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  transform: translate(-80%, 40%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;
  z-index: 100;
  /* display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  } */
`;

export const NavContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 999;
`;

export const NavSubHeader = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
`;

export const SightBanner = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  padding: 10px 0px 0px 0px;
  font-size: 1.38rem;
`;
