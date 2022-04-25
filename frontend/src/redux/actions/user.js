import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_CONFIRMATION_SUCCESS,
  RESET_PASSWORD_CONFIRMATION_FAILURE,
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

export const updateUser = (userData, id, navigate) => (dispatch) => {
  userApi
    .updateUser(userData, id)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: response.data,
        });
        console.log(response, 'response update user data');
        // localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/admin/users');
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

export const getuser = (id) => (dispatch) => {
  userApi
    .getUser(id)
    .then((response) => {
      console.log(response, 'response get user data select');
      if (response.status === 200) {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: GET_USER_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to get user');
      dispatch({
        type: GET_USER_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const getusers = () => (dispatch) => {
  userApi
    .getUsers()
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data, 'response get users');
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: GET_USERS_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to get users');
      dispatch({
        type: GET_USERS_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const deleteUser = (id, navigate) => (dispatch) => {
  userApi
    .deleteUser(id)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: DELETE_USER_SUCCESS,
          payload: response.data,
        });
        navigate('/admin/users');
      } else {
        dispatch({
          type: DELETE_USER_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to delete user');
      dispatch({
        type: DELETE_USER_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const resetpassword = (userData, navigate) => (dispatch) => {
  userApi
    .resetPassword(userData)
    .then((response) => {
      if (response.status === 200) {
        console.log(response, 'response reset password');
        dispatch({
          type: RESET_PASSWORD_SUCCESS,
          payload: response.data,
        });
        navigate('/reset-success');
      } else {
        // navigate('/admin/failure');
        dispatch({
          type: RESET_PASSWORD_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.message, 'unable to reset password');
      console.log(error.response);
      dispatch({
        type: RESET_PASSWORD_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const confirmpassword =
  (userData, userId, token, navigate) => (dispatch) => {
    userApi
      .resetPasswordConfirm(userData, userId, token)
      .then((response) => {
        if (response.status === 200) {
          console.log(response, 'response confirm password');
          dispatch({
            type: RESET_PASSWORD_CONFIRMATION_SUCCESS,
            payload: response.data,
          });
          navigate('/password-reset/success');
        } else {
          // navigate('/admin/failure');
          dispatch({
            type: RESET_PASSWORD_CONFIRMATION_FAILURE,
            payload: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error.message, 'unable to confirm password');
        console.log(error.response);
        dispatch({
          type: RESET_PASSWORD_CONFIRMATION_FAILURE,
          payload: error.response.data.message,
        });
      });
  };
