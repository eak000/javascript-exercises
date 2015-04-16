var button = document.getElementById("insultBtn");
button.onclick = getInsult;

function getInsult() {
  var randomBodyParts = ["hair", "nose", "breath", "ear", "butt", "feet", "armpit", "face", "finger", "sweat", "neck", "bellybutton", "sock"];
  var randomAdjectives = ["stinky", "sweaty", "rancid", "ratty", "rotten", "putrid", "moist", "moldy", "day-old","mushy", "musty", "poopy", "ancient", "pee-soaked"];
  var randomWords = ["cat", "bologna", "cheeseburger", "cheese", "orangutan", "rat", "peas", "sneakers", "mold", "toenails", "dirt", "pumpkin", "farts", "baby pig", "onions", "poop", "dog", "sweatpants", "underwear", "diapers", "socks", "mushrooms"];

  // picks a random word from lists above
  var bodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
  var adjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
  var word = randomWords[Math.floor(Math.random() * randomWords.length)];

  var insult = "Your " + bodyPart + " smells like " + adjective + " " + word + ".";
  // var node = document.createTextNode(insult);


  document.getElementById("insultSpot").innerHTML = insult;

};


   

  

