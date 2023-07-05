/* Uptime */

function updateClock() {
  const then = dayjs("04/08/2016 17:00:00", "DD/MM/YYYY HH:mm:ss");
  const now = dayjs();
  const duration = dayjs.duration(now.diff(then));
  const days = now.diff(dayjs("04-08-2016", "DD-MM-YYYY"), "days");
  const formattedTime = duration.format("HH:mm:ss");
  const loadAverage = [
    Math.random().toFixed(2),
    Math.random().toFixed(2),
    Math.random().toFixed(2),
  ];

  document.getElementById("clock").innerHTML =
    days +
    " days " +
    formattedTime +
    ", 1 user, load average: " +
    loadAverage.join(", ");
}

function uptimeCard() {
  dayjs.extend(window.dayjs_plugin_duration);
  dayjs.extend(window.dayjs_plugin_utc);
  updateClock();

  function update() {
    updateClock();
  }

  setInterval(update, 1000);
}
uptimeCard();

/* ASCII typed text */
var typed = new Typed(".element", {
  strings: [
    "<span style='color:#009966;'><pre>      ___     <br>     /      <br>    /::     <br>   /:/:    <br>  /:/  :   <br> /:/__/ :__<br> :   /:/  /<br>  :  /:/  / <br>   :/:/  /  <br>    ::/  /   <br>     /__/    <br></pre>",

    "<span style='color:#009966;'><pre> ██████╗██╗   ██╗██████╗ ██╗               <br>██╔════╝██║   ██║██╔══██╗██║               <br>██║     ██║   ██║██████╔╝██║               <br>██║     ██║   ██║██╔══██╗██║               <br>╚██████╗╚██████╔╝██║  ██║███████╗          <br> ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝          <br>                                           <br>       ██╗██╗      █████╗ ██████╗ ██╗   ██╗<br>      ██╔╝██║     ██╔══██╗██╔══██╗╚██╗ ██╔╝<br>     ██╔╝ ██║     ███████║██║  ██║ ╚████╔╝ <br>    ██╔╝  ██║     ██╔══██║██║  ██║  ╚██╔╝  <br>██╗██╔╝   ███████╗██║  ██║██████╔╝   ██║   <br>╚═╝╚═╝    ╚══════╝╚═╝  ╚═╝╚═════╝    ╚═╝   <br></pre>",

    "<span style='color:#009966;'><pre>       (    (      <br>   (   ) ) ) )   <br> ( ) (()/((()/(   <br> )((_) /(_))/(_))  <br>((_)_ (_)) (_))_   <br> | _ )/ __| |     <br> | _ \\__  | |) | <br> |___/|___/ |___/ <br></pre>",

    "<span style='color:#009966;'><pre>___/~~____/~~~~~___/~~~~~~__/~~~~~ <br>__/~~____/~~_/~~_/~~_/~~_/~~_/~~   <br>_/~~~~~___/~~~~~_____/~~~___/~~~~~<br>/~~_/~~_/~~_/~~_/~~_/~~_/~~_/~~   <br>_/~~~~~___/~~~~~___/~~~~~~__/~~~~~   <br>_/~~~~~____/~~_____/~~~~~_____/~~~~~<br>/~~_/~~__/~~~____/~~_/~~___/~~_/~~<br>_/~~~~~____/~~___/~~___/~~_/~~___/~~<br>___/~~_____/~~____/~~_/~~___/~~_/~~<br>__/~~____/~~~~~~___/~~~~~_____/~~~~~<br></pre>",

    "<span style='color:#009966;'><pre>█████████████████████████████████████<br>█████████████████████████████████████<br>████ ▄▄▄▄▄ █▀▄█▀ ▀▄ █▀█▄ █ ▄▄▄▄▄ ████<br>████ █   █ █▄   ▄▀ ▀▀▄▀  █ █   █ ████<br>████ █▄▄▄█ █ ▀█▀█▄▄ ▄▄▄ ██ █▄▄▄█ ████<br>████▄▄▄▄▄▄▄█ ▀▄█ █ ▀ ▀▄█▄█▄▄▄▄▄▄▄████<br>████ ▄▀▄█▀▄▄▀█ ▀█ ▀██▄▀█▀█▄▄▄▀▄▄▀████<br>████  ▀▄▀█▄█▀▄▄██ ██ ▄▄▄▄▀ ▄▀█▀▀█████<br>████▀█▀ ▀ ▄ ▄█▀▀  █▀█  ▀▀▄ ██▀█ ▄████<br>████▄▄▄▀▄▄▄▄▀▄██  ▄█▄▀▄█ ▄ ▄███ ▄████<br>████▄▀▀█▄▄▄▄▄██▄█ ▀  █▀▄▄█▀ ▄▀█▀▄████<br>████▄█▀███▄▀▄ █▀█▄ █▄ █▀▄  ▄█▄▄▄ ████<br>████▄████▄▄▄ ▀    ▄█▀█▀█ ▄▄▄ ▄▄▀█████<br>████ ▄▄▄▄▄ █▄▄▀  ▀███▄▄▀ █▄█ ▀  █████<br>████ █   █ █▀█▀ ▄  ▀▄██▀ ▄  ▄▄█ █████<br>████ █▄▄▄█ █▀█▀ ▀▀ ██ █▀▀▄██▄██▀▄████<br>████▄▄▄▄▄▄▄█▄▄▄▄██▄█▄▄▄█▄▄██▄▄█▄█████<br>█████████████████████████████████████<br>█████████████████████████████████████<br></pre>",

    "<span style='color:#009966;'><pre>+---[RSA 4096]----+<br>|#E*....          |<br>|%#++ .           |<br>|@*O.=            |<br>|O*.B . .         |<br>|*o. o . S        |<br>|oo . . .         |<br>|o .   .          |<br>|.                |<br>|                 |<br>+----[SHA256]-----+<br></pre>",
  ],
  contentType: "html",
  typeSpeed: 3,
  loop: true,
  shuffle: true,
  showCursor: false,
  autoInsertCss: false,
  smartBackspace: false,
});

