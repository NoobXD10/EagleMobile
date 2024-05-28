// Get the toggle button and the element to be made fullscreen
const toggleButton = document.getElementById('toggle-fullscreen');
const fullscreenElement = document.getElementById('fullscreen-element');

// Add event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle fullscreen mode
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    fullscreenElement.requestFullscreen();
  }
});
