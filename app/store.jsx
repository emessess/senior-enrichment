import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

//temp single reducer
import studentReducer from './reducers';

//previously
// export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))

export default createStore(studentReducer, applyMiddleware(thunkMiddleware, createLogger()));
