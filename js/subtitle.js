function getRandomGreeting() {
  var greetings = [
    "How many sides does a circle have?",
    "You can read btw",
    "Made you look!",
    "Redbull gives you wings...",
    "As seen on TV!",
    "cold as ice!",
    "made in the US!",
    "*insert cool explosion*",
    "Powered by 128 Gigs of RAM!",
    "Powered by 16MB of RAM!",
    "w h a t",
    "what the dog doin?",
    "Shoutout to 4chan!",
    "thx stackoverflow!",
    "Woo! /g/",
    "youtube.com/watch?v=dQw4w9WgXcQ",
    "Please stop posting furry images.",
    "Is this the United Airlines costumer service center?",
    "bottem text",
    "No fun allowed",
    "i wanted free vbucks :(",
    "Avocados \ud83e\udd51 from Mexico \ud83c\uddf2\ud83c\uddfd",
    "reload for another message",
    "He stomped on his fruit loops and thus became a cereal killer.",
    "And just to think I knew him before he was famous",
    "Trust me, I did not copy Minecraft with this",
    "Toss the Turtle is pretty fun",
    "Mission failed, we will get them next time",
    "I spent too much time making these",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
