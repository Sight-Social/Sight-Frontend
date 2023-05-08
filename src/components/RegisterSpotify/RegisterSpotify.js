import React from 'react';
import {
  MainContainer,
  Button,
  Header,
  IconsWrapper,
  Icon,
} from './RegisterSpotifyElements';
import { useSelector } from 'react-redux';
import YouTube from '../../assets/IconTransistion/YouTube.png';
import Spotify from '../../assets/IconTransistion/Spotify.png';

export default function RegisterSpotify() {
  const { tokens } = useSelector((state) => state.profile.tokens);
  const onSpotifyLogin = () => {
    /* console.log('Spotify login clicked'); */
    window.location.href = `${process.env.REACT_APP_API_URL_DEV}/auth/spotify`;
  };

  /* console.log('RegisterPage popped'); */
  return (
    <MainContainer>
      <IconsWrapper>
        <Icon
          src={YouTube}
          alt='YouTube'
          /* style={{ opacity: tokens != null ? '100%' : '50%' }} */
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
      <Header>Sign in to Spotify to link your account</Header>
      <Button onClick={() => onSpotifyLogin()}> Sign in with Spotify </Button>
    </MainContainer>
  );
}
