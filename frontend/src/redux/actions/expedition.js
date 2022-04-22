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
import * as packageApi from '../Api/user';

export const createExpeditions = (expeditionData, clearForm) => (dispatch) => {
  packageApi
    .createExpedition(expeditionData)
    .then((response) => {
      if (response.status === 200) {
        console.log('See data created', response);
        dispatch({
          type: CREATE_EXPEDITION_SUCCESS,
          payload: response.data,
        });
        clearForm();
      } else {
        dispatch({
          type: CREATE_EXPEDITION_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to create package');
      dispatch({
        type: CREATE_EXPEDITION_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const Expeditions = () => (dispatch) => {
  packageApi
    .getExpeditions()
    .then((response) => {
      if (response.status === 200) {
        console.log('See all the data', response);
        dispatch({
          type: GET_EXPEDITIONS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: GET_EXPEDITIONS_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to get Expeditions');
      dispatch({
        type: GET_EXPEDITIONS_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const getSingle = (id) => (dispatch) => {
  packageApi
    .getPackage(id)
    .then((response) => {
      if (response.status === 200) {
        console.log('See single package', response.data);
        dispatch({
          type: GET_EXPEDITION_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: GET_EXPEDITION_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to get single package');
      dispatch({
        type: GET_EXPEDITION_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const updateExpedition = (id, packageData, navigate) => (dispatch) => {
  packageApi
    .updatePackage(id, packageData)
    .then((response) => {
      console.log('See update package action', response);
      if (response.status === 200) {
        dispatch({
          type: UPDATE_EXPEDITION_SUCCESS,
          payload: response.data,
        });
        navigate('/admin/expeditions');
      } else {
        dispatch({
          type: UPDATE_EXPEDITION_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to update package');
      dispatch({
        type: UPDATE_EXPEDITION_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const deleteExpedition = (id, navigate) => (dispatch) => {
  packageApi
    .deletePackage(id)
    .then((response) => {
      console.log('See delete package action', response);
      if (response.status === 200) {
        dispatch({
          type: DELETE_EXPEDITION_SUCCESS,
          payload: response.data,
        });
        navigate('/admin/expeditions');
      } else {
        dispatch({
          type: DELETE_EXPEDITION_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to delete package');
      dispatch({
        type: DELETE_EXPEDITION_FAILURE,
        payload: error.response.data.message,
      });
    });
};
