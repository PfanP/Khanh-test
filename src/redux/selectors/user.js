import _ from 'lodash';
export const getUser = (state, userId) =>
  _.get(state, ['Users', 'data', userId]);
