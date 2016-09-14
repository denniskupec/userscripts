// ==UserScript==
// @name 				Tumblr - Remove Sponsored Posts
// @namespace			http://github.com/denniskupec
// @description		Removes sponsored (advertisement) posts from the dashboard
// @author				Dennis Kupec <denniskupec@gmail.com>
// @version				1
// @match				http*://www.tumblr.com/dashboard
// @grant				none
// ==/UserScript==

(function() { 
	'use strict';

	clearSponsoredPosts(document.querySelectorAll('.post_container[data-pageable], .standalone-ad-container'));

	var Observer = new MutationObserver(function(mutations)
	{
		mutations.forEach(function(mutation) 
		{
    		console.info('Detected page change.');
			clearSponsoredPosts(mutation.addedNodes);
  		});    
	});

	Observer.observe(document.querySelector('#posts'), { attributes: false, childList: true, characterData: false });

})();

function clearSponsoredPosts(nodelist)
{
	if(!(nodelist instanceof NodeList)) {
		console.info("Argument 'nodelist' not instance of 'NodeList', function clearSponsoredPosts");
		return;
	}

	for(var i=0; i<nodelist.length; i++)
	{
		var el = nodelist[i];
	
		if(el.querySelector('.sponsored_label') !== null || el.querySelector('.sponsored_badge_container') !== null || el.querySelector('.standalone-ad-container') !== null) {
			console.info('Removed ID: ' + el.getAttribute('data-pageable'));
			el.remove();
		}
	}
}




