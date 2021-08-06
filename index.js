// getting handlers
const temp = document.getElementById("temp");
const keys = [...document.getElementsByClassName("key")];

// extra variable to keep a check is capsLock is on
let capsIsOn = false;

// adding event listener to listen for keys on the screen
document.addEventListener("keydown", event => {
  for (let i = 0; i < keys.length; i++) {
    if (
      keys[i].id.toLowerCase() === event.key.toLowerCase() ||
      keys[i].id.toLowerCase() === event.code.toLowerCase()
    ) {
      // extra checks for tab key since it has a different behaviour than other keys
      if (event.code === "Tab" || event.key === "Tab") {
        // we need to prevent the default behaviour of tab key
        event.preventDefault();
      }
      // to keep the tab key pressed we will set the capsIsLock variable to true so it is visible that capslock is on
      else if (event.code === "CapsLock" || event.key === "CapsLock") {
        // also prevent default behaviour of the capslock key
        event.preventDefault();
        capsIsOn = !capsIsOn;
      }
      // adding the classname pressed to see the animation on ui
      keys[i].className = `${keys[i].className} pressed`;
      break;
    }
  }
});

// event listener after key is no longer being pressed
document.addEventListener("keyup", event => {
  for (let i = 0; i < keys.length; i++) {
    if (
      keys[i].id === event.key.toLowerCase() ||
      keys[i].id.toLowerCase() === event.code.toLowerCase()
    ) {
      // check if caps lock  is on or not, if it is then we set the variable to false to let the user click it again
      if (event.code === "CapsLock") {
        if (capsIsOn) {
          capsIsOn = false;
        }
      }
      // removving the pressed class from the target to set the key back to normal
      keys[i].className = keys[i].className.replace("pressed", "");
      break;
    }
  }
});
