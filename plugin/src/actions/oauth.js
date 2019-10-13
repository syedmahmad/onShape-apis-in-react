import { createAction } from 'redux-actions';


// AUTH ACTION CREATORS
export const getOnshapeToken = createAction('GET_ONSHAPE_TOKEN');
export const onshapeTokenSuccess = createAction('ONSHAPE_TOKEN_SUCCESS');
export const onshapeTokenError = createAction('ONSHAPE_TOKEN_ERROR');
export const getOnshapeRefreshToken = createAction('GET_ONSHAPE_REFRESH_TOKEN');