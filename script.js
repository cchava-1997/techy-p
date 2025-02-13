// Function to change the GIF based on the button hovered or tapped
function changeGif(button) {
    const gif = document.getElementById("gif");
    
    if (button === 'yes') {
      gif.src = "Images/Hover Gifs/gifyes.gif"; // Change to Yes GIF
    } else if (button === 'no') {
      gif.src = "Images/Hover Gifs/gifno.gif"; // Change to No GIF
    }
  }
  
  // Function to reset the GIF back to default when not hovering or tapping
  function resetGif() {
    const gif = document.getElementById("gif");
    gif.src = "Images/Hover Gifs/gif01.gif"; // Reset to Default GIF
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
  
    // After 2 seconds, hide the "No" button, change the GIF, and show the message
    setTimeout(() => {
      noButton.style.display = 'none'; // Hide the "No" button
      document.getElementById('gif').src = "Images/Hover Gifs/gif01.gif"; // Reset the main GIF to gif01.gif
      const messageDiv = document.getElementById('no-message');
      messageDiv.innerHTML = "You think you have an option, you don't. You are stuck with me. You are gonna be my lobster with one kidney."; // Show message
      messageDiv.style.display = 'block'; // Make the message visible

      const secondMessage = document.createElement('p');
      secondMessage.innerHTML = "<strong>Happy Organ Donor Day!!</strong>"; // Bold text
      secondMessage.style.fontSize = "1.5rem"; // Optional: Adjust size for the new line
      messageDiv.appendChild(secondMessage); // Append the second line message

      // Add another GIF below the second message
    const newGif = document.createElement('img');
    newGif.src = "Images/No Gifs/laughing lobster.gif"; // Path to your new GIF (replace this with the correct GIF)
    newGif.alt = "New GIF";
    newGif.style.marginTop = "20px"; // Add margin for spacing
    messageDiv.appendChild(newGif); // Append the new GIF below the message

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
  