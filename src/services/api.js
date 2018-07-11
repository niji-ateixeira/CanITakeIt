import { request } from 'graphql-request';

const api = query => request('https://www.api.canitakeit.fr', query).then(data => data);

export default api;
