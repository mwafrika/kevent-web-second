import {
  CREATE_BOOK_PACKAGE_SUCCESS,
  CREATE_BOOK_PACKAGE_FAILURE,
  GET_BOOK_PACKAGES_SUCCESS,
  GET_BOOK_PACKAGES_FAILURE,
  GET_BOOK_PACKAGE_SUCCESS,
  GET_BOOK_PACKAGE_FAILURE,
  UPDATE_BOOK_PACKAGE_SUCCESS,
  UPDATE_BOOK_PACKAGE_FAILURE,
  DELETE_BOOK_PACKAGE_SUCCESS,
  DELETE_BOOK_PACKAGE_FAILURE,
} from '../actionTypes/booking';

const initialState = {
  bookPackages: [],
  bookSinglePackage: {},
  loading: false,
  error: null,
};

const expeditionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK_PACKAGE_SUCCESS:
      return {
        ...state,
        bookPackages: [...state.bookPackages, action.payload],
        loading: false,
        error: null,
      };
    case CREATE_BOOK_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_BOOK_PACKAGES_SUCCESS:
      return {
        ...state,
        bookPackages: action.payload,
        loading: false,
        error: null,
      };
    case GET_BOOK_PACKAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_BOOK_PACKAGE_SUCCESS:
      return {
        ...state,
        bookSinglePackage: action.payload,
        loading: false,
        error: null,
      };
    case GET_BOOK_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_BOOK_PACKAGE_SUCCESS:
      console.log('See data updated reducer', action.payload);
      return {
        ...state,
        bookPackages: state.bookPackages.map((pack) =>
          pack.id === action.payload.id ? action.payload : pack
        ),
        loading: false,
        error: null,
      };
    case UPDATE_BOOK_PACKAGE_FAILURE:
      console.log('See data updated reducer failure', action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_BOOK_PACKAGE_SUCCESS:
      return {
        ...state,
        bookPackages: state.bookPackages.filter(
          (pack) => pack.id !== action.payload.id
        ),
        loading: false,
        error: null,
      };
    case DELETE_BOOK_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default expeditionReducer;
