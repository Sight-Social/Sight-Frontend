import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  FormContent,
  FormLabel,
  FormWrap,
  FormH1,
  FormInput,
  Form,
  Icon,
  FormButton,
  SightIcon,
  IconWrapper,
} from './LoginElements';
import SightWhiteIcon from '../../assets/icons/Sight-White-32.svg';

import { login } from '../../features/login/loginSlice';
import { setUser } from '../../user/userSlice';

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const action = await dispatch(login({ username, password }));
      if (action.payload.username) {
        dispatch(setUser(action.payload));
        navigate(`/user/${action.payload.username}`);
      }
      else {
        alert('Login failed. Please try again.');
        window.location.reload();
      }
    
    } catch (err) {
      console.log('Login.js: handleLogin() error:', err);
    }
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Sight</Icon>
          <FormContent>
            <Form onSubmit={handleLogin}>
              <IconWrapper>
                <SightIcon src={SightWhiteIcon} />
              </IconWrapper>
              <FormH1>Login</FormH1>
              <FormLabel htmlFor='for'>Username</FormLabel>
              <FormInput
                type='username'
                required
                autoComplete='current-username'
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput
                type='password'
                required
                autoComplete='current-password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormButton type='submit'>
                Login {/* {user ? 'Continue' : 'Log in'} */}
              </FormButton>
              {/* {error && <div>{error}</div>} */}
              {/* <Text to='/signup'>Sign Up</Text>
            <Text to='/reset-password'>Forgot password</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
        {/* <HeroState /> */}
      </Container>
    </>
  );
}
