import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
  MobileIcon,
  NavContainer,
  NavSubHeader,
  SightBanner,
} from './NavOffcanvasElements';
import { FaBars } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import { RiDashboardLine } from 'react-icons/ri';
import { MdOutlineKeyboardArrowRight, MdTableRows } from 'react-icons/md';
import { FaSlideshare } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import { ReactComponent as SightLogo } from '../../assets/icons/Sight-White-32.svg';
import { clearProfile } from '../../features/profile/profileSlice';
import { useNavigate } from 'react-router-dom';

export function OffCanvasNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const focalpoints = useSelector((state) => state.focalpoint.fp_array);
  const username = useSelector((state) => state.profile.username);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    /* console.log('[NavBar/index.js] Logout btn clicked'); */
    localStorage.removeItem('user');
    dispatch(clearProfile());
    navigate('/');
    window.location.reload();
  };

  let feedURL = `/user/${username}/feed`;
  let profileURL = `/user/${username}`;
  let loginURL = `/login`;
  const { isAuthenticated } = useSelector((state) => state.profile);
  /* console.log('isAuthenticatedNavOff: ' + isAuthenticated); */
  return (
    <>
      <MobileIcon onClick={toggleShow}>
        <FaBars />
      </MobileIcon>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement='end'
        style={{ backgroundColor: 'black', width: '250px' }}
      >
        {isAuthenticated ? (
          <>
            <Offcanvas.Header closeButton style={{ marginBottom: '-1rem' }}>
              <SightBanner>
                <SightLogo style={{ marginRight: '15px' }} />
                <Nav.Link
                  href='/'
                  style={{
                    color: 'white',
                    transition: 'color 0.3s ease-in-out',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'white')}
                  onMouseLeave={(e) => (e.target.style.color = 'clr-white')}
                >
                  Sight
                </Nav.Link>
              </SightBanner>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <NavContainer>
                <Nav
                  defaultActiveKey='/home'
                  className='flex-column'
                  style={{ fontSize: '20px' }}
                >
                  <Nav.Link
                    href={profileURL}
                    style={{
                      color: '#AEAEAE',
                      transition: 'color 0.3s ease-in-out',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'white')}
                    onMouseLeave={(e) => (e.target.style.color = '#AEAEAE')}
                  >
                    <IoMdPerson
                      style={{
                        color: 'white',
                        marginRight: '10px',
                        marginLeft: '-1rem',
                        marginBottom: '3.5px',
                      }}
                    />
                    Profile
                  </Nav.Link>
                  <Nav.Link
                    href={feedURL}
                    style={{
                      color: '#AEAEAE',
                      transition: 'color 0.3s ease-in-out',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'white')}
                    onMouseLeave={(e) => (e.target.style.color = '#AEAEAE')}
                  >
                    <RiDashboardLine
                      style={{
                        color: 'white',
                        marginRight: '10px',
                        marginLeft: '-1rem',
                        marginBottom: '3.5px',
                      }}
                    />
                    Feed
                  </Nav.Link>
                </Nav>
                <hr
                  style={{
                    background: 'white',
                    height: '3px',
                    border: 'none',
                  }}
                />
                <NavSubHeader>
                  <MdTableRows
                    style={{
                      color: 'white',
                      marginRight: '10px',
                      marginBottom: '2.75px',
                    }}
                  />
                  Focal Points
                </NavSubHeader>
                <Nav
                  defaultActiveKey='/home'
                  className='flex-column'
                  style={{
                    paddingLeft: '15px',
                    marginTop: '10px',
                    marginBottom: '50px',
                  }}
                >
                  {focalpoints
                    ? focalpoints.map((focalpoint, index) => (
                        <Nav.Link
                          key={index}
                          href={`/user/${username}/focalpoints/${focalpoint._id}`}
                          style={{
                            color: '#AEAEAE',
                            transition: 'color 0.3s ease-in-out',
                          }}
                          onMouseEnter={(e) => (e.target.style.color = 'white')}
                          onMouseLeave={(e) =>
                            (e.target.style.color = '#AEAEAE')
                          }
                        >
                          {<MdOutlineKeyboardArrowRight />}
                          {focalpoint.title}
                        </Nav.Link>
                      ))
                    : null}
                </Nav>
                <NavSubHeader>
                  <FaSlideshare
                    style={{
                      color: 'white',
                      marginRight: '10px',
                      marginBottom: '2.75px',
                    }}
                  />
                  Shared Focal Points
                </NavSubHeader>
                <Nav
                  defaultActiveKey='/home'
                  className='flex-column'
                  style={{ paddingLeft: '15px' }}
                >
                  {focalpoints
                    ? focalpoints.map((focalpoint, index) => (
                        <Nav.Link
                          key={index}
                          href={`/user/${username}/focalpoints/${focalpoint._id}`}
                          style={{
                            color: '#AEAEAE',
                            transition: 'color 0.3s ease-in-out',
                          }}
                          onMouseEnter={(e) => (e.target.style.color = 'white')}
                          onMouseLeave={(e) =>
                            (e.target.style.color = '#AEAEAE')
                          }
                        >
                          {<MdOutlineKeyboardArrowRight />}
                          {focalpoint.title}
                        </Nav.Link>
                      ))
                    : null}
                </Nav>
                <Nav
                  defaultActiveKey='/home'
                  className='flex-column'
                  style={{ fontSize: '20px' }}
                >
                  <Nav.Link
                    to='/'
                    onClick={handleLogout}
                    style={{
                      color: '#AEAEAE',
                      transition: 'color 0.3s ease-in-out',
                      marginTop: '100%',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'white')}
                    onMouseLeave={(e) => (e.target.style.color = '#AEAEAE')}
                  >
                    <IoMdPerson
                      style={{
                        color: 'white',
                        marginRight: '10px',
                        marginLeft: '-1rem',
                        marginBottom: '3.5px',
                      }}
                    />
                    Log out
                  </Nav.Link>
                </Nav>
              </NavContainer>
            </Offcanvas.Body>
          </>
        ) : (
          <>
            <Offcanvas.Header closeButton style={{ marginBottom: '-1rem' }}>
              <SightBanner>
                <SightLogo style={{ marginRight: '15px' }} />
                <Nav.Link
                  href='/'
                  style={{
                    color: 'white',
                    transition: 'color 0.3s ease-in-out',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'white')}
                  onMouseLeave={(e) => (e.target.style.color = 'clr-white')}
                >
                  Sight
                </Nav.Link>
              </SightBanner>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <NavContainer>
                <Nav
                  defaultActiveKey='/home'
                  className='flex-column'
                  style={{ fontSize: '20px' }}
                >
                  <Nav.Link
                    href={loginURL}
                    style={{
                      color: '#AEAEAE',
                      transition: 'color 0.3s ease-in-out',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'white')}
                    onMouseLeave={(e) => (e.target.style.color = '#AEAEAE')}
                  >
                    <IoMdPerson
                      style={{
                        color: 'white',
                        marginRight: '10px',
                        marginLeft: '-1rem',
                        marginBottom: '3.5px',
                      }}
                    />
                    login
                  </Nav.Link>
                </Nav>
              </NavContainer>
            </Offcanvas.Body>
          </>
        )}
      </Offcanvas>
    </>
  );
}
