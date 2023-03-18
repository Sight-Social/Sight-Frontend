import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setProfile } from '../../features/profile/profileSlice';
import axios from 'axios';
import {
  Container,
  FormContent,
  Form,
  IconWrapper,
  Icon,
  SightIcon,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from './SignupElements.js';
import SightWhiteIcon from '../../assets/icons/Sight-White-32.svg';

export function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/signup', {
        email: email,
        password: password,
        username: username,
      });
      if (res.data) {
        console.log('Signup successful');
        alert('Signup successful');
        console.log(res.data);
        //DISPATCH TO REDUX
        setProfile(res.data);
        navigate('/register/google');
      } else {
        console.log('Signup failed');
        alert('Signup failed');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Icon to="/">Sight</Icon>
      <FormContent>
        <Form onSubmit={handleSignup}>
          <IconWrapper>
            <SightIcon src={SightWhiteIcon} />
          </IconWrapper>
          <FormH1>Welcome!</FormH1>
          <FormLabel htmlFor="for">Email</FormLabel>
          <FormInput
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel htmlFor="for">Username</FormLabel>
          <FormInput
            type="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormLabel htmlFor="for">Password</FormLabel>
          <FormInput
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormButton type="submit" onSubmit={handleSignup}>
            Sign Up
          </FormButton>
          <Text to="/login">Login</Text>
          <Text to="/help">Help</Text>
        </Form>
      </FormContent>
    </Container>
  );
}

