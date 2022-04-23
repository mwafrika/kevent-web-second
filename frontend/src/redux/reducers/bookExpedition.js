import {
  CREATE_BOOK_EXPEDITION_SUCCESS,
  CREATE_BOOK_EXPEDITION_FAILURE,
  GET_BOOK_EXPEDITIONS_SUCCESS,
  GET_BOOK_EXPEDITIONS_FAILURE,
  GET_BOOK_EXPEDITION_SUCCESS,
  GET_BOOK_EXPEDITION_FAILURE,
  UPDATE_BOOK_EXPEDITION_SUCCESS,
  UPDATE_BOOK_EXPEDITION_FAILURE,
  DELETE_BOOK_EXPEDITION_SUCCESS,
  DELETE_BOOK_EXPEDITION_FAILURE,
} from '../actionTypes/booking';

const initialState = {
  bookExpeditions: [],
  bookSingleExpedition: {},
  loading: false,
  error: null,
};

const expeditionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK_EXPEDITION_SUCCESS:
      return {
        ...state,
        bookExpeditions: [...state.bookExpeditions, action.payload],
        loading: false,
        error: null,
      };
    case CREATE_BOOK_EXPEDITION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_BOOK_EXPEDITIONS_SUCCESS:
      return {
        ...state,
        bookExpeditions: action.payload,
        loading: false,
        error: null,
      };
    case GET_BOOK_EXPEDITIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_BOOK_EXPEDITION_SUCCESS:
      return {
        ...state,
        bookSingleExpedition: action.payload,
        loading: false,
        error: null,
      };
    case GET_BOOK_EXPEDITION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_BOOK_EXPEDITION_SUCCESS:
      console.log('See data updated reducer', action.payload);
      return {
        ...state,
        bookExpeditions: state.bookExpeditions.map((pack) =>
          pack.id === action.payload.id ? action.payload : pack
        ),
        loading: false,
        error: null,
      };
    case UPDATE_BOOK_EXPEDITION_FAILURE:
      console.log('See data updated reducer failure', action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_BOOK_EXPEDITION_SUCCESS:
      return {
        ...state,
        bookExpeditions: state.bookExpeditions.filter(
          (pack) => pack.id !== action.payload.id
        ),
        loading: false,
        error: null,
      };
    case DELETE_BOOK_EXPEDITION_FAILURE:
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
