import React from 'react';
import { MainContainer } from './RegisterGoogleElements';


const Register = ({ onGoogleLogin }) => {
  console.log('RegisterPage popped')
  return (
    <MainContainer>
        <h1>Please sign in using Google to link your account</h1>
        <button onClick={() => onGoogleLogin() }> Sign in with Google </button>
    </MainContainer>

  )
}

export default Register