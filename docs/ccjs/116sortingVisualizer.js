function generateElement() {
	return Math.floor(Math.random() * 100 + 1);
};

function generateArray() {
	const arrayOutline = new Array(5).fill(1);
	const arrayNums = arrayOutline.map((num) => num * generateElement());
	return arrayNums;
};

function generateContainer() {
	return document.createElement("div");
};

function fillArrContainer(element, array) {
	
};

console.log(generateArray());