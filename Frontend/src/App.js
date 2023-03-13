import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Login } from './features/login/Login';
import { Profile } from './features/profile/Profile';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { ProfilePage } from './Pages/ProfilePage';
import './App.css';

function App() {
  let user = useSelector((state) => state.user);
  let profilePath = `/user/${user.username}`;
  console.log('profilePath:', profilePath);

  return (
    <Router>
      <Routes>
        {user.username !== '' ? (
          <>
            <Route path={profilePath} element={<ProfilePage />} />
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
