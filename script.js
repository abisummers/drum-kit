function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);

  //stops the function running when an invalid key is selected
  if (!audio) return;

  //rewinds to the start
  //sound now plays when hit multiple times
  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
}

window.addEventListener("keydown", playSound);
function removeTransition(e) {
  //skip if not a transform
  if (e.propertyName !== "transform") return;

  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("transitionend", removeTransition));
