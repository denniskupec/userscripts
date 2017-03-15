/* 
Lite plan subscriptions dont allow certain customizations.
They're blocked by just disabling elements.

This makes them usable again.

javascript:document.querySelectorAll("form[id^='edit_user_'] fieldset,input").forEach((e)=>{e.classList.remove("disabled","opacity_half");e.removeAttribute("disabled");});

*/

document.querySelectorAll("form[id^='edit_user_'] fieldset, input").forEach((e) => {
    e.classList.remove("disabled", "opacity_half");
    e.removeAttribute("disabled");
});
