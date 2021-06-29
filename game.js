var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(200).fadeIn(200);

  playSound(randomChosenColour);
  level++;
}

$(".btn").click(function() {
var userChosenColour = $(this).attr("id");

userClickedPattern.push(userChosenColour);

playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer(userClickedPattern);
});






// Playing Sound

function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}


// Animation for User Clicks

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
      $("#" + currentColour).removeClass("pressed");
  },100);
}


// Game Start

$(document).keypress(function() {
  nextSequence();
  $("h1").text("Level " + level);
});



// Checking correct Sequence

function checkAnswer(currentLevel) {
  if(currentLevel[level - 1] === gamePattern[level - 1]){
    console.log("success");
  } else {
    console.log("wrong");
  }
}

console.log(userClickedPattern);



























//$("#" + randomChosenColour).ready(function() {
  //var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//  audio.play();
//});
