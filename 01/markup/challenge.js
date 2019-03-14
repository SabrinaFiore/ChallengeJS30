window.addEventListener('keydown', function(e) {
   const audio = document.querySelector('audio[data-key="${e.keyCOde}"]');
   if(!audio) return;
   audio.play();
}); 