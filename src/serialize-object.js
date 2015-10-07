import _ from 'lodash';
/* global $ */

export default function(form) {
  const fields = $(form).serializeArray();
  return _.reduce(fields, function(res, element) {
    const node = res[element.name];
    // If node with same name exists already, need to convert it to an array as it
    // is a multi-value field (i.e., checkboxes)
    if (typeof node !== 'undefined' && node !== null) {
      if (_.isArray(node)) {
        node.push(element.value);
      } else {
        res[element.name] = [node, element.value];
      }
    } else {
      res[element.name] = element.value;
    }
    return res;
  }, {});
}
