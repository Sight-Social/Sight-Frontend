/* import axios from 'axios';

export const SET_USER = 'SET_USER';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = (credentials) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await axios.post(
        'http://localhost:3000/login',
        credentials
      );
      const user = response.data.user;
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};
 */
