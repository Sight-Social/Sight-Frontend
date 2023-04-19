import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUsername } from '../../features/profile/userThunk.js';
import Button from 'react-bootstrap/Button';
import Footer from '../PageComponents/Footer/Footer';
import {
  MainContainer,
  Container,
  UserProfile,
  Username,
  ProfilePath,
  BtnWrap,
  BtnsWrapper,
  ProfileDetailsWrapper,
  ProfilePicture,
  ProfilePictureWrapper,
  EditableUsername,
} from './ProfileElements.js';
import FocalPoints from '../FocalPoint/FocalPoints';
import { useNavigate } from 'react-router-dom';

export function Profile() {
  const { username, email, avatar } = useSelector((state) => state.profile);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(username);
  const sightToken = useSelector((state) => state.profile.tokens.sightToken);
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
      dispatch(
        updateUsername({
          sightToken: sightToken,
          oldUsername: username,
          newUsername: editedName,
        })
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
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

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
