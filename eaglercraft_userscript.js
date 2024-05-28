function loadKeyboard() {
  var keyboardFrame = document.createElement('iframe');
  keyboardFrame.src = 'keyboard.html';
  keyboardFrame.frameBorder = '0';
  keyboardFrame.width = '100%';
  keyboardFrame.height = '50px';
  document.body.appendChild(keyboardFrame);
}
loadKeyboard();
