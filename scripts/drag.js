function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

var elem = document.querySelector('.draggable');
var draggie = new Draggabilly( elem, {
});
var draggie = new Draggabilly( '.draggable', {
});
var draggableElems = document.querySelectorAll('.draggable');
var draggies = []


if (isMobile()) {
  len =  draggableElems.length-1
}
else {
  len = draggableElems.length
}
for ( var i=0, len; i < len; i++ ) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly(draggableElem, {

  });
  draggies.push( draggie );
}
