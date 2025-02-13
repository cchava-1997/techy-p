let heartCount = 0;

function respondToLove() {
  const responseDiv = document.getElementById("response");
  const heartCountDiv = document.getElementById("heart-count");

  heartCount++;

  if (heartCount <= 5) {
    responseDiv.innerHTML = "Aww, I love you too! 😘";
  } else if (heartCount <= 10) {
    responseDiv.innerHTML = "You’re the best! ❤️ Keep going!";
  } else {
    responseDiv.innerHTML = "I can feel the love! 💖💖";
  }

  heartCountDiv.innerHTML = `You've clicked the heart ${heartCount} times!`;
}
