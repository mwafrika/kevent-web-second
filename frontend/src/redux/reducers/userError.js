import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCES,
  LOGOUT_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../actionTypes/users';

const initialState = {
  message: '',
  hasError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FAILURE:
      return {
        ...state.user,
        hasError: true,
        message: action.payload,
      };
    case LOGOUT_FAILURE:
      console.log(action.payload, 'my action payload reducer failure');
      return {
        ...state,
        hasError: true,
        message: action.payload,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        hasError: true,
        message: action.payload,
      };
    default:
      console.log(action.payload, 'my action payload reducer default');
      return state;
  }
};

export default userReducer;
