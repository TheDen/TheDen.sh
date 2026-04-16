/* Uptime */

const _clockEl = document.getElementById("clock");
const _uptimeSince = dayjs("04/08/2016 17:00:00", "DD/MM/YYYY HH:mm:ss");
const _uptimeSinceDays = dayjs("04-08-2016", "DD-MM-YYYY");

function bar(pct) {
  const filled = Math.round(pct / 10);
  return "█".repeat(filled) + "░".repeat(10 - filled);
}

function updateClock() {
  const now = dayjs();
  const days = now.diff(_uptimeSinceDays, "days");
  const currentTime = now.format("HH:mm:ss");
  const loadAverage = [
    Math.random().toFixed(2),
    Math.random().toFixed(2),
    Math.random().toFixed(2),
  ];
  const cpuPct = Math.floor(Math.random() * 35 + 5);
  const memPct = 61;
  const tasks = 156;

  _clockEl.innerHTML =
    currentTime +
    "  up " +
    days +
    " days\n" +
    "load:  " +
    loadAverage.join("  ") +
    "\n" +
    "\n" +
    "tasks: " +
    tasks +
    " total,  1 running\n" +
    "cpu:   [" +
    bar(cpuPct) +
    "] " +
    String(cpuPct).padStart(3) +
    "%\n" +
    "mem:   [" +
    bar(memPct) +
    "] " +
    memPct +
    "%";
}

function uptimeCard() {
  dayjs.extend(window.dayjs_plugin_duration);
  dayjs.extend(window.dayjs_plugin_utc);
  updateClock();
}
uptimeCard();
let _clockInterval = setInterval(updateClock, 1000);

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

  let topZ = 10;

  for (let i = 0; i < draggableElems.length; i++) {
    const draggableElem = draggableElems[i];
    const draggie = new Draggabilly(draggableElem, {});
    draggies.push(draggie);
    draggie.on("dragStart", function () {
      draggableElem.style.zIndex = ++topZ;
    });
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
  styles,
);

/* Quotes */
(function () {
  const quotes = [
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

  const el = document.getElementById("quote");
  let index = Math.floor(Math.random() * quotes.length);

  function showQuote() {
    el.style.opacity = "0";
    setTimeout(function () {
      index = (index + 1) % quotes.length;
      el.innerHTML = "<aside>" + quotes[index].text + "</aside>";
      el.style.opacity = "0.8";
    }, 500);
  }

  el.innerHTML = "<aside>" + quotes[index].text + "</aside>";
  setInterval(showQuote, 10000);
})();

/* Glitch */

function glitch() {
  const { startGlitch, stopGlitch } = PowerGlitch.glitch("a, .dropbtn", {
    playMode: "hover",
    createContainers: true,
    hideOverflow: true,
    timing: {
      duration: 100,
      iterations: 1,
      easing: "ease-out",
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 0,
      amplitudeX: 0,
      amplitudeY: 0,
    },
    slice: {
      count: 10,
      velocity: 20,
      minHeight: 0.02,
      maxHeight: 0.3,
      hueRotate: false,
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

/* Pause expensive work when tab is hidden */
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    clearInterval(_clockInterval);
    typed.stop();
    document.getElementById("line").style.animationPlayState = "paused";
    document.getElementById("dot").style.animationPlayState = "paused";
  } else {
    updateClock();
    _clockInterval = setInterval(updateClock, 1000);
    typed.start();
    document.getElementById("line").style.animationPlayState = "running";
    document.getElementById("dot").style.animationPlayState = "running";
  }
});

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

/* Loading transition */
document.addEventListener(
  "DOMContentLoaded",
  function () {
    var coverElement = document.getElementById("cover");
    var elements = Array.from(document.getElementsByClassName("draggable"));
    shuffleArray(elements);

    coverElement.style.opacity = "0";
    coverElement.style.transition = "opacity 0.5s ease";

    setTimeout(function () {
      coverElement.style.opacity = "1";
    }, 250);

    setTimeout(function () {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
        elements[i].style.opacity = "0";
        elements[i].style.transition = "opacity 0.5s ease, transform 0.5s ease";
        elements[i].style.transform = "translateY(-100px)";

        setTimeout(
          function (index) {
            elements[index].style.opacity = "1";
            elements[index].style.transform = "translateX(0)";
          },
          50 * i,
          i,
        );
      }

      setTimeout(function () {
        elements.forEach(function (element) {
          element.style.transition = "none";
        });
      }, elements.length * 100);
    }, 1000);
  },
  { passive: true },
);

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function flashElement(elementId, flashCount, delay) {
  const element = document.getElementById(elementId);

  const originalColor = element.style.color;
  const originalBackgroundColor = element.style.backgroundColor;

  const newColor = "#096";
  const newBackgroundColor = "black";

  let count = 0;

  function flash() {
    element.style.color = newColor;
    element.style.backgroundColor = newBackgroundColor;

    setTimeout(() => {
      element.style.color = originalColor;
      element.style.backgroundColor = originalBackgroundColor;

      count++;

      if (count < flashCount) {
        setTimeout(flash, delay);
      }
    }, delay);
  }

  flash();
}

document.getElementById("about-link").addEventListener(
  "click",
  function () {
    const el = document.getElementById("about");
    let flashes = 0;
    const interval = setInterval(function () {
      if (flashes % 2 === 0) {
        el.style.color = "black";
        el.style.backgroundColor = "#009966";
      } else {
        el.style.color = "";
        el.style.backgroundColor = "";
      }
      flashes++;
      if (flashes >= 8) {
        clearInterval(interval);
        el.style.color = "";
        el.style.backgroundColor = "";
      }
    }, 120);
  },
  { passive: true },
);

document.getElementById("undo-action").addEventListener(
  "click",
  function () {
    const footer = document.getElementById("footer");
    const original = footer.innerText;
    const steps = [
      "1 change; before #1",
      "2 changes; before #1",
      "3 changes; before #1",
      "Already at oldest change",
      "Already at oldest change",
    ];
    let i = 0;
    function next() {
      if (i < steps.length) {
        footer.innerText = steps[i++];
        setTimeout(next, 400);
      } else {
        setTimeout(function () {
          footer.innerText = original;
        }, 600);
      }
    }
    next();
  },
  { passive: true },
);

document.getElementById("highlight-parens").addEventListener(
  "click",
  function () {
    const footer = document.getElementById("footer");
    const original = footer.innerHTML;
    footer.innerHTML = original.replace(
      /\(([^)]+)\)/g,
      '<span style="background:#fff;color:#000;font-weight:bold">($1)</span>',
    );
    setTimeout(function () {
      footer.innerHTML = original;
    }, 2500);
  },
  { passive: true },
);

