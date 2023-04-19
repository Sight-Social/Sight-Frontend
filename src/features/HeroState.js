import { useSelector } from 'react-redux';

function HeroState() {
  const {
    username,
    email,
    password,
    googleId,
    accessToken,
    userToken,
    avatar,
  } = useSelector((state) => state.login);

  return (
    <div>
      <h1>Global state</h1>
      {username === '' ? (
        <h6>user empty</h6>
      ) : (
        <>
          <h6>user</h6>
          <p>username: {username}</p>
          <p>email: {email}</p>
          <p>password: {password}</p>
          <p>googleId: {googleId}</p>
          <p>accessToken: {accessToken}</p>
          <p>userToken: {userToken}</p>
          <p>avatar: {avatar}</p>
        </>
      )}
    </div>
  );
}

export default HeroState;
