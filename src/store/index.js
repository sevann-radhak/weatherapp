// Redux
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

// Reducers
import reducers from './../reducers';

// Initial state
const initialState = {
  city: 'Bucaramanga'
};

// Middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

// Store (redux)
export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));
// export const store = createStore(reducers, initialState, 
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());