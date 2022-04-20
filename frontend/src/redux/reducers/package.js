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

const initialState = {
  packages: [],
  singlePackage: {},
  loading: false,
  error: null,
};

const packageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PACKAGE_SUCCESS:
      return {
        ...state,
        packages: [...state.packages, action.payload],
        loading: false,
        error: null,
      };
    case CREATE_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_PACKAGES_SUCCESS:
      return {
        ...state,
        packages: action.payload,
        loading: false,
        error: null,
      };
    case GET_PACKAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_PACKAGE_SUCCESS:
      return {
        ...state,
        singlePackage: action.payload,
        loading: false,
        error: null,
      };
    case GET_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_PACKAGE_SUCCESS:
      console.log('See data updated reducer', action.payload);
      return {
        ...state,
        packages: state.packages.map((pack) => pack.id === action.payload.id ? action.payload : pack),
        loading: false,
        error: null,
      };
    case UPDATE_PACKAGE_FAILURE:
      console.log('See data updated reducer failure', action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PACKAGE_SUCCESS:
      return {
        ...state,
        packages: state.packages.filter(
          (pack) => pack.id !== action.payload.id
        ),
        loading: false,
        error: null,
      };
    case DELETE_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default packageReducer;
