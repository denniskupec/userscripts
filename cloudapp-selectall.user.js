// ==UserScript==
// @name			CloudApp Select All
// @namespace		http://baud.nu
// @version			1
// @description		Select All drops for the new CloudApp UI
// @author			Dennis Kupec
// @match			https://app.cl.ly/drops/*
// @run-at			document-start
// @grant			GM_registerMenuCommand
// ==/UserScript==

GM_registerMenuCommand(
	'select-all',
	() => document.querySelectorAll('.ItemsList input[type="checkbox"]').forEach((e) => e.click()),
	'a'
);
