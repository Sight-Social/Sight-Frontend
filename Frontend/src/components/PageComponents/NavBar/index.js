import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clearUser from '../../../features/login/loginSlice';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll/modules';
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import styled from 'styled-components';

export function Navbar() {
  const [scrollNav, setScrollNav] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();
  const { isAuthenticated, username } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const profilePath = '/user/' + username;

  const handleLogout = () => {
    console.log('[NavBar/index.js] Logout btn clicked');
    localStorage.removeItem('user');
    dispatch(clearUser());
    navigate('/');
    window.location.reload();
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
  ];
  const ButtonGroupWrapper = styled.div`
    /* height: 50px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
  `;

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavBarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              Sight
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>{' '}
            {isProfile ? (
              <>
                {/* <NavBtn>
                  <NavBtnLink to="/user/:username">Feed</NavBtnLink>
                </NavBtn> */}
              </>
            ) : (
              <>
                <NavMenu>
                  <NavItem>
                    <NavLinks
                      to='focalpoints'
                      className='passive'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                    >
                      Focal Points
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks
                      to='feed'
                      className='passive'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                    >
                      Feed
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks
                      to='discover'
                      className='passive'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                    >
                      Discover
                    </NavLinks>
                  </NavItem>
                </NavMenu>
              </>
            )}
            {isAuthenticated ? (
              <>
                <NavBtn>
                  <NavBtnLink to='/' onClick={handleLogout}>
                    Logout
                  </NavBtnLink>
                </NavBtn>
                <NavBtn>
                  <NavBtnLink to={profilePath}>Profile</NavBtnLink>
                </NavBtn>
              </>
            ) : (
              <>
                <NavBtn>
                  <NavBtnLink to='/login'>Login</NavBtnLink>
                </NavBtn>
              </>
            )}
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

/* <BtnWrap>
                      <Button
                        variant="primary"
                        size="md"
                        onClick={handleCancelProfileChange}>
                        Cancel
                      </Button>{' '}
                    </BtnWrap>
                    <BtnWrap>
                      <Button
                        variant="primary"
                        size="md"
                        onClick={handleSaveProfile}>
                        Save Profile
                      </Button>{' '}
                    </BtnWrap> */

export default Navbar;
