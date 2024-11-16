async function getQuote() {
  // const respones = await fetch(
  //   "https://official-joke-api.appspot.com/random_joke"
  // );
  // quoteObj = await respones.json();
  // let quote = quoteObj.setup + " " + quoteObj.punchline;
  let quote = "Nothing goes as planned in this accursed world!! This quote is said by Madara uchiha also known as the ghost of uchiha";
  if (quote.length > 2000) {
    getQuote();
  }
  let paragraphTag = document.querySelector("p");
  let displayText = "";
  let inx = 0;
  // this code add the span tag between letters
  for (let i of quote) {
    displayText += `<span class ='span${inx}'>${i}</span>`;
    inx++;
  }
  //inserting text to the web page
  paragraphTag.innerHTML = displayText;
  let index = 0;
  let typedKey;
  let mistakes = 0;
  document.addEventListener("keydown", (event) => {
    typedKey = event.key;

    if (typedKey === quote[index]) {
      document.querySelector(`.span${index}`).classList.add("success");
      index++;
      //for coorecting mistakenly typed words
    } else if (typedKey == "Backspace") {
      if (index > 0) {
        index--;
        if (mistakes > 0) {
          mistakes--;
        }
      }
      document.querySelector(`.span${index}`).classList.remove("success");
      document.querySelector(`.span${index}`).classList.remove("failure");
    } else if (
      typedKey == "Shift" ||
      typedKey == "Alt" ||
      typedKey == "Control" ||
      typedKey == "AltGraph" ||
      typedKey == "Tab" ||
      typedKey == "ArrowUp" ||
      typedKey == "ArrowDown" ||
      typedKey == "ArrowLeft" ||
      typedKey == "ArrowRight" ||
      typedKey == "CapsLock" ||
      typedKey == "NumLock" ||
      typedKey == "PageUp" ||
      typedKey == "PageDown"
    ) {
      if (index > 0) index = index;
    } else {
      document.querySelector(`.span${index}`).classList.add("failure");
      mistakes++;
      index++;
    }

    if (index >= quote.length) {
      // if (
      //   confirm(`You made  mistakes ${mistakes} times.Press OK to try again`)
      // ) {
      //   location.reload();
      // }

      let correct = quote.length - mistakes;
      let accuracy = Math.round((correct / quote.length) * 100);

      paragraphTag.innerHTML = `<h2> Accuracy : ${accuracy}% </h2>`;
    }
  });
}
getQuote();
