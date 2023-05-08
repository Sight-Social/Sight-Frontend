import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearProfile } from '../../../features/profile/profileSlice';
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

export function Navbar() {
  const [scrollNav, setScrollNav] = useState(false);
  const [isProfile] = useState(false);
  const [toggle] = useState(false);

  const navigate = useNavigate();
  const { isAuthenticated, username } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const profilePath = '/user/' + username;

  const handleLogout = () => {
    /* console.log('[NavBar/index.js] Logout btn clicked'); */
    localStorage.removeItem('user');
    dispatch(clearProfile());
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
            </MobileIcon>
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

export default Navbar;
