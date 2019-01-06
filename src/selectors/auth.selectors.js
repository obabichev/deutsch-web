import _ from 'lodash';

export const userSelector = (state) => _.get(state, 'auth.user', null);
