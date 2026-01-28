let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property) {
	let count = contacts.length;
	 
	for (var i = 0; i < count; i++) {
		let person = contacts[i];
		if (person.firstName == name && person.property !== undefined) {
			return person.property;
		} else if (person.property == undefined) {
			return "No such property";
		} else {
			return "No such contact";
		}
	} 
}

console.log(lookUpProfile("Harry", "likes"));


function lookUpProfile(name, property) {
  for (let i = 0; i < contacts.length; i++) {
    let person = contacts[i];

    if (person.firstName === name) {
      if (person[property] !== undefined) {
        return person[property];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}









return "No such contact";


function lookUpProfile(name, property) {
	let count = contacts.length;
	for (var i = 0; i < count; i++) {
		let person = contacts[i];
		if (person.firstName !== name) {
			return "No such contact";
		} else if (person.property == undefined) {
			return "No such property";
		} else {
			return person.property
		}
	} 
}
function lookUpProfile(name, property) {
	if (contacts.firstName !== name) {
		return "No such contact";
	} else if {
		if (contacts.property == undefined) {
			return "No such property";
		} else {
			return contacts.property; 
		}
	}
}

console.log(lookUpProfile(Harry, likes));

function lookUpProfile(name, property) {
	let count = contacts.length;
	for (var i = 0; i < count; i++) {
		if (contacts[i].firstName == name) {
			return contacts[i].lastName
		}
	} 
  return "No such contact";
}

console.log(lookUpProfile("Harry", "likes"));