// Function to change the GIF based on the button hovered
function changeGif(button) {
    const gif = document.getElementById("gif");
    
    if (button === 'yes') {
      gif.src = "gif02.gif"; // Replace with your actual GIF URL for "Yes"
    } else if (button === 'no') {
      gif.src = "gif03.gif"; // Replace with your actual GIF URL for "No"
    }
  }
  
  // Function to reset the GIF back to the default one
  function resetGif() {
    const gif = document.getElementById("gif");
    gif.src = "gif01.gif"; // Replace with your actual GIF URL for default
  }
  
  // Function to handle the button click and redirect to the new page
  function redirect(answer) {
    if (answer === 'yes') {
      window.location.href = "https://example.com/yes"; // Replace with your desired URL
    } else if (answer === 'no') {
      window.location.href = "https://example.com/no"; // Replace with your desired URL
    }
  }
  