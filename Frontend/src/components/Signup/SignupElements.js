import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: var(--clr-accent);
  /* background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  ); */
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: var(--clr-black);
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
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

export const Text = styled(Link)`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
`;

export const SightIcon = styled.img`
  width: 100px;
  height: 100px;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const IconWrapper = styled.div`
  /* border: 5px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
  margin-bottom: 20px;
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
