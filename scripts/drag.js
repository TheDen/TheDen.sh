var elem = document.querySelector('.draggable');
var draggie = new Draggabilly( elem, {
    });
var draggie = new Draggabilly( '.draggable', {
    });
var draggableElems = document.querySelectorAll('.draggable');
var draggies = []
    
    for ( var i=0, len = draggableElems.length; i < len; i++ ) {
	var draggableElem = draggableElems[i];
	var draggie = new Draggabilly( draggableElem, {
		
	    });
	draggies.push( draggie );
    }
