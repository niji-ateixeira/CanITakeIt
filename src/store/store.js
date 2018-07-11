/*
  Fichier permettant la création du store

  Date de modification: 28/08/2017
*/

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import CoreReducer from './coreReducer';
import getDrugs from '../sagas/getDrugs';

const sagaMiddleware = createSagaMiddleware();
// Creation du store
const store = createStore(CoreReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(getDrugs);

export default store;
