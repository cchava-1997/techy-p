// Function to change the GIF based on the button hovered
function changeGif(button) {
    const gif = document.getElementById("gif");
    
    if (button === 'yes') {
      gif.src = "Images/Hover Gifs/gifyes.gif"; // Change to Yes GIF
    } else if (button === 'no') {
      gif.src = "Images/Hover Gifs/gifno.gif"; // Change to No GIF
    }
  }
  
  // Function to reset the GIF back to default when not hovering
  function resetGif() {
    const gif = document.getElementById("gif");
    gif.src = "Images/Hover Gifs/gif01.gif"; // Reset to Default GIF
  }
  
  // Function to handle the button click and redirect to the new page
  function redirect(answer) {
    if (answer === 'yes') {
      window.location.href = "https://example.com/yes"; // Replace with your URL
    } else if (answer === 'no') {
      window.location.href = "https://example.com/no"; // Replace with your URL
    }
  }
  