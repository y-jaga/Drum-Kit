// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got click!!");
// }

// document.querySelector("button").addEventListener("click", function () {
//   alert("told you it also work!!");
// });

// var audio = new Audio("sounds/crash.mp3");
// audio.play();

//DETECTING BUTTON PRESS
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var allDrumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < numberOfDrumButtons; i++) {
  allDrumButtons[i].addEventListener("click", function () {
    var buttonText = this.innerHTML;
    makeSound(buttonText);
    buttonAnimation(buttonText);
  });
}

//DETECTING KEY PRESS
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonText);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
