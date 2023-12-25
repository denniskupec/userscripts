// ==UserScript==
// @name        Youtube Share Link
// @namespace   github.com/denniskupec
// @match       https://www.youtube.com/*
// @grant       none
// @version     1
// @author      Dennis Kupec
// @run-at      document-idle
// @noframes
// ==/UserScript==

function waitForElement(selector) {
  return new Promise(resolve => {
    const queryResult = document.querySelector(selector);
    if (queryResult) {
      return resolve(queryResult);
    }
    const observer = new MutationObserver(mutations => {
      const queryResult = document.querySelector(selector);
      if (queryResult) {
        observer.disconnect();
        resolve(queryResult);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
}

(function(){
  waitForElement('yt-copy-link-renderer').then(item => {
    const link = item.querySelector('#share-url');
    item.addEventListener('click', () => {
      let u = new URL(link.value);
      u.searchParams.delete('si');
      link.value = u.toString();
    });
  });
})();
