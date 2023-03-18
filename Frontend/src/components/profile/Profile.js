import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUsername } from '../../features/profile/userThunk.js';
import { setProfile } from '../../features/profile/profileSlice.js';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Footer from '../PageComponents/Footer/Footer';
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
  EditableUsername,
  Spacer,
} from './ProfileElements.js';
import FocalPoints from '../FocalPoint/FocalPoints';
import YouTubeVideo from '../YouTubeVideo/YouTubeVideo';
import { useNavigate } from 'react-router-dom';

export function Profile() {
  const { username, email, avatar, pinned_insights } = useSelector(
    (state) => state.profile
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };
  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };
  async function handleSaveProfile() {
    setIsEditing(false);
    try {
      console.log('[Profile.js] editName ', editedName);
      dispatch(
        updateUsername({ oldUsername: username, newUsername: editedName })
      );
      navigate(`/user/${editedName}`);
    } catch (error) {
      console.log(error);
    }
  }
  const handleCancelProfileChange = () => {
    setIsEditing(false);
  };

  const handleLogout = () => {
    console.log('[NavBar/index.js] Logout btn clicked');
    sessionStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

  let feedURL = `${username}/feed`;
  let profileURL = `${username}`;

  return (
    <MainContainer>
      <Container>
        <UserProfile>
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
                      variant='secondary'
                      size='md'
                      onClick={handleCancelProfileChange}
                    >
                      Cancel
                    </Button>{' '}
                  </BtnWrap>
                  <BtnWrap>
                    <Button
                      variant='secondary'
                      size='md'
                      onClick={handleSaveProfile}
                    >
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
                    <Button variant='secondary' size='md'>
                      Share
                    </Button>{' '}
                  </BtnWrap>
                  <BtnWrap>
                    <Button
                      variant='secondary'
                      size='md'
                      onClick={handleEditProfile}
                    >
                      Edit Profile
                    </Button>{' '}
                  </BtnWrap>
                </BtnsWrapper>
              </>
            )}
          </ProfileDetailsWrapper>
          <Button
            variant='secondary'
            style={{
              height: '40%',
              width: '150px',
              marginTop: '20px',
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </UserProfile>
        <FocalPoints />
        <Footer />
      </Container>
    </MainContainer>
  );
}
