import {
  CONTACT_EXPEDITION_SUCCESS,
  CONTACT_EXPEDITION_FAILURE,
} from '../actionTypes/contact';

const initialState = {
  ContactExpeditions: [],
  ContactExpedition: {},
  loading: false,
  error: null,
};

const contactReducer = (state = initialState, action) => {
  console.log(action, 'action');
  switch (action.type) {
    case CONTACT_EXPEDITION_SUCCESS:
      return {
        ...state,
        ContactExpeditions: [...state.ContactExpeditions, action.payload],
        loading: false,
        error: null,
      };
    case CONTACT_EXPEDITION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default contactReducer;
