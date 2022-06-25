import {
  CONTACT_SUCCESS_PACKAGE,
  CONTACT_FAILURE_PACKAGE,
} from '../actionTypes/contact';

const initialState = {
  contactPackages: [],
  contactPackage: {},
  loading: false,
  error: null,
};

const contactPackageReducer = (state = initialState, action) => {
  console.log(action, 'action');
  switch (action.type) {
    case CONTACT_SUCCESS_PACKAGE:
      return {
        ...state,
        contactPackages: [...state.contactPackages, action.payload],
        loading: false,
        error: null,
      };
    case CONTACT_FAILURE_PACKAGE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default contactPackageReducer;
