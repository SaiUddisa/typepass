let key;
document.addEventListener("keydown", (event) => {
  key = event.key;
  if (key === " ") {
    const keyPressed = document.querySelector(`.space`);
    keyPressed.classList.add("glow");
    setTimeout(() => {
      keyPressed.classList.remove("glow");
    }, 300);
  }else if(key == 'Shift'){
    const keyPressed = document.querySelector(`.Shift`);
    keyPressed.classList.add("glow");
    setTimeout(() => {
      keyPressed.classList.remove("glow");
    }, 300);
  }else if(key == 'Backspace'){
    const keyPressed = document.querySelector(`.Backspace`);
    keyPressed.classList.add("glow");
    setTimeout(() => {
      keyPressed.classList.remove("glow");
    }, 300);
  }
  const keyPressed = document.querySelector(`.${key}`);
  keyPressed.classList.add("glow");
  setTimeout(() => {
    keyPressed.classList.remove("glow");
  }, 300);
});

function keyglow(key){
  const keyPressed = document.getElementById(key);
  keyPressed.classList.add("glow");
  setTimeout(() => {
    keyPressed.classList.remove("glow");
  }, 300);

}