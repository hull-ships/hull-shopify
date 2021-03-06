import cleanup from '../cleanup';

function noop() {}

function getPrice(item) {
  if (item.price && item.price > 0) {
    return item.price / 100;
  }
}

export default function(hull) {
  function tryTrack(name, props) {
    try {
      hull.track(name, cleanup(props));
    } catch (e) {
      noop();
    }
  }
  return {
    add(item = {}) {
      tryTrack('Added Product', {
        id: item.id,
        sku: item.sku,
        name: item.title,
        price: getPrice(item),
        quantity: item.quantity,
        category: item.product_type,
      });
    },
    udpate(item, quantity) {
      tryTrack('Updated Product', {
        id: item.id,
        sku: item.sku,
        name: item.title,
        price: getPrice(item),
        quantity: item.quantity,
        category: item.product_type,
        quantity_change: quantity - item.quantity,
      });
    },
    remove(item, quantity) {
      tryTrack('Removed Product', {
        id: item.id,
        sku: item.sku,
        name: item.title,
        price: getPrice(item),
        quantity: item.quantity,
        category: item.product_type,
        quantity_change: quantity - item.quantity,
      });
    },
  };
}
