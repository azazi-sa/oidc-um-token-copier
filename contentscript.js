var storage = window.localStorage;
var found = false;
for(var i = 0; i < storage.length; ++i) {
    var key = storage.key(i);
    if(key.includes('oidc.user')){
        try{
            var user = JSON.parse(storage[key]);
            found = true;
        }catch(e){
            console.log('error parsing oidc.user: ', e);      
        }
      chrome.runtime.sendMessage({"user": user});
      break;
    }
  }

  if(found === false){
    chrome.runtime.sendMessage({"error": "not_found"});
  }