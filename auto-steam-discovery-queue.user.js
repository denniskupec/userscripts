// ==UserScript==
// @name         Auto Discovery Queue
// @namespace    https://github.com/denniskupec
// @version      0.1
// @description  Auto run through the discovery queue for Steam Summer Sale 2016 trading cards
// @author       Dennis Kupec
// @match        *://store.steampowered.com/app/*
// @match        *://store.steampowered.com/explore/*
// @run-at       document-end
// @grant        document.querySelector
// @grant        location.reload
// ==/UserScript==

(function() {
  'use strict';

  // TODO: bypass age verification screens

  var error = document.querySelector('body > div:nth-child(2) > p:nth-child(10)');
  var btn_next = document.querySelector('div.btn_next_in_queue');
  var btn_newqueue = document.querySelector('#refresh_queue_btn');

  if(btn_newqueue !== null) {
    if(document.querySelector('div.discovery_queue_winter_sale_cards_header > div.subtext').innerText == 'Come back tomorrow to earn more cards by browsing your Discovery Queue!') {
      return;
    }

    btn_newqueue.click();
  }

  if(error !== null) {
    console.log('Steam returned an error: ' + error.innerText + ' - retrying in 30 seconds.');
    setTimeout(location.reload, 30*1000);
  }

  if(btn_next !== null) {
    btn_next.click();
  }

})();


