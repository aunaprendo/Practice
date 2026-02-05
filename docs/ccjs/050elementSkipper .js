function test(x) {
	x=x+1;
	return x;
}

function dropElements(arr, func) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == func) {
			newArr.push(arr[i]...)
		}
	}
	return newArr;
}

console.log(dropElements([1, 1, 1, 2, 1, 1, 1], test(1)));