/* global Hull, $*/

import detectShip from './lib/detect-ship';

// import cart from './shopify/cart';
import identity from './shopify/identity';
import track from './shopify/track';

export default function start(element, deployment, hull) {
  const data = window.HullShopify || {};
  const settings = deployment.ship.settings || {};

  // cart(hull, data);
  track(hull, data);

  const detectLoginShip = settings.detect_login_ship || 'hull-login';

  detectShip(hull, detectLoginShip).then(function(present) {
    if (present) {
      identity(hull, data, settings);
    }
  });
}

if (Hull) {
  Hull.onEmbed(start);
}
