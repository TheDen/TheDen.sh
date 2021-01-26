function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    if (daysSpan.innerHTML < 0) {
      daysSpan.innerHTML = '&#10003';
      daysSpan.style.backgroundColor = "green";
      hoursSpan.innerHTML = '&#10003';
      hoursSpan.style.backgroundColor = "green";
      minutesSpan.innerHTML = '&#10003';
      minutesSpan.style.backgroundColor = "green";
      secondsSpan.innerHTML = '&#10003';
      secondsSpan.style.backgroundColor = "green";
    }

    else {
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    }

    if (t.total <= 0) {
      daysSpan.innerHTML = '&#10003';
      daysSpan.style.backgroundColor = "green";
      hoursSpan.innerHTML = '&#10003';
      hoursSpan.style.backgroundColor = "green";
      minutesSpan.innerHTML = '&#10003';
      minutesSpan.style.backgroundColor = "green";
      secondsSpan.innerHTML = '&#10003';
      secondsSpan.style.backgroundColor = "green";
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
var d = new Date();
var returnDate = new Date();
returnDate.setDate(d.getDate() + (5+(7-d.getDay())) % 7);
returnDate.setHours(16);
returnDate.setMinutes(0);
returnDate.setSeconds(0);
var deadline = returnDate ;
var deadline2 = new Date();
deadline2.setDate(d.getDate() + (3+(7-d.getDay())) % 7);
deadline2.setHours(16);
deadline2.setMinutes(0);
deadline2.setSeconds(0);
initializeClock('clockdiv', deadline);
initializeClock('clockdiv2', deadline2);



