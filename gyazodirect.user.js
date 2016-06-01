// ==UserScript==
// @name         Gyazo Direct Link
// @namespace    https://github.com/denniskupec
// @version      0.1
// @run-at       document-start
// @description  Makes Gyazo screenshots direct links to the image
// @author       Dennis Kupec
// @match        https://gyazo.com/*
// @grant        location
// ==/UserScript==

(function() {
  "use strict";
  location.replace(location.href + ".png");
})();
