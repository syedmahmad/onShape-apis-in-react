// Recuder specify how the application's state changes in response to actions sent to the store.
import * as assemblyActions from '../actions/assemblies';
import { handleActions }  from "redux-actions"

const initialState = {
  "assemblies": [],
  "assemblyLoading": true
};

function documentAssembliesSuccess(state, { payload })
{
    state.assemblies = payload;
    state.assemblyLoading = false;
    return {...state}
}

function documentAssembliesError(state, { payload })
{
    payload.assemblyLoading = false;
    return {...state, ...payload}
}

// This is similar like switch statement to handle actions and return new state
export default handleActions({
    [assemblyActions.documentAssembliesSuccess]: documentAssembliesSuccess,
    [assemblyActions.documentAssembliesError]: documentAssembliesError
}, initialState);