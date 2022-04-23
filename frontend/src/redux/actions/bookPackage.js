import {
  CREATE_BOOK_PACKAGE_SUCCESS,
  CREATE_BOOK_PACKAGE_FAILURE,
  GET_BOOK_PACKAGES_SUCCESS,
  GET_BOOK_PACKAGES_FAILURE,
  GET_BOOK_PACKAGE_SUCCESS,
  GET_BOOK_PACKAGE_FAILURE,
  UPDATE_BOOK_PACKAGE_SUCCESS,
  UPDATE_BOOK_PACKAGE_FAILURE,
  DELETE_BOOK_PACKAGE_SUCCESS,
  DELETE_BOOK_PACKAGE_FAILURE,
} from '../actionTypes/booking';
import * as BookPackageAPI from '../Api/booking';

export const createBookPackage =
  (bookPackageData, packageId, clearForm) => (dispatch) => {
    BookPackageAPI.createBookPackage(bookPackageData, packageId)
      .then((response) => {
        if (response.status === 200) {
          console.log('See data created', response);
          dispatch({
            type: CREATE_BOOK_PACKAGE_SUCCESS,
            payload: response.data,
          });
          clearForm();
        } else {
          dispatch({
            type: CREATE_BOOK_PACKAGE_FAILURE,
            payload: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error.response.data.message, 'unable to create package');
        dispatch({
          type: CREATE_BOOK_PACKAGE_FAILURE,
          payload: error.response.data.message,
        });
      });
  };

export const getBookings = () => (dispatch) => {
  BookPackageAPI.getAllBooking()
    .then((response) => {
      if (response.status === 200) {
        console.log('See all the data', response);
        dispatch({
          type: GET_BOOK_PACKAGES_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: GET_BOOK_PACKAGES_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to get Expeditions');
      dispatch({
        type: GET_BOOK_PACKAGES_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const getSingle = (id) => (dispatch) => {
  BookPackageAPI.getOneBooking(id)
    .then((response) => {
      if (response.status === 200) {
        console.log('See single package', response.data);
        dispatch({
          type: GET_BOOK_PACKAGE_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: GET_BOOK_PACKAGE_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(
        error.response.data.message,
        'unable to get single book package'
      );
      dispatch({
        type: GET_BOOK_PACKAGE_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const updateBookPackage = (dataBook, id, navigate) => (dispatch) => {
  BookPackageAPI.updateBooking(dataBook, id)
    .then((response) => {
      console.log('See update package action', response);
      if (response.status === 200) {
        dispatch({
          type: UPDATE_BOOK_PACKAGE_SUCCESS,
          payload: response.data,
        });
        navigate('/admin/book/packages');
      } else {
        dispatch({
          type: UPDATE_BOOK_PACKAGE_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to update package');
      dispatch({
        type: UPDATE_BOOK_PACKAGE_FAILURE,
        payload: error.response.data.message,
      });
    });
};

//   export const deleteExpedition = (id, navigate) => (dispatch) => {
//     BookPackageAPI.deleteExpedition(id)
//       .then((response) => {
//         console.log('See delete package action', response);
//         if (response.status === 204) {
//           dispatch({
//             type: DELETE_EXPEDITION_SUCCESS,
//             payload: response.data,
//           });
//           navigate('/admin/expeditions');
//         } else {
//           dispatch({
//             type: DELETE_EXPEDITION_FAILURE,
//             payload: response.data,
//           });
//         }
//       })
//       .catch((error) => {
//         console.log(error.response.data.message, 'unable to delete package');
//         dispatch({
//           type: DELETE_EXPEDITION_FAILURE,
//           payload: error.response.data.message,
//         });
//       });
//   };
