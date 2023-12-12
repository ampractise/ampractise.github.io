//// handling click event
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let btnPressed = this.innerHTML;
    makeSound(btnPressed);
    buttonAnimation(btnPressed);
  });
}

///// hndling keypress event
document.addEventListener("keypress", function (event) {
  let btnPressed = event.key;
  makeSound(btnPressed);
  buttonAnimation(btnPressed);
});

//// calling sound file
function playAudio(soundSrc) {
  var audio = new Audio("sounds/" + soundSrc);
  audio.play();
}

//// calling playaudio function on click or keypress event
function makeSound(btnPressed) {
  switch (btnPressed) {
    case "w":
      playAudio("tom-1.mp3");
      break;
    case "a":
      playAudio("tom-2.mp3");
      break;
    case "s":
      playAudio("tom-3.mp3");
      break;
    case "d":
      playAudio("tom-4.mp3");
      break;
    case "j":
      playAudio("snare.mp3");
      break;
    case "k":
      playAudio("crash.mp3");
      break;
    case "l":
      playAudio("kick-bass.mp3");
      break;
    default:
      console.log(btnPressed);
      break;
  }
}

function buttonAnimation(cuurentKey){

    let activeBtn = document.querySelector(`.${cuurentKey}`);
    activeBtn.classList.add("pressed");
    
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },70);
    
}