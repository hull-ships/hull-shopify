import cart from './shopify/cart';
import identity from './shopify/identity';
/* global require, Hull, $*/

export default function start(element, deployment, hull) {
  identity(hull);
  cart(hull);
  // trackForm = formTrack(hull);
  // const form = document.getElementById('add-to-cart');
  // trackForm(form, 'Added Product', {
}

if (Hull) {
  Hull.onEmbed(start);
}
