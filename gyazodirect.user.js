// ==UserScript==
// @name         Gyazo Direct Link
// @namespace    https://github.com/denniskupec
// @version      0.1
// @run-at       document-start
// @description  Makes Gyazo screenshots direct links to the image
// @author       Dennis Kupec
// @exclude      *://gyazo.com/search
// @exclude      *://gyazo.com/verify/*
// @exclude      *://gyazo.com/teams/*
// @exclude      *://gyazo.com/settings
// @exclude      *://gyazo.com/collections
// @exclude      *://gyazo.com/pricing
// @exclude      *://gyazo.com/download
// @match        *://gyazo.com/*
// @grant        location
// ==/UserScript==

(function() {
  "use strict";
  location.replace(location.href + ".png");
})();
