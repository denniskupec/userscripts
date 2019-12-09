// ==UserScript==
// @name        Fix OpenWRT TextArea Spellcheck
// @namespace   github.com/denniskupec
// @match       http://10.*.*.*/cgi-bin/luci/admin/network/firewall/custom
// @match       http://192.168.*.*/cgi-bin/luci/admin/network/firewall/custom
// @match       http://172.16.*.*/cgi-bin/luci/admin/network/firewall/custom
// @grant       none
// @version     1.0
// @author      Dennis Kupec
// @run-at      document-end
// ==/UserScript==

(function() {
  
  let attributes = [
    ['autocorrect', 'off'],
    ['autocapitalize', 'false'],
    ['spellcheck', 'false']
  ]
  
  for (let a of attributes) {
    document.getElementById('cbid.firewall.1._custom').setAttribute(a[0], a[1])
  }

})();
