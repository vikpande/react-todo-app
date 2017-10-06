import { createStore, compose } from 'redux';
import { combineReducers } from 'redux';

import todos from './reducers/todos';

const reducer = combineReducers({ todos })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
  composeEnhancers()
)

export default store;