import {
  CREATE_BOOK_EXPEDITION_SUCCESS,
  CREATE_BOOK_EXPEDITION_FAILURE,
  GET_BOOK_EXPEDITIONS_SUCCESS,
  GET_BOOK_EXPEDITIONS_FAILURE,
  GET_BOOK_EXPEDITION_SUCCESS,
  GET_BOOK_EXPEDITION_FAILURE,
  UPDATE_BOOK_EXPEDITION_SUCCESS,
  UPDATE_BOOK_EXPEDITION_FAILURE,
  DELETE_BOOK_EXPEDITION_SUCCESS,
  DELETE_BOOK_EXPEDITION_FAILURE,
} from '../actionTypes/booking';

import * as BookPackageAPI from '../Api/booking';
import { resolvePromise, rejectPromise } from '../../dashboard/helpers/promise';

export const createBookExpedition =
  (bookPackageData, expeditionId, clearForm) => (dispatch) => {
    BookPackageAPI.bookExpeditions(bookPackageData, expeditionId)
      .then((response) => {
        console.log('See data created', response.status);
        if (response.status === 200) {
          console.log('See data created', response);
          dispatch({
            type: CREATE_BOOK_EXPEDITION_SUCCESS,
            payload: response.data,
          });
          resolvePromise(response, 'Création de donnees réussie');
          clearForm();
        }
      })
      .catch((error) => {
        console.log(error, 'unable to create package');
        dispatch({
          type: CREATE_BOOK_EXPEDITION_FAILURE,
          payload: error.response.data.message,
        });
        rejectPromise(error, 'Erreur lors de la creation de donnees');
      });
  };

export const getExpeditionBookings = () => (dispatch) => {
  BookPackageAPI.getAllExpeditions()
    .then((response) => {
      console.log('See all the booking expeditions', response);
      if (response.status === 200) {
        dispatch({
          type: GET_BOOK_EXPEDITIONS_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to get Expeditions');
      dispatch({
        type: GET_BOOK_EXPEDITIONS_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const getSingle = (id) => (dispatch) => {
  BookPackageAPI.getOneExpedition(id)
    .then((response) => {
      if (response.status === 200) {
        console.log('See single expedition try', response.data);
        dispatch({
          type: GET_BOOK_EXPEDITION_SUCCESS,
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
        type: GET_BOOK_EXPEDITION_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const updateBookExpedition = (dataBook, id, navigate) => (dispatch) => {
  BookPackageAPI.updateExpedition(dataBook, id)
    .then((response) => {
      console.log('See update package action', response);
      if (response.status === 200) {
        dispatch({
          type: UPDATE_BOOK_EXPEDITION_SUCCESS,
          payload: response.data,
        });
        resolvePromise(response, 'Modification effectuee avec succes');
        navigate('/admin/book/packages');
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to update package');
      dispatch({
        type: UPDATE_BOOK_EXPEDITION_FAILURE,
        payload: error.response.data.message,
      });
      rejectPromise(error, 'Erreur lors de la mise a jour de donnees');
    });
};

export const deleteBookinExpedition = (id, navigate) => (dispatch) => {
  BookPackageAPI.deleteExpedition(id)
    .then((response) => {
      console.log('See delete package action', response);
      if (response.status === 204) {
        dispatch({
          type: DELETE_BOOK_EXPEDITION_SUCCESS,
          payload: response.data,
        });
        resolvePromise(response, 'Suppression effectuee avec succes');
        navigate('/admin/book/packages');
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to delete package');
      dispatch({
        type: DELETE_BOOK_EXPEDITION_FAILURE,
        payload: error.response.data.message,
      });
      rejectPromise(error, 'Erreur lors de la suppression de donnees');
    });
};
