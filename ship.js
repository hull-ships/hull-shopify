!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.HullShopifyShip=n():t.HullShopifyShip=n()}(this,function(){return function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="/",n(0)}([function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}function o(t,n,r){var e=window.HullShopify||{},o=n.ship.settings||{};f["default"](r,e),s["default"](r,e);var u=o.detect_login_ship||"hull-login";i["default"](r,u).then(function(t){t&&l["default"](r,e)})}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=o;var u=r(27),i=e(u),c=r(29),f=e(c),a=r(30),l=e(a),p=r(31),s=e(p);Hull&&Hull.onEmbed(o),t.exports=n["default"]},function(t,n,r){var e=r(8),o=r(4),u=r(5),i="[object Array]",c=Object.prototype,f=c.toString,a=e(Array,"isArray"),l=a||function(t){return u(t)&&o(t.length)&&f.call(t)==i};t.exports=l},function(t,n,r){function e(t){return o(t)?t:Object(t)}var o=r(3);t.exports=e},function(t,n){function r(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}t.exports=r},function(t,n){function r(t){return"number"==typeof t&&t>-1&&t%1==0&&e>=t}var e=9007199254740991;t.exports=r},function(t,n){function r(t){return!!t&&"object"==typeof t}t.exports=r},function(t,n,r){function e(t){return null!=t&&u(o(t))}var o=r(21),u=r(4);t.exports=e},function(t,n,r){var e=r(47),o=r(60),u=o(e);t.exports=u},function(t,n,r){function e(t,n){var r=null==t?void 0:t[n];return o(r)?r:void 0}var o=r(75);t.exports=e},function(t,n,r){function e(t,n,r){var e=typeof t;return"function"==e?void 0===n?t:i(t,n,r):null==t?c:"object"==e?o(t):void 0===n?f(t):u(t,n)}var o=r(52),u=r(53),i=r(10),c=r(25),f=r(79);t.exports=e},function(t,n,r){function e(t,n,r){if("function"!=typeof t)return o;if(void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 3:return function(r,e,o){return t.call(n,r,e,o)};case 4:return function(r,e,o,u){return t.call(n,r,e,o,u)};case 5:return function(r,e,o,u,i){return t.call(n,r,e,o,u,i)}}return function(){return t.apply(n,arguments)}}var o=r(25);t.exports=e},function(t,n){function r(t,n){return t="number"==typeof t||e.test(t)?+t:-1,n=null==n?o:n,t>-1&&t%1==0&&n>t}var e=/^\d+$/,o=9007199254740991;t.exports=r},function(t,n,r){function e(t){return u(t)&&o(t)&&c.call(t,"callee")&&!f.call(t,"callee")}var o=r(6),u=r(5),i=Object.prototype,c=i.hasOwnProperty,f=i.propertyIsEnumerable;t.exports=e},function(t,n,r){var e=r(8),o=r(6),u=r(3),i=r(73),c=e(Object,"keys"),f=c?function(t){var n=null==t?void 0:t.constructor;return"function"==typeof n&&n.prototype===t||"function"!=typeof t&&o(t)?i(t):u(t)?c(t):[]}:i;t.exports=f},function(t,n,r){function e(t){if(null==t)return[];f(t)||(t=Object(t));var n=t.length;n=n&&c(n)&&(u(t)||o(t))&&n||0;for(var r=t.constructor,e=-1,a="function"==typeof r&&r.prototype===t,p=Array(n),s=n>0;++e<n;)p[e]=e+"";for(var v in t)s&&i(v,n)||"constructor"==v&&(a||!l.call(t,v))||p.push(v);return p}var o=r(12),u=r(1),i=r(11),c=r(4),f=r(3),a=Object.prototype,l=a.hasOwnProperty;t.exports=e},function(t,n){function r(t,n){for(var r=-1,e=t.length,o=Array(e);++r<e;)o[r]=n(t[r],r,t);return o}t.exports=r},function(t,n){function r(t,n){for(var r=-1,e=t.length;++r<e;)if(n(t[r],r,t))return!0;return!1}t.exports=r},function(t,n,r){var e=r(61),o=e();t.exports=o},function(t,n,r){function e(t,n,r){if(null!=t){void 0!==r&&r in o(t)&&(n=[r]);for(var e=0,u=n.length;null!=t&&u>e;)t=t[n[e++]];return e&&e==u?t:void 0}}var o=r(2);t.exports=e},function(t,n,r){function e(t,n,r,c,f,a){return t===n?!0:null==t||null==n||!u(t)&&!i(n)?t!==t&&n!==n:o(t,n,e,r,c,f,a)}var o=r(49),u=r(3),i=r(5);t.exports=e},function(t,n){function r(t){return function(n){return null==n?void 0:n[t]}}t.exports=r},function(t,n,r){var e=r(20),o=e("length");t.exports=o},function(t,n,r){function e(t,n){var r=typeof t;if("string"==r&&c.test(t)||"number"==r)return!0;if(o(t))return!1;var e=!i.test(t);return e||null!=n&&t in u(n)}var o=r(1),u=r(2),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,c=/^\w*$/;t.exports=e},function(t,n,r){function e(t){return t===t&&!o(t)}var o=r(3);t.exports=e},function(t,n,r){function e(t){if(u(t))return t;var n=[];return o(t).replace(i,function(t,r,e,o){n.push(e?o.replace(c,"$1"):r||t)}),n}var o=r(57),u=r(1),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,c=/\\(\\)?/g;t.exports=e},function(t,n){function r(t){return t}t.exports=r},function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}function o(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return i["default"](t,"token")}var u=r(77),i=e(u);Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=o,t.exports=n["default"]},function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}function o(t,n){return t.ready(function(t,r,e){return i["default"](f["default"](e.deployments,function(t){return t.ship.manifest_url.indexOf("/"+n+"/manifest.json")>0}))})}var u=r(37),i=e(u),c=r(36),f=e(c);Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=o,t.exports=n["default"]},function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}function o(){}function u(t){return t.price&&t.price>0?t.price/100:void 0}Object.defineProperty(n,"__esModule",{value:!0});var i=r(26),c=e(i);n["default"]=function(t){function n(n,r){try{t.track(n,c["default"](r))}catch(e){o()}}return{add:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];n("Added Product",{id:t.id,sku:t.sku,name:t.title,price:u(t),quantity:t.quantity,category:t.product_type})},udpate:function(t,r){n("Updated Product",{id:t.id,sku:t.sku,name:t.title,price:u(t),quantity:t.quantity,category:t.product_type,quantity_change:r-t.quantity})},remove:function(t,r){n("Removed Product",{id:t.id,sku:t.sku,name:t.title,price:u(t),quantity:t.quantity,category:t.product_type,quantity_change:r-t.quantity})}}},t.exports=n["default"]},function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}function o(){}function u(t){var n=c["default"](t);window.ShopifyAPI&&window.ShopifyAPI.onCartUpdate&&!function(){var r=window.ShopifyAPI.addItemFromForm;r&&(window.ShopifyAPI.addItemFromForm=function(t,e,o){var u=function(){var r=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];n.add(r),"function"==typeof e?e(r):ShopifyAPI.onItemAdded(r,t)};r(t,u,o)});var e=window.ShopifyAPI.changeItem;e&&(window.ShopifyAPI.changeItem=function(t,r,u){var i=function(e){try{var i=e.items[t];i.quantity>0?n.update(i,r):n.remove(i,r)}catch(c){o()}"function"==typeof u?u(e):ShopifyAPI.onCartUpdate(e)};e(t,r,i)});var u=window.ShopifyAPI.updateCartNote;u&&(window.ShopifyAPI.updateCartNote=function(n,r){var e=function(e){try{t.track("Update Cart Note",n)}catch(u){o()}"function"==typeof r?r(e):ShopifyAPI.onCartUpdate(e)};u(n,e)})}()}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=u;var i=r(28),c=e(i);t.exports=n["default"]},function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}function o(){window.jQuery&&window.jQuery(document).off("focusin.drawer_focus")}function u(t){function n(n,r){t.emit("hull.login."+n,r)}function r(){return t.currentUser()}function e(t,e){if(!r()){if(!t)return!0;e.preventDefault(),e.stopPropagation(),o(),n(t)}}function u(e,u){r()||(u.preventDefault(),u.stopPropagation(),o(),n(e,{redirect_url:"/checkout"}),t.once("hull.login.dialogHidden",function(){window.location.href="/checkout"}))}function i(n){n.preventDefault(),n.stopPropagation(),t.logout()}var c=this,f=document.querySelectorAll('[href^="/account/login"]'),p=document.querySelectorAll('[href^="/account/register"]'),s=document.querySelectorAll('[href^="/account/logout"]'),v=document.querySelectorAll('[href="/account"]');l("submit","form.ajaxcart",u.bind(this,"activateLogInSection")),a["default"](f,function(t){t.addEventListener("click",e.bind(c,"activateLogInSection"))}),a["default"](p,function(t){t.addEventListener("click",e.bind(c,"activateSignUpSection"))}),a["default"](s,function(t){t.addEventListener("click",i)}),a["default"](v,function(t){t.addEventListener("click",e.bind(c,"activateLogInSection"))})}var i=r(34),c=e(i),f=r(33),a=e(f);Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=u;var l=function(t,n,r){document.addEventListener(t,function(t){var e=document.querySelectorAll(n);c["default"](e,t.target)&&r(t)})};t.exports=n["default"]},function(t,n){"use strict";function r(t,n){var r=e[/product/.test(n.template)?"product":n.template];return r&&r(t,n)}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=r;var e={product:function(t,n){if(n.product){var r=void 0;return n.product.price&&n.product.price>0&&(r=n.product.price/100),t.track("Viewed Product",{id:""+n.product.id,name:n.product.title,category:n.product.type,price:r})}},collection:function(t,n){return n.collection?t.track("Viewed Product Category",{category:n.collection.title}):void 0},search:function(t,n){if(n.search){var r=n.search,e=r.terms,o=r.results_count;if(e)return t.track("Search",{terms:e,results_count:o})}}};t.exports=n["default"]},function(t,n){function r(t){var n=t?t.length:0;return n?t[n-1]:void 0}t.exports=r},function(t,n,r){t.exports=r(35)},function(t,n,r){var e=r(7),o=r(63),u=o(e);t.exports=u},function(t,n,r){var e=r(40),o=r(7),u=r(64),i=u(e,o);t.exports=i},function(t,n,r){function e(t,n,r){var e=c(t)?o:i;return n=u(n,r,3),e(t,n)}var o=r(15),u=r(9),i=r(51),c=r(1);t.exports=e},function(t,n,r){function e(t,n,r){var e=c(t)?o:i;return r&&f(t,n,r)&&(n=void 0),("function"!=typeof n||void 0!==r)&&(n=u(n,r,3)),e(t,n)}var o=r(16),u=r(9),i=r(56),c=r(1),f=r(70);t.exports=e},function(t,n){function r(t,n){if("function"!=typeof t)throw new TypeError(e);return n=o(void 0===n?t.length-1:+n||0,0),function(){for(var r=arguments,e=-1,u=o(r.length-n,0),i=Array(u);++e<u;)i[e]=r[n+e];switch(n){case 0:return t.call(this,i);case 1:return t.call(this,r[0],i);case 2:return t.call(this,r[0],r[1],i)}var c=Array(n+1);for(e=-1;++e<n;)c[e]=r[e];return c[n]=i,t.apply(this,c)}}var e="Expected a function",o=Math.max;t.exports=r},function(t,n,r){(function(n){function e(t){var n=t?t.length:0;for(this.data={hash:c(null),set:new i};n--;)this.push(t[n])}var o=r(59),u=r(8),i=u(n,"Set"),c=u(Object,"create");e.prototype.push=o,t.exports=e}).call(n,function(){return this}())},function(t,n){function r(t,n){for(var r=-1,e=t.length;++r<e&&n(t[r],r,t)!==!1;);return t}t.exports=r},function(t,n){function r(t,n){for(var r=-1,e=n.length,o=t.length;++r<e;)t[o+r]=n[r];return t}t.exports=r},function(t,n,r){function e(t,n){var r=t?t.length:0,e=[];if(!r)return e;var f=-1,a=o,l=!0,p=l&&n.length>=c?i(n):null,s=n.length;p&&(a=u,l=!1,n=p);t:for(;++f<r;){var v=t[f];if(l&&v===v){for(var d=s;d--;)if(n[d]===v)continue t;e.push(v)}else a(n,v,0)<0&&e.push(v)}return e}var o=r(48),u=r(58),i=r(62),c=200;t.exports=e},function(t,n){function r(t,n,r,e){var o;return r(t,function(t,r,u){return n(t,r,u)?(o=e?r:t,!1):void 0}),o}t.exports=r},function(t,n){function r(t,n,r){for(var e=t.length,o=r?e:-1;r?o--:++o<e;)if(n(t[o],o,t))return o;return-1}t.exports=r},function(t,n,r){function e(t,n,r,a){a||(a=[]);for(var l=-1,p=t.length;++l<p;){var s=t[l];f(s)&&c(s)&&(r||i(s)||u(s))?n?e(s,n,r,a):o(a,s):r||(a[a.length]=s)}return a}var o=r(41),u=r(12),i=r(1),c=r(6),f=r(5);t.exports=e},function(t,n,r){function e(t,n){return o(t,n,u)}var o=r(17),u=r(14);t.exports=e},function(t,n,r){function e(t,n){return o(t,n,u)}var o=r(17),u=r(13);t.exports=e},function(t,n,r){function e(t,n,r){if(n!==n)return o(t,r);for(var e=r-1,u=t.length;++e<u;)if(t[e]===n)return e;return-1}var o=r(69);t.exports=e},function(t,n,r){function e(t,n,r,e,s,y,h){var g=c(t),x=c(n),b=l,j=l;g||(b=d.call(t),b==a?b=p:b!=p&&(g=f(t))),x||(j=d.call(n),j==a?j=p:j!=p&&(x=f(n)));var m=b==p,_=j==p,w=b==j;if(w&&!g&&!m)return u(t,n,b);if(!s){var A=m&&v.call(t,"__wrapped__"),S=_&&v.call(n,"__wrapped__");if(A||S)return r(A?t.value():t,S?n.value():n,e,s,y,h)}if(!w)return!1;y||(y=[]),h||(h=[]);for(var P=y.length;P--;)if(y[P]==t)return h[P]==n;y.push(t),h.push(n);var O=(g?o:i)(t,n,r,e,s,y,h);return y.pop(),h.pop(),O}var o=r(65),u=r(66),i=r(67),c=r(1),f=r(76),a="[object Arguments]",l="[object Array]",p="[object Object]",s=Object.prototype,v=s.hasOwnProperty,d=s.toString;t.exports=e},function(t,n,r){function e(t,n,r){var e=n.length,i=e,c=!r;if(null==t)return!i;for(t=u(t);e--;){var f=n[e];if(c&&f[2]?f[1]!==t[f[0]]:!(f[0]in t))return!1}for(;++e<i;){f=n[e];var a=f[0],l=t[a],p=f[1];if(c&&f[2]){if(void 0===l&&!(a in t))return!1}else{var s=r?r(l,p,a):void 0;if(!(void 0===s?o(p,l,r,!0):s))return!1}}return!0}var o=r(19),u=r(2);t.exports=e},function(t,n,r){function e(t,n){var r=-1,e=u(t)?Array(t.length):[];return o(t,function(t,o,u){e[++r]=n(t,o,u)}),e}var o=r(7),u=r(6);t.exports=e},function(t,n,r){function e(t){var n=u(t);if(1==n.length&&n[0][2]){var r=n[0][0],e=n[0][1];return function(t){return null==t?!1:t[r]===e&&(void 0!==e||r in i(t))}}return function(t){return o(t,n)}}var o=r(50),u=r(68),i=r(2);t.exports=e},function(t,n,r){function e(t,n){var r=c(t),e=f(t)&&a(n),v=t+"";return t=s(t),function(c){if(null==c)return!1;var f=v;if(c=p(c),(r||!e)&&!(f in c)){if(c=1==t.length?c:o(c,i(t,0,-1)),null==c)return!1;f=l(t),c=p(c)}return c[f]===n?void 0!==n||f in c:u(n,c[f],void 0,!0)}}var o=r(18),u=r(19),i=r(55),c=r(1),f=r(22),a=r(23),l=r(32),p=r(2),s=r(24);t.exports=e},function(t,n,r){function e(t){var n=t+"";return t=u(t),function(r){return o(r,t,n)}}var o=r(18),u=r(24);t.exports=e},function(t,n){function r(t,n,r){var e=-1,o=t.length;n=null==n?0:+n||0,0>n&&(n=-n>o?0:o+n),r=void 0===r||r>o?o:+r||0,0>r&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var u=Array(o);++e<o;)u[e]=t[e+n];return u}t.exports=r},function(t,n,r){function e(t,n){var r;return o(t,function(t,e,o){return r=n(t,e,o),!r}),!!r}var o=r(7);t.exports=e},function(t,n){function r(t){return null==t?"":t+""}t.exports=r},function(t,n,r){function e(t,n){var r=t.data,e="string"==typeof n||o(n)?r.set.has(n):r.hash[n];return e?0:-1}var o=r(3);t.exports=e},function(t,n,r){function e(t){var n=this.data;"string"==typeof t||o(t)?n.set.add(t):n.hash[t]=!0}var o=r(3);t.exports=e},function(t,n,r){function e(t,n){return function(r,e){var c=r?o(r):0;if(!u(c))return t(r,e);for(var f=n?c:-1,a=i(r);(n?f--:++f<c)&&e(a[f],f,a)!==!1;);return r}}var o=r(21),u=r(4),i=r(2);t.exports=e},function(t,n,r){function e(t){return function(n,r,e){for(var u=o(n),i=e(n),c=i.length,f=t?c:-1;t?f--:++f<c;){var a=i[f];if(r(u[a],a,u)===!1)break}return n}}var o=r(2);t.exports=e},function(t,n,r){(function(n){function e(t){return c&&i?new o(t):null}var o=r(39),u=r(8),i=u(n,"Set"),c=u(Object,"create");t.exports=e}).call(n,function(){return this}())},function(t,n,r){function e(t,n){return function(r,e,f){if(e=o(e,f,3),c(r)){var a=i(r,e,n);return a>-1?r[a]:void 0}return u(r,e,t)}}var o=r(9),u=r(43),i=r(44),c=r(1);t.exports=e},function(t,n,r){function e(t,n){return function(r,e,i){return"function"==typeof e&&void 0===i&&u(r)?t(r,e):n(r,o(e,i,3))}}var o=r(10),u=r(1);t.exports=e},function(t,n,r){function e(t,n,r,e,u,i,c){var f=-1,a=t.length,l=n.length;if(a!=l&&!(u&&l>a))return!1;for(;++f<a;){var p=t[f],s=n[f],v=e?e(u?s:p,u?p:s,f):void 0;if(void 0!==v){if(v)continue;return!1}if(u){if(!o(n,function(t){return p===t||r(p,t,e,u,i,c)}))return!1}else if(p!==s&&!r(p,s,e,u,i,c))return!1}return!0}var o=r(16);t.exports=e},function(t,n){function r(t,n,r){switch(r){case e:case o:return+t==+n;case u:return t.name==n.name&&t.message==n.message;case i:return t!=+t?n!=+n:t==+n;case c:case f:return t==n+""}return!1}var e="[object Boolean]",o="[object Date]",u="[object Error]",i="[object Number]",c="[object RegExp]",f="[object String]";t.exports=r},function(t,n,r){function e(t,n,r,e,u,c,f){var a=o(t),l=a.length,p=o(n),s=p.length;if(l!=s&&!u)return!1;for(var v=l;v--;){var d=a[v];if(!(u?d in n:i.call(n,d)))return!1}for(var y=u;++v<l;){d=a[v];var h=t[d],g=n[d],x=e?e(u?g:h,u?h:g,d):void 0;if(!(void 0===x?r(h,g,e,u,c,f):x))return!1;y||(y="constructor"==d)}if(!y){var b=t.constructor,j=n.constructor;if(b!=j&&"constructor"in t&&"constructor"in n&&!("function"==typeof b&&b instanceof b&&"function"==typeof j&&j instanceof j))return!1}return!0}var o=r(13),u=Object.prototype,i=u.hasOwnProperty;t.exports=e},function(t,n,r){function e(t){for(var n=u(t),r=n.length;r--;)n[r][2]=o(n[r][1]);return n}var o=r(23),u=r(78);t.exports=e},function(t,n){function r(t,n,r){for(var e=t.length,o=n+(r?0:-1);r?o--:++o<e;){var u=t[o];if(u!==u)return o}return-1}t.exports=r},function(t,n,r){function e(t,n,r){if(!i(r))return!1;var e=typeof n;if("number"==e?o(r)&&u(n,r.length):"string"==e&&n in r){var c=r[n];return t===t?t===c:c!==c}return!1}var o=r(6),u=r(11),i=r(3);t.exports=e},function(t,n,r){function e(t,n){t=o(t);for(var r=-1,e=n.length,u={};++r<e;){var i=n[r];i in t&&(u[i]=t[i])}return u}var o=r(2);t.exports=e},function(t,n,r){function e(t,n){var r={};return o(t,function(t,e,o){n(t,e,o)&&(r[e]=t)}),r}var o=r(46);t.exports=e},function(t,n,r){function e(t){for(var n=f(t),r=n.length,e=r&&t.length,a=!!e&&c(e)&&(u(t)||o(t)),p=-1,s=[];++p<r;){var v=n[p];(a&&i(v,e)||l.call(t,v))&&s.push(v)}return s}var o=r(12),u=r(1),i=r(11),c=r(4),f=r(14),a=Object.prototype,l=a.hasOwnProperty;t.exports=e},function(t,n,r){function e(t){return o(t)&&c.call(t)==u}var o=r(3),u="[object Function]",i=Object.prototype,c=i.toString;t.exports=e},function(t,n,r){function e(t){return null==t?!1:o(t)?l.test(f.call(t)):u(t)&&i.test(t)}var o=r(74),u=r(5),i=/^\[object .+?Constructor\]$/,c=Object.prototype,f=Function.prototype.toString,a=c.hasOwnProperty,l=RegExp("^"+f.call(a).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=e},function(t,n,r){function e(t){return u(t)&&o(t.length)&&!!k[M.call(t)]}var o=r(4),u=r(5),i="[object Arguments]",c="[object Array]",f="[object Boolean]",a="[object Date]",l="[object Error]",p="[object Function]",s="[object Map]",v="[object Number]",d="[object Object]",y="[object RegExp]",h="[object Set]",g="[object String]",x="[object WeakMap]",b="[object ArrayBuffer]",j="[object Float32Array]",m="[object Float64Array]",_="[object Int8Array]",w="[object Int16Array]",A="[object Int32Array]",S="[object Uint8Array]",P="[object Uint8ClampedArray]",O="[object Uint16Array]",I="[object Uint32Array]",k={};k[j]=k[m]=k[_]=k[w]=k[A]=k[S]=k[P]=k[O]=k[I]=!0,k[i]=k[c]=k[b]=k[f]=k[a]=k[l]=k[p]=k[s]=k[v]=k[d]=k[y]=k[h]=k[g]=k[x]=!1;var q=Object.prototype,M=q.toString;t.exports=e},function(t,n,r){var e=r(15),o=r(42),u=r(45),i=r(10),c=r(14),f=r(71),a=r(72),l=r(38),p=l(function(t,n){if(null==t)return{};if("function"!=typeof n[0]){var n=e(u(n),String);return f(t,o(c(t),n))}var r=i(n[0],n[1],3);return a(t,function(t,n,e){return!r(t,n,e)})});t.exports=p},function(t,n,r){function e(t){t=u(t);for(var n=-1,r=o(t),e=r.length,i=Array(e);++n<e;){var c=r[n];i[n]=[c,t[c]]}return i}var o=r(13),u=r(2);t.exports=e},function(t,n,r){function e(t){return i(t)?o(t):u(t)}var o=r(20),u=r(54),i=r(22);t.exports=e}])});
//# sourceMappingURL=ship.js.map