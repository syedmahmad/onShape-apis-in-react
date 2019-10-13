// It is just a middleware same like thunk to communicate outside world i-e APIs 
// Every Action comes first to redux-saga as it is running/ listening the these actions & connected to store with reducers...
// In order to run our Saga, we need to:

//   create a Saga middleware with a list of Sagas to run...
//   connect the Saga middleware to the Redux store ...

import { put, call, takeLatest, cps, all, cancelled } from 'redux-saga/effects';
import { getDocumentAssemblies } from '../services/assembliesService';
import { authRefreshtokenOnshapeService } from '../services/authenticationService';

import * as assemblyActions from '../actions/assemblies'
import * as oauthActions from '../actions/oauth'

export function* documentAssembliesSaga() {
  try {
    const response = yield cps(getDocumentAssemblies);
    if (response.error === "invalid_token" && response.error_description.indexOf("Invalid access token") !== -1 ) {
      // Need to refresh token here and call this saga again....
      // To Execute this saga again, I am passing context as payload in refresh token
      // After refresh, it will dispatch this saga again....
      yield call(refreshTokenSaga);
    } else {
      if (response.error && response.error !== "invalid_token") 
      {
        yield put(assemblyActions.documentAssembliesError(response))
      } 
      else 
      {
        yield put(assemblyActions.documentAssembliesSuccess(response))  
      }
    }
    
  } catch(error) {
    // it instructs the middleware to dispatch an action to the Store
    yield put(assemblyActions.documentAssembliesError(error))
  }
}

export function* refreshTokenSaga() { 
  yield put(oauthActions.getOnshapeRefreshToken(assemblyActions.getDocumentAssemblies().type));
}

export default function* watchAuthProcess() {
  yield takeLatest(assemblyActions.getDocumentAssemblies().type, documentAssembliesSaga);
}