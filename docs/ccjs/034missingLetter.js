function fearNotLetter(abcs) {
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	if (abcs.toLowerCase()===alphabet) {
		return undefined;
	} else {
		alphabet= alphabet.split("");
		for (let char of alphabet) {
			if (!abcs.toLowerCase().includes(char)) {
				return char;
			}
		}
	}
}

console.log(fearNotLetter("bcdf"));

function fearNotLetter(abcs) {
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	
	let searchLetters = abcs.toLowerCase().split("");
	let searchEnd = searchLetters.length - 1;
	
	let letters = alphabet.slice(searchLetters[0], searchLetters[searchEnd]);
	if (abcs===letters) {
		return undefined;
	} else {
		letters= letters.split("");
		for (let char of letters) {
			if (!abcs.toLowerCase().includes(char)) {
				return char;
			}
		}
	}
}

console.log(fearNotLetter("bcdf"));

function fearNotLetter(abcs) {
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let alphas = alphabet.split("")
	let letters = abcs.split("");
	let start = letters[0];
	let length = letters.length;
	let end = letters[length-1];
	
	for (let char of alphas) {
		if (char === start.toLowerCase()) {
			let first = alphas.indexOf(char);
		} &&
		if (char === end.toLowerCase()) {
			let last = alphas.indexOf(char);
		}
		let segment = alphabet.slice(first, last);
		if (abcs.toLowerCase()===segment) {
			return undefined;
		} else {
			segment = segment.split("");
			for (let letter of segment) {
				if (!abcs.toLowerCase().includes(letter)) {
				return letter;
			}
		}
	}
}

console.log(fearNotLetter("bcdf"));



function fearNotLetter(abcs) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  abcs = abcs.toLowerCase();

  let first = alphabet.indexOf(abcs[0]);
  let last = alphabet.indexOf(abcs[abcs.length - 1]);

  let segment = alphabet.slice(first, last + 1);

  for (let letter of segment) {
    if (!abcs.includes(letter)) {
      return letter;
    }
  }

  return undefined;
}

console.log(fearNotLetter("bcdf")); // e


