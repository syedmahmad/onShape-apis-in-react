// Recuder specify how the application's state changes in response to actions sent to the store.
import * as duroActions from '../actions/duro';
import { handleActions }  from "redux-actions"

const initialState = {
  "assemblyDefinition": {},
  "duroLoading": false
};

function duroLoading(state, { payload })
{
    state.duroLoading = payload;
    return {...state}
}

function getDataSuccess(state, { payload })
{
    state.assemblyDefinition = payload.rootAssembly.instances;
    state.duroLoading = false;
    return {...state}
}

function getDataError(state, { payload })
{
    payload.duroLoading = false;
    return {...state, ...payload}
}

// This is similar like switch statement to handle actions and return new state
export default handleActions({
    [duroActions.getDataSuccess]: getDataSuccess,
    [duroActions.getDataError]: getDataError,
    [duroActions.duroLoading]: duroLoading
}, initialState);