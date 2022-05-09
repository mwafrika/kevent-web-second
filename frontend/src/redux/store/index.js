import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from '../reducers/user';
import packageReducer from '../reducers/package';
import expeditionReducer from '../reducers/expedition';
import bookPackageReducer from '../reducers/bookPackage';
import bookExpeditionReducer from '../reducers/bookExpedition';
import placeReducer from '../reducers/place';
import usersReducer from '../reducers/users';
import contactReducer from '../reducers/contact';

const rootReducer = combineReducers({
  user: userReducer,
  packages: packageReducer,
  expeditions: expeditionReducer,
  bookPackages: bookPackageReducer,
  bookExpeditions: bookExpeditionReducer,
  places: placeReducer,
  users: usersReducer,
  contacts: contactReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
