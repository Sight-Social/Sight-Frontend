import styled from 'styled-components';

export const MainContainer = styled.div`
  /*font-family: 'Futura';
  /* background-color: var(--clr-black); */

  /* background-color: var(--clr-gray); */

  background: hsla(0, 0%, 7%, 1);

  background: linear-gradient(
    90deg,
    hsla(0, 0%, 7%, 1) 80%,
    hsla(0, 0%, 15%, 1) 93%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(0, 0%, 7%, 1) 80%,
    hsla(0, 0%, 15%, 1) 93%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(0, 0%, 7%, 1) 80%,
    hsla(0, 0%, 15%, 1) 93%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#121212", endColorstr="#252525", GradientType=1 );
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const NavContainer = styled.div`
  padding-top: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 20vw;

  justify-content: flex-start;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: black;
`;

export const NavSubHeader = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  padding: 10px 0px 0px 20px;
`;

export const NavHeader = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  padding-left: 20px;
`;

export const Container = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80vw;
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  font-size: 1.75rem;
  font-weight: 600;
  color: white;
  padding-bottom: 10px;

  width: 100%;
  height: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Subheader = styled.h4`
  margin: 10px 0px 20px 0px;
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
`;

export const PinnedInsights = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
  margin-bottom: 30px;
  &::-webkit-scrollbar {
    height: 0.6em;
    width: 0.2em;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #000000;
    transition: background-color 0.2s ease-in-out;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555555;
  }
  &::-ms-scrollbar {
    width: 0.2em;
    background-color: transparent;
  }
  &::-ms-scrollbar-thumb {
    border-radius: 10px;
    background-color: #e5e5e5;
    transition: background-color 0.2s ease-in-out;
    width: 0.2em;
  }
  &::-ms-scrollbar-thumb:hover {
    background-color: #555555;
  }
`;

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin-left: 20%;
  margin-right: 20%;
  width: 80%;
`;

export const BtnsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const BtnWrap = styled.div`
  margin-right: 20px;
`;

export const Username = styled.div`
  font-size: 2rem;
  @media screen and (max-width: 600px) {
    margin-top: 10px;
  }
`;

export const EditableUsername = styled.input`
  font-weight: Bold;
  font-size: 2rem;
  margin: 0 0 20px 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  border: none;
  padding: 5px;
  text-decoration: none;
  width: 95%;
  resize: none;
`;

export const ProfilePath = styled.div`
  font-size: 1.1rem;
  margin-top: 5px;
  color: #939393;
`;

export const ProfileDetailsWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileContainer = styled.div``;
export const SpaceDetailsAndProfileButton = styled.div`
  display: flex;
  flex-direction: col;
  justify-content: space-between;
`;

export const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: contain;
  -o-object-fit: contain;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfilePictureWrapper = styled.div`
  margin-right: 30px;
  @media screen and (max-width: 600px) {
    margin-right: 0px;
  }
`;

export const CenterMobile = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 20px;
  }
`;

export const Spacer = styled.div`
  width: 25px;
`;
