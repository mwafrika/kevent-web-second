import {
  CREATE_PLACE_SUCCESS,
  CREATE_PLACE_FAILURE,
  GET_PLACES_SUCCESS,
  GET_PLACES_FAILURE,
  GET_PLACE_SUCCESS,
  GET_PLACE_FAILURE,
  UPDATE_PLACE_SUCCESS,
  UPDATE_PLACE_FAILURE,
  DELETE_PLACE_SUCCESS,
  DELETE_PLACE_FAILURE,
} from '../actionTypes/place';
import * as packageApi from '../Api/place';

export const createPlaces = (packageData, clearForm) => (dispatch) => {
  packageApi
    .createPlace(packageData)
    .then((response) => {
      if (response.status === 200) {
        console.log('See data created', response);
        dispatch({
          type: CREATE_PLACE_SUCCESS,
          payload: response.data,
        });
        clearForm();
      } else {
        dispatch({
          type: CREATE_PLACE_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to create package');
      dispatch({
        type: CREATE_PLACE_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const Places = () => (dispatch) => {
  packageApi
    .getPlaces()
    .then((response) => {
      if (response.status === 200) {
        console.log('See all the data', response);
        dispatch({
          type: GET_PLACES_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: GET_PLACES_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to get places');
      dispatch({
        type: GET_PLACES_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const getSingle = (id) => (dispatch) => {
  packageApi
    .getPlace(id)
    .then((response) => {
      console.log('See single places', response);
      if (response.status === 200) {
        dispatch({
          type: GET_PLACE_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: GET_PLACE_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to get single package');
      dispatch({
        type: GET_PLACE_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const updatePlaces = (id, packageData, navigate) => (dispatch) => {
  packageApi
    .updatePlace(id, packageData)
    .then((response) => {
      console.log('See update places action', response);
      if (response.status === 200) {
        dispatch({
          type: UPDATE_PLACE_SUCCESS,
          payload: response.data,
        });
        navigate('/admin/places');
      } else {
        dispatch({
          type: UPDATE_PLACE_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to update package');
      dispatch({
        type: UPDATE_PLACE_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const deletePlaces = (id, navigate) => (dispatch) => {
  packageApi
    .deletePlace(id)
    .then((response) => {
      console.log('See delete place action', response);
      if (response.status === 204) {
        dispatch({
          type: DELETE_PLACE_SUCCESS,
          payload: response.data,
        });
        navigate('/admin/places');
      } else {
        dispatch({
          type: DELETE_PLACE_FAILURE,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to delete place');
      dispatch({
        type: DELETE_PLACE_FAILURE,
        payload: error.response.data.message,
      });
    });
};
