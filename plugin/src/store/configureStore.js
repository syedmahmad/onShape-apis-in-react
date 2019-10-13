import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import authSaga from '../sagas/oauthSaga';
import documentSaga from '../sagas/documentSaga';
import assembliesSaga from '../sagas/assembliesSaga';
import duroSaga from '../sagas/duroSaga';

// import oauthSigninReducer from '../reducers/oauthSigninReducer';

const configureStore = () => {
	console.log("configure Store.................");
  // createSagaMiddleware is a factory function exported by the redux-saga library.
  const sagaMiddleware = createSagaMiddleware();

  // just connecting middleware to store using applyMiddleware.
  // after connection we can start our saga using run method.
  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
    authSaga: sagaMiddleware.run(authSaga),
    assebmlySage: sagaMiddleware.run(assembliesSaga),
    documentSaga: sagaMiddleware.run(documentSaga),
    duroSaga: sagaMiddleware.run(duroSaga)
  }
};

export default configureStore;
