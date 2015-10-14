/* global Hull, $*/

import cart from './shopify/cart';
import identity from './shopify/identity';
import track from './shopify/track';

export default function start(element, deployment, hull) {
  const data = window.HullShopify || {};
  identity(hull, data);
  cart(hull, data);
  track(hull, data);
}

if (Hull) {
  Hull.onEmbed(start);
}
