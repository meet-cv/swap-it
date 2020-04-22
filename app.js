if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./serviceWorker.js',{scope:'./'})
  .then((reg) => {
    //console.log('succeeded. Scope is ' + reg.scope);
  }).catch((error) => {
    //console.log('failed with ' + error);
  });
}
let deferredPrompt;
window.addEventListener('beforeinstallprompt',(e)=>{
    e.preventDefault();
    deferredPrompt = e;
});

let btn = document.getElementsByClassName('download-btn')[0];
btn.addEventListener('click',(e)=>{
 deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      alert('App will be installed in no time. See the Progress in notification area.');
    } 
  })    
});

window.addEventListener('appinstalled', (evt) => {
  alert("App installed");
});

