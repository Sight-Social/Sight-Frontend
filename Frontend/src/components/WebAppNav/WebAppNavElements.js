import styled from 'styled-components';

export const NavContainer = styled.div`
  padding-top: 27px;
  width: 20vw;

  position: sticky;
  top: 0;
  height: 100vh;
  border-right: solid dimgray 1px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavSubHeader = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  padding: 10px 0px 0px 20px;
`;

export const SightBanner = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0px 12px 6px;
  font-size: 1.38rem;
`;
