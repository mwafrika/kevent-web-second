import {
  CONTACT_EXPEDITION_SUCCESS,
  CONTACT_EXPEDITION_FAILURE,
  CONTACT_SUCCESS_PACKAGE,
  CONTACT_FAILURE_PACKAGE,
} from '../actionTypes/contact';
import * as contactApi from '../Api/contact';
import { resolvePromise, rejectPromise } from '../../dashboard/helpers/promise';

export const Contacts = (contactData, id, clearForm) => (dispatch) => {
  contactApi
    .CreateMessage(contactData, id)
    .then((response) => {
      if (response.status === 200) {
        console.log('contact us', response);
        dispatch({
          type: CONTACT_EXPEDITION_SUCCESS,
          payload: response.data,
        });
        clearForm();
        resolvePromise(response, 'Place creer avec succes');
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to create place');
      dispatch({
        type: CONTACT_EXPEDITION_FAILURE,
        payload: error.response.data.message,
      });
      rejectPromise(error, 'Erreur lors de la creation du place');
    });
};

export const ContactPackage = (contactData, id, clearForm) => (dispatch) => {
  contactApi
    .CreateMessagePackage(contactData, id)
    .then((response) => {
      if (response.status === 200) {
        console.log('contact us', response);
        dispatch({
          type: CONTACT_SUCCESS_PACKAGE,
          payload: response.data,
        });
        clearForm();
        resolvePromise(response, 'Requete creer avec succes');
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to create place');
      dispatch({
        type: CONTACT_FAILURE_PACKAGE,
        payload: error.response.data.message,
      });
      rejectPromise(error, 'Erreur lors de la creation du place');
    });
};
