import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const enhancedCompose = process.env.NODE_ENV === 'production'
  ? compose
  : composeWithDevTools;

export default (initialState = {}) => createStore(
  rootReducer,
  initialState,
  enhancedCompose(applyMiddleware(thunk)),
);
