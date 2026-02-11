const steamrollArray = (array) => {
	
	let x;
	let y;
	x = array[2];
	y = (...x);
	 
 return x;
}

console.log(steamrollArray([1, {"foo": "bar"}, [2, 3]]));



console.log(steamrollArray([1, {}, [3, [[4]]]]));

should return [1, {}, 3, 4].