if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./serviceWorker.js',{scope:'./'})
  .then((reg) => {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch((error) => {
    console.log('Registration failed with ' + error);
  });
}

