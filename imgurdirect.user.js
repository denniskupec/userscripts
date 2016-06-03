// ==UserScript==
// @name         Imgur Direct Link
// @namespace    http://github.com/denniskupec
// @version      0.1
// @description  Direct links to Imgur images
// @author       Dennis Kupec
// @run-at       document-start
// @exclude      *://imgur.com/a/*
// @exclude      *://imgur.com/account/*
// @exclude      *://imgur.com/apps/*
// @exclude      *://imgur.com/about
// @match        https://imgur.com/*
// @grant        location
// ==/UserScript==

(function() {
  "use strict";
  location.replace(location.href + ".jpg");
})();
