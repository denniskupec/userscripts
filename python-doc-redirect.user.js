// ==UserScript==
// @name                Python Docs v3
// @namespace           http://github.com/denniskupec
// @description         Redirect v2 documentation to v3.x
// @author              Dennis Kupec <denniskupec@gmail.com>
// @version             1
// @match               http*://docs.python.org/*
// @grant               none
// ==/UserScript==

(function() {
	'use strict';

	var location = window.location.pathname.split('/');

	if (location[1].match(/^3(\.?[0-9])?$/) === null) {
		
		location[1] = '3';

		window.location = location.join('/');

	}

})();
