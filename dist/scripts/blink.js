function blink() {
    var blinks = document.getElementsByTagName('blink');
    for (var i = blinks.length - 1; i >= 0; i--) {
	var s = blinks[i];
	s.style.visibility = (s.style.visibility === 'visible') ? 'hidden' : 'visible';
    }
    window.setTimeout(blink, 1000);
}
if (document.addEventListener) document.addEventListener("DOMContentLoaded", blink, false);
else if (window.addEventListener) window.addEventListener("load", blink, false);
else if (window.attachEvent) window.attachEvent("onload", blink);
else window.onload = blink;