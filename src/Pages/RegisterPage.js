import React from 'react';
import RegisterGoogle from '../components/RegisterGoogle/RegisterGoogle.js';

export function RegisterPage() {
  async function onGoogleLogin() {
    try {
      window.location.href = 'http://localhost:3000/auth/google';
    } catch (error) {
      console.log('[RegisterPage/google] Google Login failed');
      console.log('[RegisterPage/google] error: ', error);
    }
  }
  return (
    <>
      <RegisterGoogle onGoogleLogin={onGoogleLogin} />
    </>
  );
};

