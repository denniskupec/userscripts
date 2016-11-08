// ==UserScript==
// @name			Github Helvetica
// @description			Github font replacement
// @namespace			https://github.com/denniskupec
// @version			1
// @author			Dennis Kupec <denniskupec@gmail.com>
// @match			http*://github.com/*
// @grant			GM_addStyle
// @run-at			document-start
// @noframes
// ==/UserScript==

(() => {
	GM_addStyle("body { font-family: 'Helvetica Neue', 'Helvetica'; }");
})();
