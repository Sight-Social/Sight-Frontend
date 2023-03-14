import {
  SET_USER,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/loginActions';

const initialState = {
  user: {
    isAuthenticated: false
  }
  loading: false,
  error: null,
};


//this is what you are dispatching actions to
//reducers live in the store and are the only thing that can update the state
//the reducer will take the action it recevies and update the state
//the state will be updated in the store
//the store will update the components
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {

        //1. ...state is the current state
        ...state, 
        //2 .user is the key in the state object
        //3. action.payload is the value you are setting the key to
        user: action.payload,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true, //this is used to show a loading spinner
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
