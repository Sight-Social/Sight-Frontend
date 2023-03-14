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
  ContentCurationTool,
  Aggregate,
  Algorithm,
  SaveSortShare,
} from '../components/LandingPage/InfoSection/Data';
import Sidebar from '../components/PageComponents/Sidebar';
// import { useGoogleLogin } from '@react-oauth/google';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import HeroSection from '../components/LandingPage/Option2/HeroSection';
import Showcase from '../components/LandingPage/Option2/Showcase';

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
  ];

  const ButtonGroupWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    margin: 1rem 25px;
  `;
  const [view, setView] = useState('option1');
  const changeView = (view) => {
    switch (view) {
      case 'option1':
        setView('option1');
        break;
      case 'option2':
        setView('option2');
        break;
      default:
        setView('option1');
        break;
    }
  };
  const NavContainer = styled.div`
    width: 100%;
    height: 100%;
  `;
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
      {/* <ButtonGroupWrapper>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type='radio'
              variant={idx % 2 ? 'outline-success' : 'outline-success'}
              name='radio'
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              stylee={{}}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </ButtonGroupWrapper> */}
      {/* <h1>{userTest}</h1> */}
      <NavContainer>
        <Nav
          justify
          variant='tabs'
          style={{
            textDecoration: 'none',
            backgroundColor: '#0b0d09',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            borderBottom: 'none',
          }}
          defaultActiveKey='link-1'
        >
          <Nav.Item>
            <Nav.Link
              eventKey='link-1'
              style={{
                backgroundColor: '#0b0d09',
                color: '#eaf8fe',
                borderBottom: 'none',
              }}
              onClick={() => changeView('option1')}
            >
              Option 1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='link-2'
              style={{
                backgroundColor: '#0b0d09',
                color: '#eaf8fe',
                borderBottom: 'none',
              }}
              onClick={() => changeView('option2')}
            >
              Option 2
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </NavContainer>
      {view === 'option1' ? (
        // render focal points section
        <>
          <IntroSection />
          <InfoSection {...FocalPoints} />
          <InfoSection {...Feed} />
          <InfoSection {...Discover} />
        </>
      ) : view === 'option2' ? (
        // render shared section
        <>
          <HeroSection />
          <Showcase />
          <InfoSection {...ContentCurationTool} />
          {/* <InfoSection {...Aggregate} /> */}
          <InfoSection {...Algorithm} />
          <InfoSection {...SaveSortShare} />
        </>
      ) : (
        // default case - render focal points section
        <>
          <IntroSection />
          <InfoSection {...FocalPoints} />
          <InfoSection {...Feed} />
          <InfoSection {...Discover} />
        </>
      )}

      <Footer />
    </>
  );
}
