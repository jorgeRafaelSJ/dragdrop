'use strict';

/*=======================================================================

========================================================================*/

var imageLinks = ['./images/1.png', './images/2.png', './images/3.png', './images/4.png', './images/5.png', './images/6.png', './images/7.png', './images/8.png', './images/9.png', './images/10.png', './images/11.png', './images/12.png'];

/*=======================================================================

========================================================================*/
var draggedImage = void 0;
var draggedImageIndex = void 0;
/*=======================================================================

========================================================================*/

var placeImages = function placeImages(links) {
	links.forEach(function (link, index) {
		var element = document.getElementById('image-' + (index + 1));
		element.src = link;
	});
};

placeImages(imageLinks);

/*=======================================================================

========================================================================*/

var dragImg = function dragImg(event) {
	console.log('hello', event);
	draggedImage = event.target.attributes.src.value;
	draggedImageIndex = event.target.id.match(/[0-9]+/)[0] - 1;
};

/*=======================================================================

========================================================================*/

var dropImg = function dropImg(event) {
	event.preventDefault();
	console.log('goodbye', event);
	console.log(draggedImage);
	var dropTargetIndex = event.target.id.match(/[0-9]+/)[0] - 1;
	console.log(dropTargetIndex);

	imageLinks.splice(draggedImageIndex, 1);
	imageLinks.splice(dropTargetIndex, 0, draggedImage);
	placeImages(imageLinks);
};

/*=======================================================================

========================================================================*/

var dragOver = function dragOver(event) {
	event.preventDefault();
};

/*=======================================================================

========================================================================*/

var dragEnter = function dragEnter(event) {
	event.preventDefault();
};
//# sourceMappingURL=main.js.map
