document.addEventListener("touchstart", function(){}, true);

/* Uptime */
function uptimeCard() {
  var then = "08/04/2016 17:00:00";
  var ms = moment(moment(),"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));
  var d = moment.duration(ms);
  s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
  h = moment.duration(s).hours();
  m = moment.duration(s).minutes();
  sec = moment.duration(s).seconds();
  days = moment().diff(moment("08-04-2016", "DD-MM-YYYY"), 'days');
  x = Math.random().toFixed(2);
  y = Math.random().toFixed(2);
  z = Math.random().toFixed(2);
  $('#clock').html(days +" days" + " " + h + ":" + m + ":" + sec + ", 1 user, " + "load average: " + x + ", " + y + ", " +z);

  function update() {
    var then = "08/04/2016 17:00:00";
    var ms = moment(moment(),"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));
    var d = moment.duration(ms);
    s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
    h = moment.duration(s).hours();
    m = moment.duration(s).minutes();
    sec = moment.duration(s).seconds();
    days = moment().diff(moment("08-04-2016", "DD-MM-YYYY"), 'days');
    x = Math.random().toFixed(2);
    y = Math.random().toFixed(2);
    z = Math.random().toFixed(2);
    $('#clock').html(days +" days" + " " + h + ":" + m + ":" + sec + ", 1 user, " + "load average: " + x + ", " + y + ", " +z);
  }
  setInterval(update,1000);
}
uptimeCard();

/* ASCII typed text */
$(function(){
  $(".element").typed({
    strings: [

      "<span style='color:#009966;'><pre>      ___     <br>     /\  \    <br>    /::\  \   <br>   /:/\:\  \  <br>  /:/  \:\  \ <br> /:/__/ \:\__\<br> \:\  \ /:/  /<br>  \:\  /:/  / <br>   \:\/:/  /  <br>    \::/  /   <br>     \/__/    <br></pre>",

      "<span style='color:#009966;'><pre> ██████╗██╗   ██╗██████╗ ██╗               <br>██╔════╝██║   ██║██╔══██╗██║               <br>██║     ██║   ██║██████╔╝██║               <br>██║     ██║   ██║██╔══██╗██║               <br>╚██████╗╚██████╔╝██║  ██║███████╗          <br> ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝          <br>                                           <br>       ██╗██╗      █████╗ ██████╗ ██╗   ██╗<br>      ██╔╝██║     ██╔══██╗██╔══██╗╚██╗ ██╔╝<br>     ██╔╝ ██║     ███████║██║  ██║ ╚████╔╝ <br>    ██╔╝  ██║     ██╔══██║██║  ██║  ╚██╔╝  <br>██╗██╔╝   ███████╗██║  ██║██████╔╝   ██║   <br>╚═╝╚═╝    ╚══════╝╚═╝  ╚═╝╚═════╝    ╚═╝   <br></pre>",

      "<span style='color:#009966;'><pre>       (    (      <br>   (   )\ ) )\ )   <br> ( )\ (()/((()/(   <br> )((_) /(_))/(_))  <br>((_)_ (_)) (_))_   <br> | _ )/ __| |   \  <br> | _ \\__ \ | |) | <br> |___/|___/ |___/ <br></pre>",

      "<span style='color:#009966;'><pre>___/~~\____/~~~~~\___/~~~~~~\__/~~~~~\ <br>__/~~\____/~~\_/~~\_/~~\_/~~\_/~~\_/~~\   <br>_/~~~~~\___/~~~~~\_____/~~~\___/~~~~~\<br>/~~\_/~~\_/~~\_/~~\_/~~\_/~~\_/~~\_/~~\   <br>_/~~~~~\___/~~~~~\___/~~~~~~\__/~~~~~\   <br>_/~~~~~\____/~~\_____/~~~~~\_____/~~~~~\<br>/~~\_/~~\__/~~~\____/~~\_/~~\___/~~\_/~~\<br>_/~~~~~\____/~~\___/~~\___/~~\_/~~\___/~~\<br>___/~~\_____/~~\____/~~\_/~~\___/~~\_/~~\<br>__/~~\____/~~~~~~\___/~~~~~\_____/~~~~~\<br></pre>",

"<span style='color:#009966;'><pre>█████████████████████████████████████<br>█████████████████████████████████████<br>████ ▄▄▄▄▄ █▀▄█▀ ▀▄ █▀█▄ █ ▄▄▄▄▄ ████<br>████ █   █ █▄   ▄▀ ▀▀▄▀  █ █   █ ████<br>████ █▄▄▄█ █ ▀█▀█▄▄ ▄▄▄ ██ █▄▄▄█ ████<br>████▄▄▄▄▄▄▄█ ▀▄█ █ ▀ ▀▄█▄█▄▄▄▄▄▄▄████<br>████ ▄▀▄█▀▄▄▀█ ▀█ ▀██▄▀█▀█▄▄▄▀▄▄▀████<br>████  ▀▄▀█▄█▀▄▄██ ██ ▄▄▄▄▀ ▄▀█▀▀█████<br>████▀█▀ ▀ ▄ ▄█▀▀  █▀█  ▀▀▄ ██▀█ ▄████<br>████▄▄▄▀▄▄▄▄▀▄██  ▄█▄▀▄█ ▄ ▄███ ▄████<br>████▄▀▀█▄▄▄▄▄██▄█ ▀  █▀▄▄█▀ ▄▀█▀▄████<br>████▄█▀███▄▀▄ █▀█▄ █▄ █▀▄  ▄█▄▄▄ ████<br>████▄████▄▄▄ ▀    ▄█▀█▀█ ▄▄▄ ▄▄▀█████<br>████ ▄▄▄▄▄ █▄▄▀  ▀███▄▄▀ █▄█ ▀  █████<br>████ █   █ █▀█▀ ▄  ▀▄██▀ ▄  ▄▄█ █████<br>████ █▄▄▄█ █▀█▀ ▀▀ ██ █▀▀▄██▄██▀▄████<br>████▄▄▄▄▄▄▄█▄▄▄▄██▄█▄▄▄█▄▄██▄▄█▄█████<br>█████████████████████████████████████<br>█████████████████████████████████████<br></pre>",

      "<span style='color:#009966;'><pre>+---[RSA 4096]----+<br>|#E*....          |<br>|%#++ .           |<br>|@*O.=            |<br>|O*.B . .         |<br>|*o. o . S        |<br>|oo . . .         |<br>|o .   .          |<br>|.                |<br>|                 |<br>+----[SHA256]-----+<br></pre>"
    ],
    contentType: 'html',
    typeSpeed: 0,
    loop: true,
    shuffle: true,
    showCursor: false
  });
});

$(function(){
  $("#typed").typed({
    stringsElement: $('#typed-strings'),
    loop: false,
    loopCount: 0,
    typeSpeed: 0,
  });
});

/* Blink cursor */
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


/* Drag */
function windowMove() {
  function maxwidthcheck(matchquery){
    if (matchquery.matches){
      len = draggies.length
      for ( var i=0, len; i < len; i++ ) {
        draggies[i].disable()
      }
    }
    else {
      len = draggies.length
      for ( var i=0, len; i < len; i++ ) {
        draggies[i].enable()
      }
    }
  }

  var draggableElems = document.querySelectorAll('.draggable');
  var draggies = []
  len = draggableElems.length
  for ( var i=0, len; i < len; i++ ) {
    var draggableElem = draggableElems[i];
    var draggie = new Draggabilly(draggableElem, {
    });
    draggies.push(draggie);
  }
  var matchquery = window.matchMedia("screen and (max-width: 600px)")
  maxwidthcheck(matchquery)
  matchquery.addListener(maxwidthcheck)
}
windowMove();

/* Jitter */
function jitter() {
  cardcontent.style.textShadow = "4px 0px 1px";
  backcolor.style.mixBlendMode = "luminosity";
}

function nojitter() {
  cardcontent.style.textShadow = "0px 0px 1px";
  backcolor.style.mixBlendMode = "normal";
}

function start() {
  max = 9000;
  min = 4000;
  sleep = Math.random() * (max - min) + min;
  setTimeout(jitter, sleep);
  setTimeout(nojitter, sleep+200);
  setTimeout(start, 5000);
}

var cardcontent = document.querySelector("#cardcontent");
var backcolor = document.querySelector("html");
start();

/* Scanlines */

function scanlines() {
  var lineHeight = $('#line').height();
  var dotWidth = $('#dot').width();
  var desiredBottom = 0;
  var lineStart = $('#line').css('top');
  var dotStart = $('#dot').css('left');
  var lineSpeed = 3000;
  var dotSpeed = lineSpeed / 3;

  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var newPosition = windowHeight - (lineHeight + desiredBottom);
  var newPositionDot = windowWidth - dotWidth;

  $("#selected_content").focus();

  $("#cover").height(windowHeight);

  $(document).ready(function() {
    move();
    dot_move();
    setInterval(function() {
      move();
    }, lineSpeed);
    setInterval(function() {
      dot_move();
    }, dotSpeed);
  })

  function move() {
    $('#line').animate({
      top: newPosition
    }, lineSpeed);
    $('#line').animate({
      top: lineStart
    }, 0);
  };

  function dot_move() {
    $('#dot').animate({
      left: newPositionDot
    }, dotSpeed);
    $('#dot').animate({
      left: dotStart
    }, 0);
  }

  $(window).resize(function() {
    windowHeight = $(window).height();
    windowWidth = $(window).width();
    newPosition = windowHeight - (lineHeight + desiredBottom);
    newPositionDot = windowWidth - dotWidth;
    $("#cover").height(windowHeight);
  });
}

scanlines();

/* Screenglow */

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

function startglow() {
  min = 10000;
  max = 20000;
  sleep = Math.random() * (max - min) + min;
  setTimeout(glow, sleep);
  setTimeout(startglow, 35000);
}

startglow()

/* Console */

$(function(){
  var styles = [ 'background: black' ,'font: monospace', 'font-size: 20pt' , 'color: #009966' , 'display: block' , 'background-size: 100%' , 'text-align: left' , 'background-padding: 20%', 'font-weight: bold, border:   border: 0px solid #009966' ].join(';');
  console.log('%c  ██████╗ ██████╗     ██████╗ \t\n██╔════╝ ╚════██╗   ██╔═████╗\t\n██║█████╗ █████╔╝   ██║██╔██║\t\n██║╚════╝██╔═══╝    ████╔╝██║\t\n╚██████╗ ███████╗██╗╚██████╔╝\t\n ╚═════╝ ╚══════╝╚═╝ ╚═════╝ \t\n', styles);
});


/* Quotes */
(function(){
  var quotes = [
    {text:"<q>Part of the inhumanity of the computer is that, once it is competently programmed and working smoothly, it is completely honest.</q><br />- Eleanor Roosevelt"},{text:"<q>The Internet is the first thing that humanity has built that humanity doesn&#8217;t understand, the largest experiment in anarchy that we have ever had.</q><br />- Eric Schmidt"},{text:"<q>It seems probable that once the machine thinking method had started, it would not take long to outstrip our feeble powers... They would be able to converse with each other to sharpen their wits. At some stage therefore, we should have to expect the machines to take control.</q><br />- Alan Turing"},{text:"<q>UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity.</q><br />- Dennis Ritchie"},{text:"<q>Any sufficiently advanced technology is indistinguishable from magic.</q><br />- Arthur C. Clarke"},{text:"<q>The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room with armed guards.</q><br />- Gene Spafford"},{text:"<q>I think computer viruses should count as life. I think it says something about human nature that the only form of life we have created so far is purely destructive. We&#8217;ve created life in our own image.</q><br />- Stephen Hawking"},{text:"<q>Computers are useless. They can only give you answers.</q><br />- Pablo Picasso"},{text:"<q>If it works, it&#8217;s beautiful.</q><br />- Stephen Hawes"},{text:"<q>When it comes to their capacity to screw things up, computers are becoming more human every day.</q><br />- Seth Lloyd"}
  ];

  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML = '<aside>'+quote.text+'</aside>';
})();


/* Glitch */

function glitch() {
  const {
    startGlitch,
    stopGlitch
  } = PowerGlitch.glitch(
    'a, .dropbtn',
    {
      "playMode": "hover",
      "createContainers": true,
      "hideOverflow": false,
      "timing": {
        "duration": 2050,
        "iterations": 1
      },
      "glitchTimeSpan": {
        "start": 0,
        "end": 1
      },
      "shake": {
        "velocity": 15,
        "amplitudeX": 0.2,
        "amplitudeY": 0.2
      },
      "slice": {
        "count": 6,
        "velocity": 15,
        "minHeight": 0.02,
        "maxHeight": 0.15,
        "hueRotate": true
      }
    }
  )
  PowerGlitch.glitch('.element', {
    "playMode": "always",
    "createContainers": true,
    "hideOverflow": false,
    "timing": {
      "duration": 6000
    },
    "glitchTimeSpan": {
      "start": 0.5,
      "end": 0.7
    },
    "shake": {
      "velocity": 15,
      "amplitudeX": 0.2,
      "amplitudeY": 0.2
    },
    "slice": {
      "count": 38,
      "velocity": 15,
      "minHeight": 0.02,
      "maxHeight": 0.15,
      "hueRotate": true
    }
  })
}

glitch();

/* Title and favicon change */
function tabInfo() {
  link = document.querySelector("link[rel~='icon']")
  defaultTitle = document.title
  window.onblur = () => {
    link.href = 'favicon_off.ico'
    document.title=  "[sleeping...]"
  }
  window.onfocus = () => {
    //back to default title
    link.href = 'favicon.ico'
    document.title = defaultTitle
  }
}
tabInfo();
