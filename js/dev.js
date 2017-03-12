/*=======================================================================
Image array that loads them in order
changing the order of this array and calling placeImages 
will reorder images in the DOM to the array's current order. 
========================================================================*/

let imageLinks = [
	'./images/1.png',
	'./images/2.png',
	'./images/3.png',
	'./images/4.png',
	'./images/5.png',
	'./images/6.png',
	'./images/7.png',
	'./images/8.png',
	'./images/9.png',
	'./images/10.png',
	'./images/11.png', 
	'./images/12.png'];

/*=======================================================================
These two variables are necessary to record the image 
being dragged. In the function 'dragImg()' they will be set.
========================================================================*/

let draggedImage;
let draggedImageIndex;

/*=======================================================================
This self invoked function will loop through the links array, create img tags,
set all the necessary attributes, and append to #image-grid on page load.
========================================================================*/

(() => {
	imageLinks.forEach((link, index) => {
		let imageGrid = document.getElementById('image-grid');
		let img = document.createElement('img');
		
		img.setAttribute('id', `image-${index + 1}`);
		img.setAttribute('class', 'image');
		img.setAttribute('draggable', true);
		img.setAttribute('ondragstart', 'dragImg(event)');
		img.setAttribute('ondragenter', 'dragEnter(event)');
		img.setAttribute('ondragover', 'dragOver(event)');
		img.setAttribute('ondrop', 'dropImg(event)');
		img.setAttribute('src', link);

		imageGrid.appendChild(img);
	});
})();

/*=======================================================================
Reorders Images with new array order passed in parameter
========================================================================*/

const reorderImages = (links) => {
	links.forEach((link, index) => {
		let element = document.getElementById(`image-${index + 1}`);
		element.src = link;
	});
}

/*=======================================================================
Called ondrag - sets draggedImage string and draggedImageIndex

These variables are used to modify array on the dropImg() function
========================================================================*/

const dragImg = (event) => {

	draggedImage = event.target.attributes.src.value;
	draggedImageIndex = event.target.id.match(/[0-9]+/)[0] - 1;
};

/*=======================================================================
On drop event, it will remove the draggedImage from its old placement.
Will insert the dragged image into its new place in the array
========================================================================*/

const dropImg = (event) => {
	
	event.preventDefault();

	let dropTargetIndex = event.target.id.match(/[0-9]+/)[0] - 1;

	imageLinks.splice(draggedImageIndex, 1);
	imageLinks.splice(dropTargetIndex, 0, draggedImage);
	reorderImages(imageLinks);
};

/*=======================================================================
Only needed to prevent default and allow dropping
========================================================================*/

const dragOver = (event) => { event.preventDefault() };

/*=======================================================================
Only needed to prevent default and allow dropping
========================================================================*/

const dragEnter = (event) => { event.preventDefault() };
