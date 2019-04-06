// ==UserScript==
// @name             Rarbg Poster View
// @description      Adds poster images to the torrent list
// @namespace        https://baud.nu
// @version          2
// @author           Dennis Kupec
//
// @match            https://rarbg.to/torrents.php*
//
// @noframes
// @unwrap
// @run-at           document-load
// ==/UserScript==

(function() {
	document.querySelectorAll('.lista2t tbody tr').forEach(show_poster)
})()

function show_poster(e) {
	let lista = e.querySelectorAll('.lista')
	if (lista.length === 0) {
		return
	}

	let poster = lista[1].children[0].getAttribute('onmouseover').match(/(https?:\/\/.*\/\w+\.jpg)/g)[0]

	lista[0].innerHTML = `<img src="${poster}" style="max-width:20em">`
}
