import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from './loginActions';
import HeroState from '../HeroState';
import {
  Text,
  Container,
  FormContent,
  FormLabel,
  FormWrap,
  FormH1,
  FormInput,
  Form,
  Icon,
  FormButton,
  SightIcon,
  IconWrapper,
} from './LoginElements';
/* import SightWhiteIcon from '../../../assets/icons/Sight-White-32.svg'; */

import { login, selectUsername, selectPassword } from './loginSlice';

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usrname = useSelector(selectUsername);
  const pswd = useSelector(selectPassword);
  const user = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    console.log('Login.js: useEffect() user:', user);
    if (user.username) {
      navigate(`/user/${user.username}`);
    }
  }, [navigate, user])

  async function handleLogin(e){
    e.preventDefault();
    console.log('Login.js: handleLogin() dispatching userLogin with:');
    console.log({ username, email, password});
    try {
      const action = await dispatch(userLogin({ username, email, password }));
      console.log('Login.js: handleLogin() user after dispatch:', action.payload);
      navigate(`/user/${action.payload.username}`);
    } catch (err) {
      console.log('Login.js: handleLogin() error:', err);
    }
  }
  

  /* <Icon to='/'>Sight</Icon> */
  return (
    <>
      <HeroState />
    <Container>
      <FormWrap>
        <FormContent>
          <Form onSubmit={handleLogin}>
            {/* <IconWrapper>
              <SightIcon src={SightWhiteIcon} />
            </IconWrapper> */}
            <FormH1>Login</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput
              type='email'
              required
              autoComplete='current-email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel htmlFor='for'>Username</FormLabel>
            <FormInput
              type='username'
              required
              autoComplete='current-username'
              onChange={(e) => setUsername(e.target.value)}
            />
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput
              type='password'
              required
              autoComplete='current-password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormButton type='submit'>
              Login {/* {user ? 'Continue' : 'Log in'} */}
            </FormButton>
            {/* {error && <div>{error}</div>} */}
            {/* <Text to='/signup'>Sign Up</Text>
            <Text to='/reset-password'>Forgot password</Text> */}
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
    </>
  );
}

/* export default Login; */

// import { useState } from 'react';
// import axios from 'axios';
// import {
//   Text,
//   Container,
//   FormContent,
//   FormLabel,
//   FormWrap,
//   FormH1,
//   FormInput,
//   Form,
//   Icon,
//   FormButton,
//   SightIcon,
//   IconWrapper,
// } from './LoginElements';

// import { login } from './loginSlice';
// /* import SightWhiteIcon from '../../../assets/icons/Sight-White-32.svg'; */

// /* REDUX */
// /* import { login } from '../login'; */
// import { useDispatch, useSelector } from 'react-redux';
// import { Navigate, useNavigate } from 'react-router-dom';

// export function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');

//   /* let navigate = useNavigate(); */
//   const dispatch = useDispatch();
//   /* const { isLoggedIn } = useSelector((state) => state.auth); */
//   /* const [loading, setLoading] = useState(false); */

//   /* const { message } = useSelector(state => state.message); */

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     /* dispatch(login(username, password))
//       .then(() => {
//         navigate('/profile');
//         window.location.reload();
//       })
//       .catch(() => {
//         setLoading(false);
//       }); */

//     /* try {
//       const res = await axios.post('http://localhost:3000/login', {
//         email: email,
//         password: password,
//         username: username,
//       });
//       if (res.status === 200) {
//         console.log('[Login/index.js] Login successful');
//         console.log('[Login/index.js] res.data: ', res.data);
//         onLogin(res.data.user);
//       } else {
//         console.log('[Login/index.js] Login failed');
//         console.log('[Login/index.js] res.data: ', res.data);
//         alert('Login failed');
//       }
//     } catch (error) {
//       console.log(error);
//     } */
//   };

//   return (
//     <>
//       <Container>
//         <FormWrap>
//           <Icon to='/'>Sight</Icon>
//           <FormContent>
//             <Form onSubmit={handleLogin}>
//               <IconWrapper>
//                 {/* <SightIcon src={SightWhiteIcon} /> */}
//               </IconWrapper>
//               <FormH1>Login</FormH1>
//               <FormLabel htmlFor='for'>Email</FormLabel>
//               <FormInput
//                 type='email'
//                 required
//                 autoComplete='current-email'
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <FormLabel htmlFor='for'>Username</FormLabel>
//               <FormInput
//                 type='username'
//                 required
//                 autoComplete='current-username'
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <FormLabel htmlFor='for'>Password</FormLabel>
//               <FormInput
//                 type='password'
//                 required
//                 autoComplete='current-password'
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <FormButton
//                 type='submit'
//                 onSubmit={handleLogin}
//                 onClick={() => dispatch(login())}
//               >
//                 Continue
//               </FormButton>
//               <Text to='/signup'>Sign Up</Text>
//               <Text to='/reset-password'>Forgot password</Text>
//             </Form>
//           </FormContent>
//         </FormWrap>
//       </Container>
//     </>
//   );
// }
