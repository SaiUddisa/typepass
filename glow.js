let key;
document.addEventListener("keydown", (event) => {
  key = event.key;

  if (key === " ") {
    const keyPressed = document.querySelector(`.space`);
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