document.getElementById("backslash-region").addEventListener(
  "click",
  function () {
    const footer = document.getElementById("footer");
    const original = footer.innerText;
    footer.innerText = original.replace(/\w/g, "*");
    setTimeout(function () {
      footer.innerText = original;
    }, 2000);
  },
  { passive: true },
);

const modal = document.getElementById("ErrModal");

const openModalBtns = document.querySelectorAll(".openModalBtn");

function openModal() {
  modal.style.display = "block";
  modal.style.opacity = "1";
}

function closeModal() {
  modal.style.opacity = "0";
  setTimeout(function () {
    modal.style.display = "none";
    modal.style.opacity = "0";
  }, 300);
}

openModalBtns.forEach(
  function (btn) {
    btn.addEventListener("click", openModal);
  },
  { passive: true },
);
window.addEventListener(
  "click",
  function (event) {
    if (event.target === modal) {
      closeModal();
    }
  },
  { passive: true },
);

const textWrap = document.getElementById("wrap-lines");
textWrap.addEventListener(
  "click",
  function () {
    if (document.body.classList.contains("no-wrap")) {
      document.body.classList.remove("no-wrap");
    } else {
      document.body.classList.add("no-wrap");
    }
  },
  { passive: true },
);

const highlightRegions = document.getElementById("highlight-regions");
highlightRegions.addEventListener(
  "click",
  function () {
    draggableElems = document.getElementsByClassName("draggable");
    for (let i = 0; i < draggableElems.length; i++) {
      if (draggableElems[i].classList.contains("sepia")) {
        draggableElems[i].classList.remove("sepia");
      } else {
        draggableElems[i].classList.add("sepia");
      }
    }
  },
  { passive: true },
);

const shellType = document.getElementById("shell-type");
shellType.addEventListener(
  "click",
  function () {
    document.querySelector("html").style.cssText =
      "filter: hue-rotate(" + Math.floor(Math.random() * 361) + "deg)";
  },
  { passive: true },
);

const executeScript = document.getElementById("execute-script");
executeScript.addEventListener(
  "click",
  function () {
    footer = document.getElementById("footer");
    defaultFooterText = footer.innerText;
    footer.style.cssText = "filter: invert(1)";
    footer.innerHTML = ":!./run.sh";
    setTimeout(function () {
      footer.innerHTML = defaultFooterText;
      footer.style.cssText = "filter: invert(0)";
    }, 2000);
  },
  { passive: true },
);

const copyButton = document.getElementById("copyButton");
copyButton.addEventListener(
  "click",
  function () {
    iframeCopy = document.getElementById("iframe-copy");

    htmlContent = `
    <div class="move card" id="added-copy">
      <iframe
        src="https://theden.sh"
        width="200"
        height="300"
        scrolling="no"
        frameborder="0"
        style="padding: 1.2em 0.5em 0.7em 0.5em;"
      ></iframe>
    </div>
`;

    iframeCopy.innerHTML = htmlContent;
  },
  { passive: true },
);

