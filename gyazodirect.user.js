// ==UserScript==
// @name         Gyazo Direct Link
// @namespace    https://github.com/denniskupec
// @version      0.1
// @run-at       document-start
// @description  Makes Gyazo screenshots direct links to the image
// @author       Dennis Kupec
// @match        https://gyazo.com/*
// @exclude      https://gyazo.com/search
// @exclude      https://gyazo.com/verify/*
// @exclude      https://gyazo.com/teams/*
// @exclude      https://gyazo.com/settings
// @exclude      https://gyazo.com/collections
// @exclude      https://gyazo.com/pricing
// @exclude      https://gyazo.com/download
// @grant        location
// ==/UserScript==

(function() {
  "use strict";
  location.replace(location.href + ".png");
})();
