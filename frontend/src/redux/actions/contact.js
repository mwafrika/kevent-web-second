import { CONTACT_SUCCESS, CONTACT_FAILURE } from '../actionTypes/contact';
import * as contactApi from '../Api/contact';
import { resolvePromise, rejectPromise } from '../../dashboard/helpers/promise';

export const Contacts = (contactData,id, clearForm) => (dispatch) => {
  contactApi
    .CreateMessage(contactData, id)
    .then((response) => {
      if (response.status === 200) {
        console.log('contact us', response);
        dispatch({
          type: CONTACT_SUCCESS,
          payload: response.data,
        });
        clearForm();
        resolvePromise(response, 'Place creer avec succes');
      }
    })
    .catch((error) => {
      console.log(error.response.data.message, 'unable to create place');
      dispatch({
        type: CONTACT_FAILURE,
        payload: error.response.data.message,
      });
      rejectPromise(error, 'Erreur lors de la creation du place');
    });
};
