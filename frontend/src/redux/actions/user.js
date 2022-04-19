import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCES,
  LOGOUT_FAILURE,
} from '../actionTypes/users';
import * as userApi from '../Api/user';

export const signup = (userData) => (dispatch) => {
  // const response = await userApi.signup(userData);
  userApi
    .signup(userData)
    .then((response) => {
      if (response.status === 201) {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: response.data,
        });
        // set token to local storage
        localStorage.setItem('token', response.data.token);
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
