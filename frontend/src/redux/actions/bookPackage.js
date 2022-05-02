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
import { resolvePromise, rejectPromise } from '../../dashboard/helpers/promise';

export const createBookPackage =
  (bookPackageData, packageId, clearForm) => (dispatch) => {
    BookPackageAPI.bookPackages(bookPackageData, packageId)
      .then((response) => {
        console.log('See data created', response.status);
        if (response.status === 200) {
          console.log('See data created', response);
          dispatch({
            type: CREATE_BOOK_PACKAGE_SUCCESS,
            payload: response.data,
          });
          resolvePromise(response, "Création de l'offre réussie");
          clearForm();
        }
      })
      .catch((error) => {
        console.log(error, 'unable to create package');
        dispatch({
          type: CREATE_BOOK_PACKAGE_FAILURE,
          payload: error?.response?.data?.message,
        });
        rejectPromise(error, "Erreur lors de la création de l'offre");
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
      if (response.status === 200) {
        dispatch({
          type: UPDATE_BOOK_PACKAGE_SUCCESS,
          payload: response.data,
        });
        navigate('/admin/book/packages');
        resolvePromise(response, 'Modification de packet réussie');
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to update package');
      dispatch({
        type: UPDATE_BOOK_PACKAGE_FAILURE,
        payload: error.response.data.message,
      });
      rejectPromise(error, 'Erreur lors de la modification de packet');
    });
};

export const deleteBookingPackage = (id, navigate) => (dispatch) => {
  BookPackageAPI.deleteBooking(id)
    .then((response) => {
      console.log('See delete package action', response);
      if (response.status === 204) {
        dispatch({
          type: DELETE_BOOK_PACKAGE_SUCCESS,
          payload: response.data,
        });
        navigate('/admin/book/packages');
        resolvePromise(response, 'Suppression de packet réussie');
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to delete package');
      dispatch({
        type: DELETE_BOOK_PACKAGE_FAILURE,
        payload: error.response.data.message,
      });
      rejectPromise(error, 'Erreur lors de la suppression de packet');
    });
};
