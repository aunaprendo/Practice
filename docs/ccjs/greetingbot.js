const chat = document.getElementById("greeting");

function say(message) {
  const p = document.createElement("p");
  p.textContent = message;
  chat.appendChild(p);
}

say("Hi there!");
say("I am excited to talk to you.");

let bot;
bot = "teacherBot";

let botLocation = "the universe";

say("Allow me to introduce myself.");

const botIntroduction = "My name is " + bot + ".";
say(botIntroduction);

const botLocationSentence = "I live in " + botLocation + ".";
say(botLocationSentence);

bot = "professorBot";

const nicknameIntroduction = "My nickname is " + bot + ".";
say(nicknameIntroduction);

bot = "awesomeTeacherBot";

const newNicknameGreeting =
  "I love my nickname but I wish people would call me " + bot + ".";
say(newNicknameGreeting);

const favoriteSubject = "Computer Science";

const favoriteSubjectSentence =
  "My favorite subject is " + favoriteSubject + ".";
say(favoriteSubjectSentence);

say("Well, it was nice to talk to you. Have a nice day!");