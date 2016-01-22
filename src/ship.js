/* global Hull, $*/

import detectShip from './lib/detect-ship';

import cart from './shopify/cart';
import identity from './shopify/identity';
import track from './shopify/track';

export default function start(element, deployment, hull) {
  const data = window.HullShopify || {};

  cart(hull, data);
  track(hull, data);

  detectShip(hull, 'hull-login').then(function(present) {
    if (present) {
      identity(hull, data);
    }
  });
}

if (Hull) {
  Hull.onEmbed(start);
}
