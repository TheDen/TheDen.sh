cheet('r e t r o', function () {
  function screenon()  {
    document.querySelector("html").setAttribute("style", "-webkit-filter: blur(1px)  saturate(10)");
  }
  function screenoff()  {
    setTimeout(document.querySelector("html").setAttribute("style", "-webkit-filter: none"), 114200);
  }
  var ontime = 5000;
  var flick = 40;
  setTimeout(screenon, 0);
  setTimeout(screenoff, flick);
  setTimeout(screenon, flick*2);
  setTimeout(screenoff, ontime);
  setTimeout(screenon, ontime+flick);
  setTimeout(screenoff, ontime+flick*2);
});
