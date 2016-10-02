
/* unix timestamp */
function time() { 
	return Math.floor(Date.now() / 1000); 
}


/* checks if number is an integer base10 */
function isInt(i) { 
	return !isNaN(i) && (parseInt(Number(i)) === i) && !isNaN(parseInt(i, 10)); 
}


/* element visibility check */
function isElementVisible(el)
{
	let rect = el.getBoundingClientRect();
    let efp = (x, y) => document.elementFromPoint(x, y);     

    if (rect.right < 0 || rect.bottom < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight) {
		return false;
	}

	return (el.contains(efp(rect.left, rect.top)) || el.contains(efp(rect.right, rect.top)) || el.contains(efp(rect.right, rect.bottom)) || el.contains(efp(rect.left, rect.bottom)));
}


/* pad strings */
function pad(input, width, padding)
{
	padding = padding || '0';
	input = input + '';

	if(input.length >= width) {
		return input;
	}
	else {
		return new Array(width - input.length + 1).join(padding) + input;
	}
}


/* visibility check (callback once window visibility returns) */
function visibilityObserver(callback)
{
	var observer = setInterval(function() {

		if(document.visibilityState === "hidden") {

			clearInterval(observer);

			var hidden_observer = setInterval(function() {

				if(document.visibilityState === "visible") {

					clearInterval(hidden_observer);

					callback();

					visibilityObserver(callback);
				}
			}, 200);
		}

	}, 200);
}


/* random string */
function randomString(length=8, custom_charset=null)
{
	var string = '';
	var charset = (custom_charset === null) ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678" : String(custom_charset);

	for(var i=0; i<length; i++) {
		string += charset[Math.floor(Math.random() * charset.length)];
	}

	return string;
}


/* check if an element has a class */
function hasClass(el, class_name)
{
	return Boolean(el.className.split(/\s+/).indexOf(class_name) + 1);
}


/* crude readable date format */
function formatDate(date_string)
{
	var date = new Date(date_string);
	var formatted = '';

	formatted += pad(date.getDay(), 2) + '/';
	formatted += pad(date.getMonth(), 2) + '/';
	formatted += date.getFullYear() + ' ';

	formatted += pad(((date.getHours() > 12) ? (date.getHours()-12) : date.getHours()), 2) + ':';
	formatted += pad(date.getMinutes(), 2) + ':';
	formatted += pad(date.getSeconds(), 2) + ' ';

	formatted += (date.getHours() > 11) ? 'PM' : 'AM';

	return formatted;
}
