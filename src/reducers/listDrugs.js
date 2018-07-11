/* eslint-disable */
import {
  ADD_DRUG,
  ADD_DRUG_OK,
  ADD_DRUG_KO
} from '../actions/listDrugs'
/* eslint-enable */

const initialState = { listDrugs: { payload: [] } };

const parse = (data) => {
  const lol = Object.entries(data);
  return lol.map(value => ({
    title: value[0],
    content: value[1],
  }));
};

export default function ListDrugs(state = initialState, action) {
  switch (action.type) {
    case ADD_DRUG:
      return {
        ...state,
        ok: 'trust',
      };
    case ADD_DRUG_OK:
      return {
        ...state,
        ok: true,
        payload: parse(action.payload.onedrug.notice),
      };
    case ADD_DRUG_KO:
      return {
        ...state,
        ok: false,
      };
    default:
      return state;
  }
}
