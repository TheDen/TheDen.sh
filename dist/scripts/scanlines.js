$(window).load(function(){var d=$('#line').height(),i=$('#dot').width(),h=0,m=$('#line').css('top'),l=$('#dot').css('left'),b=3e3,g=b/3,a=$(window).height(),c=$(window).width(),j=a-(d+h),e=c-i;$("#selected_content").focus(),$("#cover").height(a),$(document).ready(function(){f(),k(),setInterval(function(){f()},b),setInterval(function(){k()},g)});function f(){$('#line').animate({top:j},b),$('#line').animate({top:m},0)}function k(){$('#dot').animate({left:e},g),$('#dot').animate({left:l},0)}$(window).resize(function(){a=$(window).height(),c=$(window).width(),j=a-(d+h),e=c-i,$("#cover").height(a)})})