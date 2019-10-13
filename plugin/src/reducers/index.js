import { combineReducers } from 'redux';
import oauthReducer from './oauthReducer';
import documentReducer from './documentReducer';
import assemblyReducer from './assembliesReducer';
import duroReducer from './duroReducer';

const rootReducer = combineReducers({
  oauthReducer    : oauthReducer,
  documentReducer : documentReducer,
  assemblyReducer   : assemblyReducer,
  duroReducer   : duroReducer
});

export default rootReducer;