import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from './Pages/Home.js';
import { ProfilePage } from './Pages/ProfilePage';
import { LoginPage } from './Pages/LoginPage';
import { SignupPage } from './Pages/SignupPage';
import { FeedPage } from './Pages/FeedPage';
import { SelFocalPointPage } from './Pages/SelFocalPointPage';

import { clearUser, setUser } from './/user/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);


  if (user) {
    console.log('App.js user: ', user);
  }

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  }, [dispatch]);

  console.log('App.js: ', user);

  //Remember: Routes are rendered in order, so the most specific routes should be at the top
  return (
    <Router>
      <Routes>
        {user.isAuthenticated ? (
          <>
            <Route path="/user/:username/focalpoints/:focalpointId" element={<SelFocalPointPage />} />
            <Route path="/user/:username/feed" element={<FeedPage />} />
            <Route path="/user/:username" element={<ProfilePage />} />
            <Route path='/' element={<HomePage />} />
          </>
        ) : (
          <>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/' element={<HomePage />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;