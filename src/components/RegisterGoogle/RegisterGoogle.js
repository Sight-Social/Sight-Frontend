import React from 'react';
import {
  MainContainer,
  Button,
  Header,
  IconsWrapper,
  Icon,
} from './RegisterGoogleElements';
import { useSelector } from 'react-redux';
import YouTube from '../../assets/IconTransistion/YouTube.png';
import Spotify from '../../assets/IconTransistion/Spotify.png';
export default function RegisterGoogle() {
  const { tokens } = useSelector((state) => state.profile.tokens);
  const onGoogleLogin = () => {
    console.log('Google login clicked');
    window.location.href = `${process.env.REACT_APP_API_URL_DEV}/auth/google`;
  };

  return (
    <MainContainer>
      <IconsWrapper>
        <Icon
          src={YouTube}
          alt='YouTube'
          style={{ opacity: tokens != null ? '100%' : '50%' }}
        />
        <Icon
          src={Spotify}
          alt='YouTube'
          style={{
            marginLeft: '30px',
            opacity: tokens != null ? '100%' : '50%',
          }}
        />
      </IconsWrapper>
      <Header>Sign in using Google to link your YouTube account</Header>
      <Button onClick={() => onGoogleLogin()}> Sign in with Google </Button>
    </MainContainer>
  );
}