/* Drag */
function enableDrag() {
  const draggableElems = document.querySelectorAll(".draggable");
  const draggies = [];

  for (let i = 0; i < draggableElems.length; i++) {
    const draggableElem = draggableElems[i];
    const draggie = new Draggabilly(draggableElem, {});
    draggies.push(draggie);
  }

  function maxwidthcheck(matchquery) {
    const len = draggies.length;
    for (let i = 0; i < len; i++) {
      if (matchquery.matches) {
        draggies[i].disable();
      } else {
        draggies[i].enable();
      }
    }
  }

  const matchquery = window.matchMedia("screen and (max-width: 600px)");
  maxwidthcheck(matchquery);
  matchquery.addListener(maxwidthcheck);
}

enableDrag();

/* Jitter */
function startJitter() {
  const cardcontent = document.querySelector("#cardcontent");
  const backcolor = document.querySelector("html");

  function jitter() {
    cardcontent.style.textShadow = "4px 0px 1px";
    backcolor.style.mixBlendMode = "luminosity";
  }

  function nojitter() {
    cardcontent.style.textShadow = "0px 0px 1px";
    backcolor.style.mixBlendMode = "normal";
  }

  function start() {
    const sleep = Math.random() * 9000 + 4000;
    setTimeout(jitter, sleep);
    setTimeout(nojitter, sleep + 200);
    setTimeout(start, 5000);
  }

  start();
}

startJitter();

/* Scanlines */

function scanlines() {
  var lineHeight = document.getElementById("line").offsetHeight;
  var dotWidth = document.getElementById("dot").offsetWidth;
  var desiredBottom = 0;
  var lineStart = document.getElementById("line").style.top;
  var dotStart = document.getElementById("dot").style.left;
  var lineSpeed = 3000;
  var dotSpeed = lineSpeed / 3;
  var loopDelay = 2000;

  var windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  var newPosition = windowHeight - (lineHeight + desiredBottom);
  var newPositionDot = windowWidth - dotWidth;

  document.getElementById("cover").style.height = windowHeight + "px";

  function move(timestamp) {
    var lineElement = document.getElementById("line");
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      lineElement.style.top = (progress / lineSpeed) * newPosition + "px";
      if (progress < lineSpeed) {
        window.requestAnimationFrame(step);
      } else {
        lineElement.style.top = lineStart;
        start = null;
        setTimeout(move, loopDelay);
      }
    }

    window.requestAnimationFrame(step);
  }

  function dot_move(timestamp) {
    var dotElement = document.getElementById("dot");
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      dotElement.style.left = (progress / dotSpeed) * newPositionDot + "px";
      if (progress < dotSpeed) {
        window.requestAnimationFrame(step);
      } else {
        dotElement.style.left = dotStart;
        start = null;
        setTimeout(dot_move, loopDelay);
      }
    }

    window.requestAnimationFrame(step);
  }

  move();
  dot_move();

  window.addEventListener("resize", function () {
    windowHeight = window.innerHeight || document.documentElement.clientHeight;
    windowWidth = window.innerWidth || document.documentElement.clientWidth;
    newPosition = windowHeight - (lineHeight + desiredBottom);
    newPositionDot = windowWidth - dotWidth;
    document.getElementById("cover").style.height = windowHeight + "px";
  });
}

