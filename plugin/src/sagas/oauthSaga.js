// It is just a middleware same like thunk to communicate outside world i-e APIs 
// Every Action comes first to redux-saga as it is running/ listening the these actions & connected to store with reducers...
// In order to run our Saga, we need to:

//   create a Saga middleware with a list of Sagas to run...
//   connect the Saga middleware to the Redux store ...

import { put, call, takeLatest, cps, all } from 'redux-saga/effects';
import { authTokenOnshapeService, authRefreshtokenOnshapeService } from '../services/authenticationService';
import {  checkTokenStatus } from '../helpers/serviceHelper';

import * as oauthActions from '../actions/oauth';

export function* oauthTokenSaga(data) {
  try {
    let state = yield checkTokenStatus();
    switch(state) {
       case 'notPresent':
          const response = yield cps(authTokenOnshapeService, data.payload);
          if (response.error) {
            yield put(oauthActions.onshapeTokenError(response));
          } else {
            yield put(oauthActions.onshapeTokenSuccess(response));  
          }
         return;
       case 'doRefresh':
         return yield call(oauthRefreshtokenSaga);
       case 'permit':
         return yield put(oauthActions.onshapeTokenSuccess());
       default:
         return yield put(oauthActions.onshapeTokenSuccess());
     }
  } catch(error) {
    // it instructs the middleware to dispatch an action to the Store
    yield console.log("ERROR!! in Access Token....");
  }
}

export function* oauthRefreshtokenSaga(contextSpecificSaga) {
  try {
    const response = yield cps(authRefreshtokenOnshapeService);
    if (response.error) {
      yield console.log("ERROR!! Refreshing token....");
    } else {
      if (contextSpecificSaga) {
        yield put({type: contextSpecificSaga.payload});    
      } else {
        yield put(oauthActions.onshapeTokenSuccess());
      }
      
    }
  } catch(error) {
    yield console.log("ERROR!! Refreshing token....");
  }
}

export default function* watchAuthProcess() {
  yield all([
      takeLatest(oauthActions.getOnshapeToken().type, oauthTokenSaga),
      takeLatest(oauthActions.getOnshapeRefreshToken().type, oauthRefreshtokenSaga)
      ]);
}