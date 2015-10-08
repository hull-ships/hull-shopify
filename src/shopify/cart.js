/* global ShopifyAPI */

import operations from './cart-operations';

function noop() {}

export default function ajaxForm(hull) {
  const ops = operations(hull);
  if (window.ShopifyAPI && window.ShopifyAPI.onCartUpdate) {
    // item add tracking call
    const addItemFromForm = window.ShopifyAPI.addItemFromForm;
    if (addItemFromForm) {
      window.ShopifyAPI.addItemFromForm = function(form, callback, errorCallback) {
        const addCallback = function(item = {} ) {
          ops.add(item);
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
            if (item.quantity > 0) {
              ops.update(item, quantity);
            } else {
              ops.remove(item, quantity);
            }
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
            hull.track('Update Cart Note', note);
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
