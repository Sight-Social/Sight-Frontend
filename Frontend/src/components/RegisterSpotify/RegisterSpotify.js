import React from 'react';
import { MainContainer } from './RegisterSpotifyElements';


export default function RegisterSpotify(){

    const onSpotifyLogin = () => {
        console.log('Spotify login clicked');
        window.location.href = 'http://localhost:3000/auth/spotify';
    };

  console.log('RegisterPage popped')
  return (
    <MainContainer>
        <h1>Please sign in using Spotify to link your account</h1>
        <button onClick={() => onSpotifyLogin() }> Sign in with Spotify </button>
    </MainContainer>

  )
}

