// Creates a event that listen to mouse clicks

var numberOfDrumsButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumsButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detects to keyboard pressing

document.addEventListener("keydown", function (event) {
  var allowedKeys = ["w", "a", "s", "d", "j", "k", "l"];
  var key = event.key.toLowerCase(); // Transforma a tecla pressionada em minúsculas para garantir a comparação correta.

  if (allowedKeys.includes(key)) {
    makeSound(key);
    buttonAnimation(event.key);

  } else {
    alert("Pressione apenas os botões indicados para tocar seu som.");
  }
});
//Plays a different sound for each button

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var kickbass = new Audio("./sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "j":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

//   Animation when the buttons are clicked

function buttonAnimation(currentKey){


    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");

    }, 100);

}
