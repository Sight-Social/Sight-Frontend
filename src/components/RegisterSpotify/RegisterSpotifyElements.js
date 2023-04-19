import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-black);
  height: 100vh;
`;

export const Header = styled.h1`
  color: var(--clr-light);
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1em;
`;

export const Button = styled.button`
  margin-top: 1em;
  background-color: var(--clr-light);
  color: var(--clr-black);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: var(--clr-accent);
    color: var(--clr-white);
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  margin: 30px;
`;

export const Icon = styled.img`
  height: 75px;
`;
