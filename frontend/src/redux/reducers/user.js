import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCES,
  LOGOUT_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../actionTypes/users';

const initialState = {
  isAuthenticated: false,
  user: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    surname: '',
    phone: '',
    address: '',
    sexe: '',
    profession: '',
    imageUrls: '',
    role: 'USER',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state.user,
        user: action.payload,
        isAuthenticated: true,
      };

    case LOGIN_FAILURE:
      return {
        ...state.user,
        user: {},
        isAuthenticated: false,
      };
    case LOGOUT_SUCCES:
      console.log(action.payload, 'my action payload reducer success');
      return {
        ...state,
        user: {},
        isAuthenticated: false,
      };
    case LOGOUT_FAILURE:
      console.log(action.payload, 'my action payload reducer failure');
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        user: state.payload,
        isAuthenticated: false,
      };
    default:
      console.log(action.payload, 'my action payload reducer default');
      return state;
  }
};

export default userReducer;
