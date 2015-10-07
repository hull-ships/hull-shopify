import _ from 'lodash';
/* global ShopifyAPI */

function cleanup(object) {
  return _.omit(object, 'token');
}
export default function ajaxForm(hull) {
  function noop() {}

  if (window.ShopifyAPI && window.ShopifyAPI.onCartUpdate) {
    // item add tracking call
    const addItemFromForm = window.ShopifyAPI.addItemFromForm;
    if (addItemFromForm) {
      window.ShopifyAPI.addItemFromForm = function(form, callback, errorCallback) {
        const addCallback = function(item = {} ) {
          try {
            const track = {
              id: item.id,
              sku: item.sku,
              name: item.title,
              price: item.price,
              quantity: item.quantity,
              category: item.product_type,
            };
            hull.track('Added Product', cleanup(track));
          } catch (e) {
            noop();
          }

          if ((typeof callback) === 'function') {
            callback(item);
          } else {
            ShopifyAPI.onItemAdded(item, form);
          }
        };
        addItemFromForm(form, addCallback, errorCallback);
      };
    }

    // item change tracking call
    const changeItem = window.ShopifyAPI.changeItem;
    if (changeItem) {
      window.ShopifyAPI.changeItem = function(line, quantity, callback) {
        const changeCallback = function(cart) {
          try {
            const item = cart.items[line];
            const track = {
              id: item.id,
              sku: item.sku,
              name: item.title,
              price: item.price,
              quantity: item.quantity,
              category: item.product_type,
              quantity_change: quantity - item.quantity,
            };
            const eventName = (quantity > 0) ? 'Updated Product' : 'Removed Product';
            hull.track(eventName, cleanup(track));
          } catch (e) {
            noop();
          }

          if ((typeof callback) === 'function') {
            callback(cart);
          } else {
            ShopifyAPI.onCartUpdate(cart);
          }
        };
        changeItem(line, quantity, changeCallback);
      };
    }

    const updateCartNote = window.ShopifyAPI.updateCartNote;
    if (updateCartNote) {
      window.ShopifyAPI.updateCartNote = function(note, callback) {
        const updateCartNoteCallback = function(cart) {
          try {
            hull.track('Update Cart Note', cleanup(note));
          } catch (e) {
            noop();
          }

          if ((typeof callback) === 'function') {
            callback(cart);
          } else {
            ShopifyAPI.onCartUpdate(cart);
          }
        };
        updateCartNote(note, updateCartNoteCallback);
      };
    }
  }
}
