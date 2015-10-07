import _ from 'lodash';

export default function(hull) {
  return function(form, event, properties) {
    if (!form) { return this; }
    if (_.isElement(form)) form = [form];

    _.each(form, (el) => {
      if (!_.isElement(el)) {
        throw new TypeError('Must pass HTMLElement to trackForm.');
      }
      const handler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        hull.track(event, properties);

        self._callback(function() {
          el.submit();
        });
      };

      const $ = window.jQuery || window.Zepto;
      if ($) {
        $(el).submit(handler);
      } else {
        el.addEventListener('submit', handler);
      }
    });

    return this;
  };

}
