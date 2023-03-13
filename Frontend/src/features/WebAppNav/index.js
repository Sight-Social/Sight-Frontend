import Nav from 'react-bootstrap/Nav';
import {
  NavContainer,
  NavSubHeader,
  SightBanner,
} from './WebAppNavElements.js';
/* import { ReactComponent as SightLogo} from '../../assets/icons/Sight-White-32.svg'; */
import { BsBrightnessHighFill } from 'react-icons/bs';
import { IoMdPerson } from 'react-icons/io';
import { RiDashboardLine } from 'react-icons/ri';
import { CgBoard } from 'react-icons/cg';
import { MdOutlineKeyboardArrowRight, MdTableRows } from 'react-icons/md';
import { FaSlideshare } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export function WebAppNav() {
  const { username, email, avatar, pinned_insights, focalpoints } = useSelector(
    (state) => state.user
  );
  let feedURL = `/user/${username}/feed`;
  let profileURL = `/user/${username}`;
  console.log('WAN-FPS:', focalpoints);
  return (
    <NavContainer>
      <Nav
        defaultActiveKey='/home'
        className='flex-column'
        style={{ fontSize: '20px', paddingLeft: '5px' }}
      >
        <SightBanner>
          {/* <SightLogo /> */}
          <Nav.Link
            href='/'
            style={{
              color: 'white',
              transition: 'color 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#AEAEAE')}
            onMouseLeave={(e) => (e.target.style.color = 'white')}
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
          <IoMdPerson />
          Profile
        </Nav.Link>
        <Nav.Link
          href={feedURL}
          style={{ color: '#AEAEAE', transition: 'color 0.3s ease-in-out' }}
          onMouseEnter={(e) => (e.target.style.color = 'white')}
          onMouseLeave={(e) => (e.target.style.color = '#AEAEAE')}
        >
          <RiDashboardLine />
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
        <MdTableRows />
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
        <FaSlideshare />
        Shared Focal Points
      </NavSubHeader>
      <Nav
        defaultActiveKey='/home'
        className='flex-column'
        style={{ paddingLeft: '15px' }}
      >
        {/* {user.focalpoints
          ? user.focalpoints.map((focalpoint, index) => (
              <Nav.Link
                href={`/user/${user.username}/focalpoints/${focalpoint._id}`}
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
          : null} */}
      </Nav>
    </NavContainer>
  );
}

export default WebAppNav;
