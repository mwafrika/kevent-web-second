import {
  CREATE_EXPEDITION_SUCCESS,
  CREATE_EXPEDITION_FAILURE,
  GET_EXPEDITIONS_SUCCESS,
  GET_EXPEDITIONS_FAILURE,
  GET_EXPEDITION_SUCCESS,
  GET_EXPEDITION_FAILURE,
  UPDATE_EXPEDITION_SUCCESS,
  UPDATE_EXPEDITION_FAILURE,
  DELETE_EXPEDITION_SUCCESS,
  DELETE_EXPEDITION_FAILURE,
} from '../actionTypes/expeditions';
import * as ExpeditionApi from '../Api/expedition';
import { resolvePromise, rejectPromise } from '../../dashboard/helpers/promise';

export const createExpeditions = (expeditionData, clearForm) => (dispatch) => {
  ExpeditionApi.createExpedition(expeditionData)
    .then((response) => {
      if (response.status === 200) {
        console.log('See data created', response);
        dispatch({
          type: CREATE_EXPEDITION_SUCCESS,
          payload: response.data,
        });
        clearForm();
        resolvePromise(response, 'Expedition creer avec succes');
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to create package');
      dispatch({
        type: CREATE_EXPEDITION_FAILURE,
        payload: error.response.data.message,
      });
      rejectPromise(error, "Impossible de creer l'expedition");
    });
};

export const Expeditions = () => (dispatch) => {
  ExpeditionApi.getExpeditions()
    .then((response) => {
      if (response.status === 200) {
        console.log('See all the data', response);
        dispatch({
          type: GET_EXPEDITIONS_SUCCESS,
          payload: response.data,
        });
        resolvePromise(response, 'Expeditions recuperer avec succes');
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to get Expeditions');
      dispatch({
        type: GET_EXPEDITIONS_FAILURE,
        payload: error.response.data.message,
      });
      rejectPromise(error, 'Impossible de recuperer les expeditions');
    });
};

export const getSingle = (id) => (dispatch) => {
  ExpeditionApi.getExpedition(id)
    .then((response) => {
      if (response.status === 200) {
        console.log('See single package', response.data);
        dispatch({
          type: GET_EXPEDITION_SUCCESS,
          payload: response.data,
        });
        resolvePromise(response, 'Expedition recuperer avec succes');
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to get single package');
      dispatch({
        type: GET_EXPEDITION_FAILURE,
        payload: error.response.data.message,
      });
      rejectPromise(error, "Impossible de recuperer l'expedition");
    });
};

export const updateExpedition =
  (id, expeditionData, navigate) => (dispatch) => {
    ExpeditionApi.updateExpedition(id, expeditionData)
      .then((response) => {
        console.log('See update package action', response);
        if (response.status === 200) {
          dispatch({
            type: UPDATE_EXPEDITION_SUCCESS,
            payload: response.data,
          });
          navigate('/admin/expeditions');
          resolvePromise(response, 'Expedition modifier avec succes');
        }
      })
      .catch((error) => {
        console.log(error.response.data.message, 'unable to update package');
        dispatch({
          type: UPDATE_EXPEDITION_FAILURE,
          payload: error.response.data.message,
        });
        rejectPromise(error, "Impossible de modifier l'expedition");
      });
  };

export const deleteExpedition = (id, navigate) => (dispatch) => {
  ExpeditionApi.deleteExpedition(id)
    .then((response) => {
      console.log('See delete package action', response);
      if (response.status === 204) {
        dispatch({
          type: DELETE_EXPEDITION_SUCCESS,
          payload: response.data,
        });
        navigate('/admin/expeditions');
        resolvePromise(response, 'Expedition supprimer avec succes');
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to delete package');
      dispatch({
        type: DELETE_EXPEDITION_FAILURE,
        payload: error.response.data.message,
      });
      rejectPromise(error, "Impossible de supprimer l'expedition");
    });
};
