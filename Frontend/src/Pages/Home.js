import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/PageComponents/NavBar';
import Footer from '../components/PageComponents/Footer/Footer';
import IntroSection from '../components/LandingPage/IntroSection';
import InfoSection from '../components/LandingPage/InfoSection';
import {
  FocalPoints,
  Feed,
  Discover,
} from '../components/LandingPage/InfoSection/Data';
import Sidebar from '../components/PageComponents/Sidebar';
// import { useGoogleLogin } from '@react-oauth/google';

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  /* const isAuthenticated = user ? user.isAuthenticated : false;
  const username = user ? user.username : ''; */

  /* const onGoogleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      const tokens = await axios.post('http://localhost:3000/auth/google', {
        code: codeResponse.code,
      });

      console.log(tokens);
    },
    onError: (errorResponse) => console.log(errorResponse),
  }); */
  /* <div className="g_id_signin"
     data-type="standard"
     data-shape="pill"
     data-theme="outline"
     data-text="signin_with"
     data-size="large"
     data-logo_alignment="left">
    </div>
    <div id="g_id_onload"
     data-client_id="500185968473-dvleghqpei71aqdvo664v97657dr0koq.apps.googleusercontent.com"
     data-context="signin"
     data-ux_mode="popup"
     data-login_uri="http://localhost:3000/auth/google/callback"
     data-auto_prompt="false">
    </div>
*/
  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar />
      {/* <h1>{userTest}</h1> */}
      <IntroSection />
      <InfoSection {...FocalPoints} />
      <InfoSection {...Feed} />
      <InfoSection {...Discover} />
      <Footer />
    </>
  );
}