scanlines();

/* Screenglow */

function startScreenGlow() {
  function screenon() {
    document.querySelector("html").style.filter =
      "-webkit-filter: blur(0px)  saturate(10)";
  }

  function screenoff() {
    setTimeout(function () {
      document.querySelector("html").style.filter = "none";
    }, 114200);
  }

  function glow() {
    const ontime = 1500;
    const flick = 100;
    setTimeout(screenon, 0);
    setTimeout(screenoff, flick);
    setTimeout(screenon, flick * 2);
    setTimeout(screenoff, ontime);
    setTimeout(screenon, ontime + flick);
    setTimeout(screenoff, ontime + flick * 2);
  }

  function startglow() {
    const min = 10000;
    const max = 20000;
    const sleep = Math.random() * (max - min) + min;
    setTimeout(glow, sleep);
    setTimeout(startglow, 35000);
  }

  startglow();
}

startScreenGlow();

/* Console */
var styles = [
  "background: black",
  "font: monospace",
  "font-size: 20pt",
  "color: #009966",
  "display: block",
  "background-size: 100%",
  "text-align: left",
  "background-padding: 20%",
  "font-weight: bold, border:   border: 0px solid #009966",
].join(";");

console.log(
  "%c  ██████╗ ██████╗     ██████╗ \t\n██╔════╝ ╚════██╗   ██╔═████╗\t\n██║█████╗ █████╔╝   ██║██╔██║\t\n██║╚════╝██╔═══╝    ████╔╝██║\t\n╚██████╗ ███████╗██╗╚██████╔╝\t\n ╚═════╝ ╚══════╝╚═╝ ╚═════╝ \t\n",
  styles
);

/* Quotes */
(function () {
  var quotes = [
    {
      text: "<q>Part of the inhumanity of the computer is that, once it is competently programmed and working smoothly, it is completely honest.</q><br />- Eleanor Roosevelt",
    },
    {
      text: "<q>The Internet is the first thing that humanity has built that humanity doesn&#8217;t understand, the largest experiment in anarchy that we have ever had.</q><br />- Eric Schmidt",
    },
    {
      text: "<q>It seems probable that once the machine thinking method had started, it would not take long to outstrip our feeble powers... They would be able to converse with each other to sharpen their wits. At some stage therefore, we should have to expect the machines to take control.</q><br />- Alan Turing",
    },
    {
      text: "<q>UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity.</q><br />- Dennis Ritchie",
    },
    {
      text: "<q>Any sufficiently advanced technology is indistinguishable from magic.</q><br />- Arthur C. Clarke",
    },
    {
      text: "<q>The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room with armed guards.</q><br />- Gene Spafford",
    },
    {
      text: "<q>I think computer viruses should count as life. I think it says something about human nature that the only form of life we have created so far is purely destructive. We&#8217;ve created life in our own image.</q><br />- Stephen Hawking",
    },
    {
      text: "<q>Computers are useless. They can only give you answers.</q><br />- Pablo Picasso",
    },
    { text: "<q>If it works, it&#8217;s beautiful.</q><br />- Stephen Hawes" },
    {
      text: "<q>When it comes to their capacity to screw things up, computers are becoming more human every day.</q><br />- Seth Lloyd",
    },
  ];

  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML =
    "<aside>" + quote.text + "</aside>";
})();

/* Glitch */

function glitch() {
  const { startGlitch, stopGlitch } = PowerGlitch.glitch("a, .dropbtn", {
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 2050,
      iterations: 1,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
  });
  /*  PowerGlitch.glitch(".element", {
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 6000,
    },
    glitchTimeSpan: {
      start: 0.5,
      end: 0.7,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 38,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
  }); */
}

setTimeout(glitch, 0);

/* Title and favicon change */
function handleTabFocus() {
  const link = document.querySelector("link[rel~='icon']");
  const defaultTitle = document.title;

  window.onblur = () => {
    link.href = "favicon_off.ico";
    document.title = "[sleeping...]";
  };

  window.onfocus = () => {
    link.href = "favicon.ico";
    document.title = defaultTitle;
  };
}

handleTabFocus();

/* Visitor Info */
fetch("https://api.ipify.org?format=jsonp&callback=")
  .then((response) => response.text())
  .then((data) => {
    const startIndex = data.indexOf("{");
    const endIndex = data.lastIndexOf("}");
    const jsonData = JSON.parse(data.substring(startIndex, endIndex + 1));
    ipinfo = jsonData;
    if (ipinfo.ip != null) {
      document.querySelector(".ipaddress").innerHTML = ipinfo.ip;
      document.querySelector(".ipinfo").style.display = "revert";
    }
  })
  .catch((error) => console.log(error));
