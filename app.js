if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./serviceWorker.js',{scope:'./'})
  .then((reg) => {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch((error) => {
    console.log('Registration failed with ' + error);
  });
}
let deferredPrompt;
window.addEventListener('beforeinstallprompt',(e)=>{
    e.preventDefault();
    deferredPrompt = e;
});

let btn = document.getElementsByClassName('download-btn')[0];
btn.addEventListener('click',(e)=>{
    console.log("hello");
 deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      alert('User accepted the install prompt');
    } else {
      alert('User dismissed the install prompt');
    }
  })    
});

