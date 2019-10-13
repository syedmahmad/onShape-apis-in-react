import { createAction } from 'redux-actions';


// Duro ACTION CREATORS
export const duroLoading = createAction('DURO_LOADING');
export const getData = createAction('GET_DATA');
export const getDataSuccess = createAction('GET_DATA_SUCCESS');
export const getDataError = createAction('GET_DATA_ERROR');