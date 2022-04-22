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

const initialState = {
  expeditions: [],
  singleExpedition: {},
  loading: false,
  error: null,
};

const expeditionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EXPEDITION_SUCCESS:
      return {
        ...state,
        expeditions: [...state.expeditions, action.payload],
        loading: false,
        error: null,
      };
    case CREATE_EXPEDITION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_EXPEDITIONS_SUCCESS:
      return {
        ...state,
        expeditions: action.payload,
        loading: false,
        error: null,
      };
    case GET_EXPEDITIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_EXPEDITION_SUCCESS:
      return {
        ...state,
        singleExpedition: action.payload,
        loading: false,
        error: null,
      };
    case GET_EXPEDITION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_EXPEDITION_SUCCESS:
      console.log('See data updated reducer', action.payload);
      return {
        ...state,
        expeditions: state.expeditions.map((pack) =>
          pack.id === action.payload.id ? action.payload : pack
        ),
        loading: false,
        error: null,
      };
    case UPDATE_EXPEDITION_FAILURE:
      console.log('See data updated reducer failure', action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_EXPEDITION_SUCCESS:
      return {
        ...state,
        expeditions: state.expeditions.filter(
          (pack) => pack.id !== action.payload.id
        ),
        loading: false,
        error: null,
      };
    case DELETE_EXPEDITION_FAILURE:
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
