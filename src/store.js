import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
  reducer,
  typeof window === 'object' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

// root reducer - takes an old state and return a new state
export default store;