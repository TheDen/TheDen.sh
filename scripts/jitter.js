function jitter() {
//  console.log('1st');
  myElement.style.textShadow = "4px 0px 1px";
}

 function nojitter() {
//   console.log('2nd')
  //myElement = document.querySelector("body");
  myElement.style.textShadow = "0px 0px 1px";
}

function start() {
//var myElement = document.querySelector("body");
max = 12000;
min = 20000;
sleep = Math.random() * (max - min) + min;
setTimeout(jitter, sleep);
setTimeout(nojitter, sleep+200);
setTimeout(start, 5000);
}

var myElement = document.querySelector("#cardcontent");
start();
