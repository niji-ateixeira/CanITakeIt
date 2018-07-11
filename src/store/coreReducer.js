// Ce fichier sert a regrouper les differant reducer a combiné
// pour les ajouter dans le store par la suite
import { combineReducers } from 'redux';

import listDrugs from '../reducers/listDrugs';
// Liste des reducer a combiner pour les ajouter au store

// Combinaison des different store
export default combineReducers({ listDrugs });
