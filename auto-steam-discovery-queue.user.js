// ==UserScript==
// @name         Auto Discovery Queue
// @namespace    https://github.com/denniskupec
// @version      0.1
// @description  Auto run through the discovery queue for Steam Summer Sale 2016 trading cards
// @author       Dennis Kupec
// @match        *://store.steampowered.com/app/*
// @run-at       document-end
// @grant        document.querySelector
// @grant        location.reload
// ==/UserScript==

(function() {
  'use strict';

  var error = document.querySelector('body > div:nth-child(2) > p:nth-child(10)');
  var button = document.querySelector('div.btn_next_in_queue');

  if(error !== null) {
    console.log('Steam returned an error: ' + error.innerText + ' - retrying in 30 seconds.');
    setTimeout(location.reload, 30*1000);
  }

  if(button !== null) {
    button.click();
  }
})();

