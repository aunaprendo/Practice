
document.addEventListener("DOMContentLoaded", () => {
  const chat = document.getElementById("trivia");
  if (!chat) return;

  function say(message) {
    const p = document.createElement("p");
    p.textContent = message;
    chat.appendChild(p);
  }

	say("Hello! I'm your coding fun fact guide!");
	
	let botName = "Squirrel";
	let botLocation = "forest lane";
	let favoriteLanguage = "Squirrelenese";
	
	say("My name is " + botName + " and I live on " + botLocation + ".");
	say("My favorite programming language is " + favoriteLanguage + ".");
	
	let codingFact = 
		favoriteLanguage + " has lots of sounds but also includes specific tail movements.";
	say(codingFact);
	
	codingFact = 
		favoriteLanguage + " can sometimes sound like the breaking of nuts.";
	say(codingFact);
	
	codingFact = 
		favoriteLanguage + "  includes squaking, chirping and squeeks.";
	say(codingFact);
	
	say(
		"It was fun sharing these facts with you. Goodbye! - "+ 
		botName + 
		" from " + 
		botLocation + 
		"."
	);


});
