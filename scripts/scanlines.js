$(window).load(function(){

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
});
