import { CONTACT_SUCCESS, CONTACT_FAILURE } from '../actionTypes/contact';

const initialState = {
  contacts: [],
  singleContact: {},
  loading: false,
  error: null,
};

const contactReducer = (state = initialState, action) => {
  console.log(action, 'action');
  switch (action.type) {
    case CONTACT_SUCCESS:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        loading: false,
        error: null,
      };
    case CONTACT_FAILURE:
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
