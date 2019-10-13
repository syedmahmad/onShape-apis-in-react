import { createAction } from 'redux-actions';


// Assemblies ACTION CREATORS
export const assemblyLoading = createAction('ASSEMBLIES_LOADING');
export const getDocumentAssemblies = createAction('GET_DOCUMENT_ASSEMBLIES');
export const documentAssembliesSuccess = createAction('DOCUMENT_ASSEMBLIES_SUCCESS');
export const documentAssembliesError = createAction('DOCUMENT_ASSEMBLIES_ERROR');