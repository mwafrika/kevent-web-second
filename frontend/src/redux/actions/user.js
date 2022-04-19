import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCES,
  LOGOUT_FAILURE,
} from '../actionTypes/users';
import * as userApi from '../Api/user';

import axios from 'axios';
const loginUrl = 'http://localhost:5000/api/v1/signin';
const signupUrl = 'http://localhost:5000/api/v1/signup';

export const signup = (userData) => async (dispatch) => {
  const { data } = userApi.signup(userData);
  try {
    console.log(data, 'Response actions');

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.message,
    });
  }
};
