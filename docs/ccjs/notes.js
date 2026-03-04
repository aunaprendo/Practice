









stringTester.innerHTML = "<span class="highlight"></span>";

When you click the testButton button, if the regex pattern matches the test string, the matched text should be highlighted. To highlight the matches, replace each match with the same text surrounded by a span element with the class of highlight. Note that the CSS for that has been already added for you.

In case of multiple matches, each matched text should be separated from the next one by a comma and a space.



stringToTest.innerHTML = `<span class="highlight">${comparison}</span>`;
	• const pattern = "freecodecamp";
const str = "freecodecamp is the best we love freecodecamp";
const matched = str.matchAll(pattern);
const replaced = str.replaceAll(pattern, "freeCodeCamp");
console.log(matched);
console.log(replaced);
