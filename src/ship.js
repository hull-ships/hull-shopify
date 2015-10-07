import cart from './shopify/cart';
import identity from './shopify/identity';
/* global require, Hull, $*/

export default function start(element, deployment, hull) {
  identity(hull);
  cart(hull);
}

if (Hull) {
  Hull.onEmbed(start);
}
