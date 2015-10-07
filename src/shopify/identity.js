import _ from 'lodash';
/* global jQuery */

export default function identity(hull) {
  function captureLink(action, event) {
    if (!hull.currentUser()) {
      if (!action) {return true; }
      event.preventDefault();
      event.stopPropagation();
      hull.emit('hull.login.' + action);
    }
  }

  function logout(event) {
    event.preventDefault();
    event.stopPropagation();
    hull.logout();
  }

  const loginLinks = document.querySelectorAll('[href^="/account/login"]');
  const logoutLinks = document.querySelectorAll('[href^="/account/logout"]');
  const accountLinks = document.querySelectorAll('[href="/account"]');

  _.each(loginLinks, (link) => {
    link.addEventListener('click', captureLink.bind(this, 'activateLogInSection'));
  });
  _.each(logoutLinks, (link) => {
    link.addEventListener('click', logout);
  });

  _.each(accountLinks, (link) => {
    link.addEventListener('click', captureLink.bind(this, 'activateShowProfileSection'));
  });
}
