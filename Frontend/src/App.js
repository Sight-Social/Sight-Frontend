import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Login } from './features/login/Login';
import { HomePage } from './Pages/Home.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { ProfilePage } from './Pages/ProfilePage';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
