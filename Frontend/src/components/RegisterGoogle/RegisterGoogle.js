import React from 'react';
import { MainContainer } from './RegisterGoogleElements';


export default function RegisterGoogle(){

  const onGoogleLogin = () => {
    console.log('Google login clicked');
    window.location.href = 'http://localhost:3000/auth/google';
  };

  console.log('RegisterPage popped')
  return (
    <MainContainer>
        <h1>Please sign in using Google to link your account</h1>
        <button onClick={() => onGoogleLogin() }> Sign in with Google </button>
    </MainContainer>

  )
}

