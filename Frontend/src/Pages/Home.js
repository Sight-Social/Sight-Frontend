import { useState } from 'react';
import Navbar from '../components/PageComponents/NavBar';
import Footer from '../components/PageComponents/Footer/Footer';
import IntroSection from '../components/LandingPage/IntroSection';
import InfoSection from '../components/LandingPage/InfoSection';
import {
  FocalPoints,
  Feed,
  Discover,
  ContentCurationTool,
  Algorithm,
  SaveSortShare,
} from '../components/LandingPage/InfoSection/Data';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import HeroSection from '../components/LandingPage/Option2/HeroSection';
import Showcase from '../components/LandingPage/Option2/Showcase';

export function HomePage() {

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

  return (
    <>
      <Navbar />
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