const cutButton = document.getElementById("cutButton");
cutButton.addEventListener(
  "click",
  function () {
    iframeCopy = document.getElementById("added-copy");
    if (iframeCopy !== null) {
      iframeCopy.remove();
    }
  },
  { passive: true },
);

// Cat logic
document.getElementById("showCat").addEventListener("click", () => {
  document
    .querySelectorAll(".cat")
    .forEach((el) => (el.style.display = "block"));
  document.querySelectorAll(".cat").forEach((el) => el.classList.remove("cat"));
});

/* Boot sequence */
(function bootSequence() {
  const lines = [
    {
      text: `TheDen BIOS v2.1.0  (C) 1990-${new Date().getFullYear()}  All Rights Reserved`,
      delay: 60,
    },
    { text: "Press any key to skip...", dim: true, delay: 20 },
    { text: "", delay: 20 },
    { text: "CPU: 6502 @ 1.79MHz  FPU: None  Cache: None", delay: 40 },
    { text: "Memory test: 00000K", counter: true, target: 640, delay: 0 },
    { text: "", delay: 20 },
    { text: "Detecting hardware...", delay: 40 },
    { text: "  IRQ0  keyboard controller .............. OK", delay: 30 },
    { text: "  IRQ1  display adapter [VGA 80x25] ...... OK", delay: 30 },
    { text: "  IRQ3  network interface [eth0] ......... OK", delay: 30 },
    { text: "  IRQ8  real-time clock .................. OK", delay: 30 },
    { text: "", delay: 20 },
    { text: "Loading THEDEN.SH...", delay: 50 },
    { text: "  Mounting /dev/hda1 ............... [  OK  ]", delay: 40 },
    { text: "  Starting init .................... [  OK  ]", delay: 40 },
    { text: "  Loopback interface ............... [  OK  ]", delay: 40 },
    { text: "  Starting network ................. [  OK  ]", delay: 40 },
    { text: "  Starting theden.sh daemon ........ [  OK  ]", delay: 40 },
    { text: "", delay: 20 },
    { text: "", delay: 400 },
    { text: "> BOOT SUCCESSFUL. WELCOME.", bright: true, delay: 15 },
  ];

  const overlay = document.createElement("div");
  overlay.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;background:#000;" +
    "color:#009966;font-family:console,monospace;" +
    "font-size:clamp(0.55rem,2.2vw,1rem);" +
    "padding:clamp(0.75em,3vw,2em);" +
    "z-index:999999;box-sizing:border-box;overflow:hidden;line-height:1.6;";
  document.body.appendChild(overlay);

  let skipped = false;
  let lineIndex = 0;
  let currentTimeout = null;

  function dismiss() {
    skipped = true;
    clearTimeout(currentTimeout);
    fadeOut();
  }

  function fadeOut() {
    overlay.style.transition = "opacity 0.6s ease";
    overlay.style.opacity = "0";
    setTimeout(() => overlay.remove(), 650);
    document.removeEventListener("keydown", dismiss);
    document.removeEventListener("click", dismiss);
    document.removeEventListener("touchstart", dismiss);
  }

  document.addEventListener("keydown", dismiss);
  document.addEventListener("click", dismiss);
  document.addEventListener("touchstart", dismiss, { passive: true });

  function typeNextLine() {
    if (skipped || lineIndex >= lines.length) {
      if (!skipped) setTimeout(fadeOut, 300);
      return;
    }

    const spec = lines[lineIndex++];

    if (spec.counter) {
      const el = document.createElement("div");
      overlay.appendChild(el);
      let count = 0;
      const step = Math.ceil(spec.target / 30);
      function tick() {
        count = Math.min(count + step, spec.target);
        el.textContent =
          "Memory test: " +
          String(count).padStart(6, "0") +
          "K" +
          (count < spec.target ? "" : " OK");
        if (count < spec.target) {
          currentTimeout = setTimeout(tick, 18);
        } else {
          currentTimeout = setTimeout(typeNextLine, 120);
        }
      }
      tick();
      return;
    }

    if (spec.text === "") {
      overlay.appendChild(document.createElement("br"));
      currentTimeout = setTimeout(typeNextLine, spec.delay);
      return;
    }

    const el = document.createElement("div");
    if (spec.dim) el.style.opacity = "0.45";
    if (spec.bright) el.style.color = "#00ffaa";
    overlay.appendChild(el);

    let ci = 0;
    const charDelay = spec.bright ? 30 : 8;

    function typeChar() {
      el.textContent = spec.text.substring(0, ci + 1);
      ci++;
      if (ci < spec.text.length) {
        currentTimeout = setTimeout(typeChar, charDelay);
      } else {
        currentTimeout = setTimeout(typeNextLine, spec.delay);
      }
    }

    typeChar();
  }

  typeNextLine();
})();
