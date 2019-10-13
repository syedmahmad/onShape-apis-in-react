// Recuder specify how the application's state changes in response to actions sent to the store.
import * as oauthActions from '../actions/oauth';
import { handleActions }  from "redux-actions"

const initialState = {
  access_token: "",
  refresh_token: "",
  "error": "",
  "mainLoading": true
};

function onshapetokenSuccess(state, { payload })
{
    payload = payload || state;
    payload.mainLoading = false;
    return {...state, ...payload}
}

function onshapetokenError(state, { payload })
{
    payload.mainLoading = true;
    return {...state, ...payload}
}

// This is similar like switch statement to handle actions and return new state
export default handleActions({
    [oauthActions.onshapeTokenSuccess]: onshapetokenSuccess,
    [oauthActions.onshapeTokenError]: onshapetokenError
}, initialState);