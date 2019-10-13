// Recuder specify how the application's state changes in response to actions sent to the store.
import * as types from '../actions/document';
import { handleActions }  from "redux-actions"

const initialState = {
  "document": {},
  "documentLoading": true
};

function documentSuccess(state, { payload })
{
    state.document = payload;
    state.documentLoading = false;
    return {...state}
}

function documentError(state, { payload })
{
    payload.documentLoading = false;
    return {...state, ...payload}
}

// This is similar like switch statement to handle actions and return new state
export default handleActions({
    [types.documentSuccess]: documentSuccess,
    [types.documentError]: documentError
}, initialState);