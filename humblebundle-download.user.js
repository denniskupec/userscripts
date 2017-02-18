// ==UserScript==
// @name			Humblebundle Downloader
// @namespace		https://github.com/denniskupec
// @version			1
// @author			Dennis Kupec <denniskupec@gmail.com>
// @match			https://www.humblebundle.com/downloads*
// @grant			GM_download
// @connect			*.humble.com
// @nocompat		Chrome
// @noframes
// ==/UserScript==

var elements;

/* page loads everything async */
var int = setInterval(()=>{
	elements = document.querySelectorAll('.js-all-downloads-holder a.a');

	if (elements.length > 0) {
		clearInterval(int);
		elements = Array.from(elements);

		console.log(`Downloading ${elements.length} items`);

		download(elements.pop());
	}

}, 250);

function download(url) {
	if (!elements.length) {
		return;
	}

	console.info(`Downloading: ${url}`);

	GM_download({
		url: url.getAttribute('data-web'),
		name: getFilename(url),

		onload: () => {
			console.info(`Completed: ${getFilename(url)}`);
			setTimeout(download, 1000, elements.pop());
		},

		onerror: (err) => {
			console.error(`Download error: ${err.details}`);
			if (err.error == 'not_succeeded') {
				elements.push(url);
				setTimeout(download, 1000, elements.pop());
			}
		}
	});
}

function getFilename(url) {
	let a = document.createElement('a');
	a.href = url.getAttribute('data-web');

	return a.pathname.replace('/', '');
}
