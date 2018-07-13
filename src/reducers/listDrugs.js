import _ from 'lodash';
import {
  ADD_DRUG,
  ADD_DRUG_OK,
  ADD_DRUG_KO,
} from '../actions/listDrugs';

const initialState = {
  listDrugs: [],
  ok: null,
  fetched: false,
};

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
        ok: false,
        fetched: true,
      };
    case ADD_DRUG_OK:

      const infos = parse(action.payload.onedrug.notice);
      const name = _.filter(infos, object => object.title === 'name');
      const infosFinal = _.filter(infos, object => object.title !== 'name');
      return {
        ...state,
        ok: true,
        name: name[0].content,
        listDrugs: infosFinal,
        fetched: false,
      };
    case ADD_DRUG_KO:
      return {
        ...state,
        ok: false,
        fetched: false,
      };
    default:
      return state;
  }
}
