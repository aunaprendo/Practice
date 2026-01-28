let squirrels =["squirRels", "sure"];

function mutation(array) {
	let wordOne = array[0].toLowerCase();
	let wordTwo = array[1].toLowerCase();
	let wordTwoLetters = wordTwo.split("");
	let letterCount = wordTwoLetters.length;
	
	for (let i = 0; i < letterCount; i++) {
		if (wordOne.includes(wordTwoLetters(i)) {
			return true;
		} else {
		 	return false;
		 }
	}
}

console.log(mutation(squirrels));

  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
Create a function named mutation that takes an array as its argument.
mutation should return true if the string in the first element of the array contains all of the letters of the string in the second element of the array, and false otherwise. For example:
mutation(["hello", "Hello"]), should return true because all of the letters in the second string are present in the first, ignoring case.
mutation(["hello", "hey"]) should return false because the string hello does not contain a y.
mutation(["Alien", "line"]), should return true because all of the letters in line are present in Alien

let squirrels =["squirRels", "sure"];

function mutation(array) {
	let wordOne = array[0].toLowerCase();
	let wordTwo = array[1].toLowerCase();
	let wordTwoLetters = wordTwo.split("");
	let letterCount = wordTwoLetters.length;
	
	for (const char of wordTwoLetters) {
		 if (wordOne.includes(char)) {
		 	return true;
		 }
		 else {
		 	return false;
		 }
	}
}

console.log(mutation(squirrels));


function mutation(array) {
  let wordOne = array[0].toLowerCase();
  let wordTwo = array[1].toLowerCase();

  for (const char of wordTwo) {
    if (!wordOne.includes(char)) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["squirRels", "sure"])); // true
console.log(mutation(["squirRels", "sun"]));  // false


  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
	
	
	let squirrels =["squirRels", "sure"];

function mutation(array) {
	let wordOne = array[0].toLowerCase();
	let wordTwo = array[1].toLowerCase();
	let wordTwoLetters = wordTwo.split("");
	let letterCount = wordTwoLetters.length;
	
		 	return letterCount;
			
}

console.log(mutation(squirrels));