import React from 'react'
import { useSelector } from 'react-redux';
import HeroState from '../HeroState';

export function ProfilePage() {
    const { username, email, password, googleId, accessToken, userToken, avatar, fp_array } = useSelector(state => state.user);
    console.log({
        username: username,
        email: email,
        password: password,
        googleId: googleId,
        accessToken: accessToken,
        userToken: userToken,
        avatar: avatar,
        fp_array: fp_array
    })
  return (
    <div>
        <HeroState />
        <h1>Profile Page</h1>
    </div>
  )
}
