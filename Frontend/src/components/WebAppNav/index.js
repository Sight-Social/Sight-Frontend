import Nav from 'react-bootstrap/Nav';
import {
  NavContainer,
  NavSubHeader,
  SightBanner,
} from './WebAppNavElements.js';
import { ReactComponent as SightLogo } from '../../assets/icons/Sight-White-32.svg';
import { IoMdPerson } from 'react-icons/io';
import { RiDashboardLine } from 'react-icons/ri';
import { MdOutlineKeyboardArrowRight, MdTableRows } from 'react-icons/md';
import { FaSlideshare } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export function WebAppNav() {
  const focalpoints = useSelector((state) => state.user.focalpoints);
  const username = useSelector((state) => state.user.username);

  let feedURL = `/user/${username}/feed`;
  let profileURL = `/user/${username}`;
  return (
    <NavContainer>
      <Nav
        defaultActiveKey='/home'
        className='flex-column'
        style={{ fontSize: '20px', paddingLeft: '5px' }}
      >
        <SightBanner>
          <SightLogo />
          <Nav.Link
            href='/'
            style={{
              color: 'white',
              transition: 'color 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'white')}
            onMouseLeave={(e) => (e.target.style.color = 'vlr-white')}
          >
            Sight
          </Nav.Link>
        </SightBanner>
        <Nav.Link
          href={profileURL}
          style={{ color: '#AEAEAE', transition: 'color 0.3s ease-in-out' }}
          onMouseEnter={(e) => (e.target.style.color = 'white')}
          onMouseLeave={(e) => (e.target.style.color = '#AEAEAE')}
        >
          <IoMdPerson 
            style={{
              color: 'white',
              marginRight: '10px',
              marginBottom: '3.5px'
            }}/>
          Profile
        </Nav.Link>
        <Nav.Link
          href={feedURL}
          style={{ color: '#AEAEAE', transition: 'color 0.3s ease-in-out' }}
          onMouseEnter={(e) => (e.target.style.color = 'white')}
          onMouseLeave={(e) => (e.target.style.color = '#AEAEAE')}
        >
          <RiDashboardLine 
            style={{
              color: 'white',
              marginRight: '10px',
              marginBottom: '3.5px'
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
        <MdTableRows style={{
          color: 'white',
          marginRight: '10px',
          marginBottom: '2.75px'
        }} />
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
                href={`/user/${username}/focalpoints/${focalpoint._id}`}
                style={{
                  color: '#AEAEAE',
                  transition: 'color 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = '#AEAEAE')}
              >
                {<MdOutlineKeyboardArrowRight />}
                {focalpoint.title}
              </Nav.Link>
            ))
          : null}
      </Nav>
      <NavSubHeader>
        <FaSlideshare style={{
          color: 'white',
          marginRight: '10px',
          marginBottom: '2.75px'
        }} />
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
                href={`/user/${username}/focalpoints/${focalpoint._id}`}
                style={{
                  color: '#AEAEAE',
                  transition: 'color 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = '#AEAEAE')}
              >
                {<MdOutlineKeyboardArrowRight />}
                {focalpoint.title}
              </Nav.Link>
            ))
          : null}
      </Nav>
    </NavContainer>
  );
}

export default WebAppNav;
