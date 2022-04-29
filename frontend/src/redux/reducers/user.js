import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../actionTypes/users';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        hasError: false,
        message: '',
      };
    case LOGIN_FAILURE:
      console.log(action.payload, 'my action payload reducer success');
      return {
        ...state,
        hasError: true,
        user: {},
        isAuthenticated: false,
        message: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        hasError: false,
        user: {},
        isAuthenticated: false,
        message: '',
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        hasError: false,
        isAuthenticated: false,
        message: '',
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        user: action.payload,
        hasError: true,
        isAuthenticated: false,
        message: action.payload,
      };

    default:
      console.log(action.payload, 'my action payload reducer default');
      return state;
  }
};

export default userReducer;
