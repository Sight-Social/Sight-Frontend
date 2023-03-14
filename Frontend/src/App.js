import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { ProfilePage } from './Pages/ProfilePage';
import { Login } from './features/login/Login';
import { clearUser, setUser } from './/user/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  let profilePath = '/';
  if (user.isAuthenticated) {
    console.log('App.js: user.isAuthenticated: ', user.isAuthenticated);
    profilePath = `/user/${user.username}`;
  }

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  }, [dispatch]);

  console.log('App.js: ', user);
  return (
    <Router>
      <Routes>
        {user.isAuthenticated ? (
          <>
            <Route path={profilePath} element={<ProfilePage />} />
            <Route path='/' element={<Login />} />
          </>
        ) : (
          <>
            <Route path='/' element={<Login />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;