import _ from 'lodash';

export default function cleanup(obj = {}) {
  return _.omit(obj, 'token');
}
