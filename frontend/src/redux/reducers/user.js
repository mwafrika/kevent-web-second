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
        isLoggedIn: true,
        hasError: false,
        message: '',
      };
    case LOGIN_FAILURE:
      console.log(action.payload, 'my action payload reducer success');
      return {
        ...state,
        hasError: true,
        user: {},
        isLoggedIn: false,
        message: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        hasError: false,
        user: {},
        isLoggedIn: false,
        message: '',
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        hasError: false,
        isLoggedIn: false,
        message: '',
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        user: action.payload,
        hasError: true,
        isLoggedIn: false,
        message: action.payload,
      };

    default:
      console.log(action.payload, 'my action payload reducer default');
      return state;
  }
};

export default userReducer;
