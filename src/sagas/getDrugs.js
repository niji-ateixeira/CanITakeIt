import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import Api from '../services/api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* postAddDrug() {
  try {
    const query = `{
        onedrug(key: "1"){
          notice {
            name,
            dosage,
            denomination,
            qualitativeComposition,
            Shape,
            IndicationData,
            DosageData,
            ContraindicationData,
            MegData,
            InteractionData,
            PregnancyData,
            AdverseEffectData,
            OverdoseData,
            Pharmacodynamics,
            Pharmacokinetics,
          }
        }
      }`;
    const payload = yield call(Api, query);
    yield put({ type: 'ADD_DRUG_OK', payload });
  } catch (e) {
    yield put({ type: 'ADD_DRUG_KO' });
  }
}

export default function* addDrug() {
  yield takeEvery('ADD_DRUG', postAddDrug);
}
