import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCES,
  LOGOUT_FAILURE,
} from '../actionTypes/users';
import * as userApi from '../Api/user';

export const signup = (userData, navigate) => (dispatch) => {
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

// export const logout = (navigate) => (dispatch) => {
//   userApi
//     .logout()
//     .then((response) => {
//       if (response.status === 200) {
//         dispatch({
//           type: LOGOUT_SUCCES,
//           payload: response.data,
//         });
//         localStorage.removeItem('user');
//         navigate('/');
//       } else {
//         dispatch({
//           type: LOGOUT_FAILURE,
//           payload: response.data,
//         });
//       }
//     })
//     .catch((error) => {
//       console.log(error.response.data.message, 'unable to logout');
//       dispatch({
//         type: LOGOUT_FAILURE,
//         payload: error.response.data.message,
//       });
//     });
// };
