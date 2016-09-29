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

	if ((parseFloat(location[1]) - 3) < 0)  {
		
		location[1] = '3';

		window.location = location.join('/');

	}

})();
