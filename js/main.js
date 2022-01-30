let arrContent = document.querySelectorAll('.content');

function randomInteger(min, max) {
	let rand = min + Math.random() * (max - min);
	return Math.floor(rand);
}

function setRGB() {
	let R = randomInteger(100, 200);
	let G = randomInteger(100, 200);
	let B = randomInteger(100, 200);

	return `rgb(${R}, ${G}, ${B})`;
}

arrContent.forEach(element => {
	element.style.background = setRGB();
});
