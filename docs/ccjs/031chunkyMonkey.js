function chunkArrayInGroups(array, num) {
	let subArray = []; 
	
	while (array.length > 0){		
		subArray.push(array.splice(0, num)); 
	} 
	return subArray;
}

let food = ["pecans", "acorns", "peanuts", "mushrooms", "seeds", "walnuts", "almonds"];
console.log(chunkArrayInGroups(food, 2));





chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].





function chunkArrayInGroups(array, num) {
  const result = [];

  while (array.length > 0) {
    result.push(array.splice(0, num));
  }

  return result;
}

let food = ["pecans", "acorns", "peanuts", "mushrooms", "seeds", "walnuts", "almonds"];
console.log(chunkArrayInGroups(food, 2));
console.log(food); // []




function chunkArrayInGroups(array, num) {
	while (array.length > num){		
		let subArray = array.splice(num); 
		return subArray;
	} 
}


How do I make this continue the loop so it continues making sub arrays based on the max length until the last array is <= num

function chunkArrayInGroups(array, num) {
	while (array.length > num){		
		let subArray = array.splice(num); 
		return subArray;
	} 
}

let food = ["pecans", "acorns", "peanuts", "mushrooms", "seeds", "walnuts", "almonds"];
console.log(chunkArrayInGroups(food, 2));
console.log(food);