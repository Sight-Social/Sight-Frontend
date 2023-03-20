import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements';
import TrippleDot from '../../../assets/icons/TrippleDot.png';

export function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        {/* <CloseIcon /> */}
        <TrippleDot />
      </Icon>
      {/* <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='focalpoints' onClick={toggle}>
            Focal Points
          </SidebarLink>
          <SidebarLink to='feed' onClick={toggle}>
            Feed
          </SidebarLink>
          <SidebarLink to='discover' onClick={toggle}>
            Discover
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/focal-points'>My Focal Points</SidebarRoute>
        </SideBtnWrap>
        <SideBtnWrap>
          <SidebarRoute to='/login'>Login</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper> */}
    </SidebarContainer>
  );
}

/* export default Sidebar; */
