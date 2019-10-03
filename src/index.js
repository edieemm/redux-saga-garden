import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';

import App from './App';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield takeEvery('GET_PLANT', getPlant)
}

function* getPlant() {
  try {
    const response = yield axios.get('/api/plant');
    console.log(response.data);
    yield put({ type: 'SET_PLANT', payload: response.data });
  } catch (error) {
    console.log('error in GET', error);
  }
}

const plantList = (state = [], action) => {
  console.log(action);
  
  switch (action.type) {
    case 'SET_PLANT':
      state = action.payload;
      return state
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ plantList }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
// registerServiceWorker();
