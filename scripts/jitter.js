function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {

  function jitter() {
    cardcontent.style.textShadow = "4px 0px 1px";
    backcolor.style.mixBlendMode = "luminosity";
  }

  function nojitter() {
    cardcontent.style.textShadow = "0px 0px 1px";
    backcolor.style.mixBlendMode = "normal";
  }

  function start() {
    max = 12000;
    min = 20000;
    sleep = Math.random() * (max - min) + min;
    setTimeout(jitter, sleep);
    setTimeout(nojitter, sleep+200);
    setTimeout(start, 5000);
  }

  var cardcontent = document.querySelector("#cardcontent");
  var backcolor = document.querySelector("html");
  start();
}
