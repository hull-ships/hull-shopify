import _ from 'lodash';
/* global jQuery, timber */

// Live 'on' event handler
const on = function(eventName, selector, callback) {
  document.addEventListener(eventName, function(event) {
    const matches = document.querySelectorAll(selector);
    if (_.find(matches, event.target)) {
      callback(event);
    }
  });
};

function removeTrapFocus() {
  if (window.jQuery) {
    window.jQuery(document).off('focusin.drawer_focus');
  }
}

export default function identity(hull) {
  function emit(action) {
    hull.emit('hull.login.' + action, {
      redirect_url: window.location.href,
    });
  }

  function user() {
    return hull.currentUser();
  }

  function captureLink(action, event) {
    if (!user()) {
      if (!action) {return true; }
      event.preventDefault();
      event.stopPropagation();
      removeTrapFocus();
      emit(action);
    }
  }

  function captureForm(action, event) {
    if (!user()) {
      event.preventDefault();
      event.stopPropagation();
      removeTrapFocus();
      hull.emit('hull.login.' + action, {
        redirect_url: '/checkout',
      });
    }
  }

  function logout(event) {
    event.preventDefault();
    event.stopPropagation();
    hull.logout();
  }

  const loginLinks = document.querySelectorAll('[href^="/account/login"]');
  const signupLinks = document.querySelectorAll('[href^="/account/register"]');
  const logoutLinks = document.querySelectorAll('[href^="/account/logout"]');
  const accountLinks = document.querySelectorAll('[href="/account"]');

  on('submit', 'form.ajaxcart', captureForm.bind(this, 'activateLogInSection'));

  _.each(loginLinks, (link) => {
    link.addEventListener('click', captureLink.bind(this, 'activateLogInSection'));
  });

  _.each(signupLinks, (link) => {
    link.addEventListener('click', captureLink.bind(this, 'activateSignUpSection'));
  });

  _.each(logoutLinks, (link) => {
    link.addEventListener('click', logout);
  });

  _.each(accountLinks, (link) => {
    link.addEventListener('click', captureLink.bind(this, 'activateLogInSection'));
  });

  // if (window.location.pathname.indexOf('/account/login') === 0) {
  //   emit('activateLogInSection');
  // }
}
