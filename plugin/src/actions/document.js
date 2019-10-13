import { createAction } from 'redux-actions';


// Canvas ACTION CREATORS
export const documentLoading = createAction('DOCUMENT_LOADING');
export const getDocument = createAction('GET_DOCUMENT');
export const documentSuccess = createAction('DOCUMENT_SUCCESS');
export const documentError = createAction('DOCUMENT_ERROR');