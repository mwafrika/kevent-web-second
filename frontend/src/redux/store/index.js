import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from '../reducers/user';
import packageReducer from '../reducers/package';
import expeditionReducer from '../reducers/expedition';

const rootReducer = combineReducers({
  user: userReducer,
  packages: packageReducer,
  expeditions: expeditionReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
