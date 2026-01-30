function pyramid(string, i, boo) {
  let shape = "";
	
	for (let count = 1; count <= i; count++) {
		let bottom = (i*2)-1;
		let space = i-count;
		let char = bottom - (space*2);
		shape += " ".repeat(space) + string.repeat(char) + " ".repeat(space) + "\n";	
	}	
	if (boo==false) {
	return `\n${shape}`;
	} else {
	let shape2 = shape.split("").reverse().join("");
	return `${shape2}\n`;	
	}
};

console.log(pyramid("o", 4, true));




function pyramid(string, i, boo) {
  let shape = "";
	
	for (let count = 1; count <= i; count++) {
		let bottom = (i*2)-1;
		let space = i-count;
		let char = bottom - (space*2);
		shape += " ".repeat(space) + string.repeat(char) + "\n";	
	}	
	if (boo==false) {
	return `\n${shape}`;
	} else {
	let shape2 = shape.split("").reverse().join("");
	return `${shape2}\n`;	
	}
};

console.log(pyramid("o", 4, true));











for (let count = 1; count <= i; count++) {
		let bottom = (i*2)-1;
		let space = i-count;
		let char = botttom - (space*2);
		shape += " ".repeat(space) + string.repeat(char) + "\n";	
	}	
	return shape;
};

function reverseString(str) {
  return str.split("").reverse().join("");
}



x= Math.floor(2*1.5);
console.log(x);

console.log(pyramid("o", 4));
   oo

  ooo

 oooo

i*2-1= total
total - space= letter


	 for (let i = 0; i < 5; i++) {
	  console.log(i);
	}

if (boo == true){
  	console.log(shape.split("").reverse().join(""));
		} else

		stringCount = stringCount +2; 

	let shape = " ".repeat(4-1) + string.repeat(1) + "\n";
	let shape = " ".repeat(4-2) + string.repeat(3) + "\n";
	let shape = " ".repeat(4-3) + string.repeat(5) + "\n";

   o   3 spaces 1 letter total 4
  ooo  2 spaces 3 letter tptal 5
 ooooo 1 space  5 lettertotal  6
ooooooo 0 space  7 letter total 7

5 9

let x = "  o \n  ooo";
	while (spaceCount <=i){
		shape = shape.repeat(i);
		spaceCount = spaceCount +1;
		stringCount = stringCount +2; 
	}
	return `\n ${shape} \n`;
}

 for (let i = 1; i <= number; i++) {
    result *= i;
  }
		while (spaceCount <=i){
		let shape = " ".repeat(i-spaceCount) + string.repeat(stringCount) + \n;
		spaceCount++;
		stringCount+=2; 
	}
	let shape = " ".repeat(i-1) + string + \n;
	let shape = " ".repeat(i-2) + string.repeat(i-1) + \n;
	let shape = " ".repeat(i-3) + string.repeat(i+1) + \n;
	let shape = " ".repeat(i-4) + string.repeat(i+3) + \n;
	let shape = " ".repeat(i-5) + string.repeat(i+5) + \n;	
You should have a function named pyramid that takes three arguments.
The first argument should be a string representing the pattern character to repeat in your pyramid.
The second argument should be an integer representing the number of rows in the pyramid.
The third argument should be a Boolean value.
The pyramid function should return a string in which the pattern character is repeated and arranged to form a pyramid having the vertex facing upwards when the third argument is false.
When the third argument is true the pyramid should have the vertex facing downwards.
The vertex row should have a single pattern character, and each other row should have two pattern characters more than the previous one.
Each row should start with a number of spaces sufficient to put the center character of each row in the same column and there should not be any spaces at the end of each row.
The pyramid should start and end with a newline character.

For example, calling pyramid("o", 5, false) should give this output:

let p = " ".repeat(i-1) + string

    o   4 spaces total 5
   ooo  3 spaces tptal 6
  ooooo 1 space total  7
 ooooooo (4 *2-1) total 8
ooooooooo 9

let d= "o".repeat(5)
console.log(d);


let x = "   o \n  ooo";
console.log(x);

const greeting = "Hello ";
const name = "Squirrel";

console.log(greeting.concat(name));

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
