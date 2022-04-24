import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from '../actionTypes/users';
import * as userApi from '../Api/user';

export const signup = (userData, navigate) => (dispatch) => {
  userApi
    .signup(userData)
    .then((response) => {
      if (response.status === 201) {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: response.data,
        });
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/login');
      } else {
        dispatch({
          type: REGISTER_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to signup');
      dispatch({
        type: REGISTER_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const login = (userData, navigate) => (dispatch) => {
  userApi
    .login(userData)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });

        console.log(response.data, 'response login data');
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/admin/home');
      } else {
        dispatch({
          type: LOGIN_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to login');
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.response.data.message,
      });
    });
};

const updateUser = (userData, navigate) => (dispatch) => {
  userApi
    .updateUser(userData)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: response.data,
        });
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/admin/home');
      } else {
        dispatch({
          type: UPDATE_USER_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to update user');
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: error.response.data.message,
      });
    });
};
