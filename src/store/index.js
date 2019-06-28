import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

let store = null;

const enhancedCompose = process.env.NODE_ENV === 'production'
  ? compose
  : composeWithDevTools;

export default (initialState = {}) => {
  store = createStore(
    rootReducer,
    initialState,
    enhancedCompose(applyMiddleware(thunk)),
  );

  return store;
};

export const dispatch = (...args) => store.dispatch(...args);
