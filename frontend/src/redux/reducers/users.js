import {
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from '../actionTypes/users';

const initialState = {
  users: [],
  singleUser: {},
  loading: false,
  hasError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false,
        hasError: null,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        hasError: action.payload,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        singleUser: action.payload,
        loading: false,
        hasError: null,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        hasError: action.payload,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        hasError: null,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        hasError: action.payload,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        loading: false,
        hasError: null,
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        hasError: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
