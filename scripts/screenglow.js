function screenon()  {
  document.querySelector("html").setAttribute("style", "-webkit-filter: blur(0px)  saturate(10)");
}
function screenoff()  {
  setTimeout(document.querySelector("html").setAttribute("style", "-webkit-filter: none"), 114200);
}

function glow() {
	var ontime = 1500;
	var flick = 100;
	setTimeout(screenon, 0);
	setTimeout(screenoff, flick);
	setTimeout(screenon, flick*2);
	setTimeout(screenoff, ontime);
	setTimeout(screenon, ontime+flick);
	setTimeout(screenoff, ontime+flick*2);
}

cheet('r e t r o', function () {
  glow()
});

function startglow() {
  min = 10000;
	max = 20000;
  sleep = Math.random() * (max - min) + min;
	setTimeout(glow, sleep);
	setTimeout(startglow, 35000);
}

startglow()
