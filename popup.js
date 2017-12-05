function jwtMessage(message) {
  var jwt_div = document.getElementById('jwt');
  var error_div = document.getElementById('error');
  if(message.error){
    hide(jwt_div);
    show(error_div);
    return;
  }
  hide(error_div);
  show(jwt_div);
  writeToClipboard(message.user.access_token);
}

function writeToClipboard(value) {
  var input = document.createElement('textarea');
  document.body.appendChild(input);
  input.value = value;
  input.focus();
  input.select();
  document.execCommand('Copy');
  input.remove();
}
const hide = (element) => {
  element.style.display='none';
}

const show = (element) => {
  element.style.display='';
}

chrome.runtime.onMessage.addListener(jwtMessage);
chrome.tabs.executeScript({
  file: 'contentscript.js',
  runAt: "document_idle"
});

