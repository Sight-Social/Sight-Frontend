import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Footer from '../footer/Footer';
import {
  MainContainer,
  Container,
  UserProfile,
  Subheader,
  PinnedInsights,
  Username,
  ProfilePath,
  BtnWrap,
  BtnsWrapper,
  ProfileDetailsWrapper,
  ProfilePicture,
  ProfilePictureWrapper,
  CenterMobile,
  EditableUsername,
  NavContainer,
  NavSubHeader,
  ProfileContainer,
  SpaceDetailsAndProfileButton,
  Spacer,
} from './ProfileElements.js';

import YouTubeVideo from '../youtubeVideo/YouTubeVideo';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';

export function Profile(){
  const { username, email, avatar, pinned_insights, focalpoints } = useSelector(state => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(username);

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };
  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };
  async function handleSaveProfile() {
    setIsEditing(false);
    try {
      const res = await axios.put(`http://localhost:3000/user/${email}`, {
        username: editedName,
      });
    } catch (error) {
      console.log(error);
    }
  }
  const handleCancelProfileChange = () => {
    setIsEditing(false);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log('[NavBar/index.js] Logout btn clicked');
    sessionStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

  let feedURL = `${username}/feed`;
  let profileURL = `${username}`;
  // http://localhost:3001/user/noble/focalpoints/63fcc092450eb140564facd3
  return (
    <MainContainer>
      <Container>
        {' '}
        {/* WRAPS PROFILE, PINNED INSIGHTS, & FOCAL POINTS */}
        <UserProfile>
          {' '}
          {/* USER PROFILE WRAPPER */}
          {/* <CenterMobile> */}
          <ProfilePictureWrapper>
            <ProfilePicture src={avatar} />
          </ProfilePictureWrapper>
          <ProfileDetailsWrapper>
            {isEditing ? (
              <>
                <EditableUsername
                  value={editedName}
                  onChange={handleNameChange}
                />
                <ProfilePath>{email}</ProfilePath>
                <BtnsWrapper>
                  <BtnWrap>
                    <Button
                      variant="secondary"
                      size="md"
                      onClick={handleCancelProfileChange}>
                      Cancel
                    </Button>{' '}
                  </BtnWrap>
                  <BtnWrap>
                    <Button
                      variant="secondary"
                      size="md"
                      onClick={handleSaveProfile}>
                      Save Profile
                    </Button>{' '}
                  </BtnWrap>
                </BtnsWrapper>
              </>
            ) : (
              <>
                <Username>{editedName}</Username>
                <ProfilePath>{email}</ProfilePath>
                <BtnsWrapper>
                  <BtnWrap>
                    <Button variant="secondary"
                    size="md">
                      Share
                    </Button>{' '}
                  </BtnWrap>
                  <BtnWrap>
                    <Button
                      variant="secondary"
                      size="md"
                      onClick={handleEditProfile}>
                      Edit Profile
                    </Button>{' '}
                  </BtnWrap>
                </BtnsWrapper>
              </>
            )}
          </ProfileDetailsWrapper>
            <Button variant="secondary"
             style ={{
              height: "40%",
              width:"150px",
              marginTop: "20px"}}
            onClick={handleLogout}>Logout</Button>
          {/* </CenterMobile> */}
        </UserProfile>
        <Subheader>Pinned Insights</Subheader>
        <PinnedInsights>
          {pinned_insights
            ? pinned_insights.map((insight, index) => (
                <>
              
                  <YouTubeVideo
                    key={index}
                    className="pinned-insight"
                    videoId={insight.video_id}
                    height="250"
                    width="300"
                  />
            
                  <Spacer />
                </>
              ))
            : null}
        </PinnedInsights>
        {/* FOCAL POINT GRID */}
        <Footer />
      </Container>
    </MainContainer>
  );
};
