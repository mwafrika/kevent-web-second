import {
  CREATE_PACKAGE_SUCCESS,
  CREATE_PACKAGE_FAILURE,
  GET_PACKAGES_SUCCESS,
  GET_PACKAGES_FAILURE,
  GET_PACKAGE_SUCCESS,
  GET_PACKAGE_FAILURE,
  UPDATE_PACKAGE_SUCCESS,
  UPDATE_PACKAGE_FAILURE,
  DELETE_PACKAGE_SUCCESS,
  DELETE_PACKAGE_FAILURE,
} from '../actionTypes/package';
import * as packageApi from '../Api/package';
import { resolvePromise, rejectPromise } from '../../dashboard/helpers/promise';

export const createPackages = (packageData, clearForm) => (dispatch) => {
  packageApi
    .createPackage(packageData)
    .then((response) => {
      if (response.status === 200) {
        console.log('See data created', response);
        dispatch({
          type: CREATE_PACKAGE_SUCCESS,
          payload: response.data,
        });
        console.log('See packages', response);
        resolvePromise(response, "Création de l'offre réussie");
        clearForm();
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to create package');
      dispatch({
        type: CREATE_PACKAGE_FAILURE,
        payload: error.response.data.message,
      });
      rejectPromise(error, "Erreur lors de la création de l'offre");
    });
};

export const packackages = () => (dispatch) => {
  packageApi
    .getPackages()
    .then((response) => {
      if (response.status === 200) {
        console.log('See all the data', response);
        dispatch({
          type: GET_PACKAGES_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to get packages');
      dispatch({
        type: GET_PACKAGES_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const getSingle = (id) => (dispatch) => {
  packageApi
    .getPackage(id)
    .then((response) => {
      if (response.status === 200) {
        console.log('See single package', response);
        dispatch({
          type: GET_PACKAGE_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to get single package');
      dispatch({
        type: GET_PACKAGE_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const updatePackage = (id, packageData, navigate) => (dispatch) => {
  packageApi
    .updatePackage(id, packageData)
    .then((response) => {
      console.log('See update package action', response);
      if (response.status === 200) {
        dispatch({
          type: UPDATE_PACKAGE_SUCCESS,
          payload: response.data,
        });
        navigate('/admin/packages');
        resolvePromise(response, 'Modification de packet réussie');
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to update package');
      dispatch({
        type: UPDATE_PACKAGE_FAILURE,
        payload: error.response.data.message,
      });
      rejectPromise(error, 'Erreur lors de la modification de packet');
    });
};

export const deletePackage = (id, navigate) => (dispatch) => {
  packageApi
    .deletePackage(id)
    .then((response) => {
      if (response.status === 204) {
        dispatch({
          type: DELETE_PACKAGE_SUCCESS,
          payload: response.data,
        });
        navigate('/admin/packages');
        resolvePromise(response, 'Suppression de packet réussie');
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to delete package');
      dispatch({
        type: DELETE_PACKAGE_FAILURE,
        payload: error.response.data.message,
      });
      rejectPromise(error, 'Erreur lors de la suppression de packet');
    });
};
