import {
  CREATE_PLACE_SUCCESS,
  CREATE_PLACE_FAILURE,
  GET_PLACES_SUCCESS,
  GET_PLACES_FAILURE,
  GET_PLACE_SUCCESS,
  GET_PLACE_FAILURE,
  UPDATE_PLACE_SUCCESS,
  UPDATE_PLACE_FAILURE,
  DELETE_PLACE_SUCCESS,
  DELETE_PLACE_FAILURE,
} from '../actionTypes/place';

const initialState = {
  places: [],
  singlePlace: {},
  loading: false,
  error: null,
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLACE_SUCCESS:
      return {
        ...state,
        places: [...state.places, action.payload],
        loading: false,
        error: null,
      };
    case CREATE_PLACE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_PLACES_SUCCESS:
      return {
        ...state,
        places: action.payload,
        loading: false,
        error: null,
      };
    case GET_PLACES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_PLACE_SUCCESS:
      return {
        ...state,
        singlePlace: action.payload,
        loading: false,
        error: null,
      };
    case GET_PLACE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_PLACE_SUCCESS:
      console.log('See data updated reducer', action.payload);
      return {
        ...state,
        places: state.places.map((pack) =>
          pack.id === action.payload.id ? action.payload : pack
        ),
        loading: false,
        error: null,
      };
    case UPDATE_PLACE_FAILURE:
      console.log('See data updated reducer failure', action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PLACE_SUCCESS:
      return {
        ...state,
        places: state.places.filter((pack) => pack.id !== action.payload.id),
        loading: false,
        error: null,
      };
    case DELETE_PLACE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default placeReducer;
