function getRandomGreeting() {
  var greetings = [
    "Redbull gives you wings...",
    "As seen on TV!",
    "cold as ice!",
    "made in the US!",
    "*insert cool explosion*",
    "Powered by 128 Gigs of RAM!",
    "Powered by 16MB of RAM!",
    "w h a t",
    "thx stackoverflow!",
    "Woo! /g/",
    "youtube.com/watch?v=dQw4w9WgXcQ",
    "Please stop posting furry images.",
    "bottem text",
    "No fun allowed",
    "i wanted free vbucks :(",
    "Avocados \ud83e\udd51 from Mexico \ud83c\uddf2\ud83c\uddfd",
    "reload for another message",
    "He stomped on his fruit loops and thus became a cereal killer..",
    "I spent too much time making these",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
