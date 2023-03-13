import styled from 'styled-components';

export const DropDownContainer = styled.div``;

export const DropdownButton = styled.button`
  border-radius: 8px;
  background: var(--clr-light);
  white-space: nowrap;
  padding: 0px 10px;
  color: var(--clr-black);
  font-size: 36px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--clr-accent);
  }
`;
