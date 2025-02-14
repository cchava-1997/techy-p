// Function to change the GIF based on the button hovered or tapped
function changeGif(button) {
  const gif = document.getElementById("gif");

  if (button === 'yes') {
    gif.src = "Images/Hover Gifs/gifyes01.gif"; // Change to Yes GIF
  } else if (button === 'no') {
    gif.src = "Images/Hover Gifs/gifno01.gif"; // Change to No GIF
  }
}

// Function to reset the GIF back to default when not hovering or tapping
function resetGif() {
  const gif = document.getElementById("gif");
  gif.src = "Images/Hover Gifs/gif0101.gif"; // Reset to Default GIF
}

// Handle the "No" button click
function handleNoClick() {
  const noButton = document.getElementById('no-button');
  const loadingGif = document.createElement('img');
  loadingGif.id = 'loading';
  loadingGif.src = "Images/No Gifs/loading.gif"; // Path to your loading GIF
  noButton.appendChild(loadingGif); // Add the loading GIF inside the "No" button
  loadingGif.style.visibility = 'visible'; // Make the loading GIF visible

  // Change the main GIF to gifno.gif
  changeGif('no');

  // After 2 seconds, hide the "No" button, change the GIF, show the message, and hide the "Yes" button
  setTimeout(() => {
    noButton.style.display = 'none'; // Hide the "No" button
    const yesButtonold = document.getElementById('yes-button'); // Get the "Yes" button
    if (yesButtonold) {
      yesButtonold.style.display = 'none'; // Hide the "Yes" button
    }

    document.getElementById('gif').src = "Images/Hover Gifs/gifyes01.gif"; // Reset the main GIF to gif01.gif

    // Show the message below the GIF
    const messageDiv = document.getElementById('no-message');
    messageDiv.innerHTML = "HeHe!! I was just kidding no is not an option. You are stuck with me. You are gonna be my lobster with one kidney forever."; // Show message
    messageDiv.style.display = 'block'; // Make the message visible

    // Add the second message
    const secondMessage = document.createElement('p');
    secondMessage.innerHTML = "<strong>Happy Organ Donor Day!!</strong>"; // Bold text
    secondMessage.style.fontSize = "1.5rem"; // Optional: Adjust size for the new line
    messageDiv.appendChild(secondMessage); // Append the second line message

    // Add another GIF below the second message
    const newGif = document.createElement('img');
    newGif.src = "Images/No Gifs/kidney.gif"; // Path to your new GIF
    newGif.alt = "New GIF";
    newGif.style.marginTop = "20px"; // Add margin for spacing
    messageDiv.appendChild(newGif); // Append the new GIF below the message

    // Add the message "Here you can click on YES now"
    const additionalMessage = document.createElement('p');
    additionalMessage.innerHTML = "Here you can click on YES now";
    additionalMessage.style.fontSize = "1.2rem";
    messageDiv.appendChild(additionalMessage); // Append this message to the div

    // Now, show the YES button below the message
    const yesButton = document.createElement('button');
    yesButton.innerHTML = "Yes";
    yesButton.id = 'yes-button'; // Add an ID to the YES button
    yesButton.classList.add('yes-button');
    yesButton.onclick = () => { window.location.href = "yes.html"; }; // Redirect to yes.html
    messageDiv.appendChild(yesButton); // Add the YES button below the message

  }, 2000); // 2 seconds delay
}

// Function to handle the button click and navigate to the new page
function redirect(answer) {
  if (answer === 'yes') {
    window.location.href = "yes.html"; // Link to the "Yes" page in your app
  } else if (answer === 'no') {
    handleNoClick(); // Call the handleNoClick function
  }
}


// Line 1: "Oh yayyyy!!!"
const typingText = document.getElementById('typing-text');
const cursor = document.getElementById('cursor');
const happyText = "Happy";  // The text that stays always visible
const organDonorText = " Organ Donor";  // The second text to type and backspace
const finalText = " Valentine's Day Love 💖";  // Final text to type

let i = 0;
let isBackspacing = false;
let typingSpeed = 100;  // Speed of typing
let backspacingSpeed = 50;  // Speed of backspacing
let typingDone = false;  // To check if typing is finished
let isWaitingForMessage = false;  // To manage the waiting period

// Step 1: Type "Happy"
function typeHappy() {
  if (i < happyText.length) {
    typingText.innerHTML = happyText.substring(0, i);
    i++;
    setTimeout(typeHappy, typingSpeed);
  } else {
    // Once "Happy" is typed, proceed to type "Organ Donor"
    setTimeout(typeOrganDonor, 500);
  }
}

// Step 2: Type "Organ Donor"
function typeOrganDonor() {
  typingText.innerHTML = happyText + organDonorText.substring(0, i - happyText.length);
  i++;
  if (i > happyText.length + organDonorText.length) {
    // Once "Organ Donor" is typed, show "Oops!!" and then "Let me try again..."
    setTimeout(showOopsMessage, 500);
  } else {
    setTimeout(typeOrganDonor, typingSpeed);
  }
}

// Step 3: Show "Oops!!" and then "Let me try again..."
function showOopsMessage() {
  // Change "Oh yayyyy!!!" to "Oops!!"
  document.querySelector('h1').innerHTML = "Oops!!";
  cursor.style.display = 'inline-block';  // Ensure the cursor is still blinking
  setTimeout(() => {
    // Change "Oops!!" to "Let me try again..."
    document.querySelector('h1').innerHTML = "Let me try again...";
    setTimeout(() => {
      // Once "Let me try again..." is shown, start the backspacing and continue typing
      startBackspacing();
    }, 1000);  // 1-second delay before starting backspacing
  }, 1000);  // 1-second delay before changing to "Let me try again..."
}

// Step 4: Backspace "Organ Donor"
function startBackspacing() {
  i = happyText.length + organDonorText.length;  // Reset i to start backspacing from the end of Organ Donor
  isBackspacing = true;

  // Begin backspacing "Organ Donor"
  backspaceOrganDonor();
}

// Step 5: Backspace "Organ Donor"
function backspaceOrganDonor() {
  if (isBackspacing) {
    typingText.innerHTML = happyText + organDonorText.substring(0, i - happyText.length);
    i--;
    if (i === happyText.length) {
      // After backspacing is complete, start typing "Valentine's Day Love"
      setTimeout(typeFinalText, 500);
      isBackspacing = false;
      cursor.style.display = 'none';  // Hide the cursor after typing finishes
      setTimeout(showGif, 2000);  // Show the GIF after 500ms
    } else {
      setTimeout(backspaceOrganDonor, backspacingSpeed);
    }
  }
}

// Step 6: Type "Valentine's Day Love 💖"
function typeFinalText() {
  let j = 0;
  function type() {
    typingText.innerHTML = happyText + finalText.substring(0, j);
    j++;
    if (j > finalText.length) {
      // Once the final text is typed, show the GIF
      setTimeout(showGif, 1200); // Ensure GIF shows after typing finishes
      return;
    }
    setTimeout(type, typingSpeed);
  }
  type();
}

// Step 7: Show the GIF after typing is complete
function showGif() {
  const gifContainer = document.getElementById('gif-container');
  const gif = document.getElementById('gif-yes');
  gifContainer.style.display = 'block';  // Make the GIF container visible
  gif.style.display = 'inline-block';  // Show the GIF
}

// Start the typing effect when the page loads
window.onload = () => {
  typeHappy();  // Start with typing "Happy"
};
