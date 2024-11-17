async function getQuote() {
  const respones = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  quoteObj = await respones.json();
  let quote = quoteObj.setup + " " + quoteObj.punchline;
  // let quote = "Nothing goes as planned in this accursed world!!";
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
  let shiftToggle = false;
  

  let keyboard = { '0': ')', '1': '!', '2': '@', '3': '#', '4': '$', '5': '%', '6': '^', '7': '&', '8': '*', '9': '(', 'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E', 'f': 'F', 'g': 'G', 'h': 'H', 'i': 'I', 'j': 'J', 'k': 'K', 'l': 'L', 'm': 'M', 'n': 'N', 'o': 'O', 'p': 'P', 'q': 'Q', 'r': 'R', 's': 'S', 't': 'T', 'u': 'U', 'v': 'V', 'w': 'W', 'x': 'X', 'y': 'Y', 'z': 'Z' };

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
     

      let correct = quote.length - mistakes;
      let accuracy = Math.round((correct / quote.length) * 100);

      paragraphTag.innerHTML = `<h2> Accuracy : ${accuracy}% </h2>`;
      setTimeout(() => {
        location.reload();
      },1000 );
    }

  });



  document.getElementById('Shift').addEventListener('click', () => {
    shiftToggle = !shiftToggle;
    let shift = document.getElementById('Shift');
    if (shiftToggle) {
      shift.classList.add("glow");
      for (i in keyboard) {
        document.getElementById(i).innerHTML = keyboard[i];
      }
    } else {
      shift.classList.remove("glow");
      for (i in keyboard) {
        document.getElementById(i).innerHTML = i;
      }
    }

  });
  onload


  const listItems = document.querySelectorAll('li');



  listItems.forEach(listItem => {

    listItem.addEventListener('click', function () {
      if (shiftToggle) {
        typedKey = keyboard[listItem.id];
      } else {
        typedKey = listItem.id;
      }
       
    if(listItem.id =='Shift'){
      typedKey  = listItem.id;
    }
    if(listItem.id == 'Backspace'){
      typedKey  = listItem.id;
    }

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
        if (index > 0) { index = index; }
      } else {
        document.querySelector(`.span${index}`).classList.add("failure");
        mistakes++;
        index++;
      }

      if (index >= quote.length) {
      
        let correct = quote.length - mistakes;
        let accuracy = Math.round((correct / quote.length) * 100);

        paragraphTag.innerHTML = `<h2> Accuracy : ${accuracy}% </h2>`;
        setTimeout(() => {
          location.reload();
        },4000 );
      }


    });

  });







}
getQuote();
