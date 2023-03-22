import styled from 'styled-components';
import '../../../App.css';
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




export const Container = styled.div``;

export const FormWrap = styled.div`
  position: absolute;
  right: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: var(--clr-black);
  padding: 20px 30px 30px 30px;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;

  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 0px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 25px;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: var(--clr-accent);
  padding: 10px 0;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
