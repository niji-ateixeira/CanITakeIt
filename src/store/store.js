/*
  Fichier permettant la création du store

  Date de modification: 28/08/2017
*/

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import CoreReducer from './coreReducer';
import getDrugs from '../sagas/getDrugs';

const sagaMiddleware = createSagaMiddleware();
// Creation du store
const middlewares = [sagaMiddleware, logger];
const store = createStore(CoreReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(getDrugs);

export default store;
