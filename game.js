var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColor = buttonColours[nextSequence()];
var level = 0;

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  level++;

  $("#" + randomChosenColor).fadeOut(200).fadeIn(200).ready(function() {
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
  });

  return randomNumber;
}

gamePattern.push(randomChosenColor);


$(".btn").click(function() {
var userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);
});

checkAnswer(userClickedPattern[level]);

function playSound(name) {
  $("#" + name).fadeOut(200).fadeIn(200).ready(function() {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  });
}

// Animation for User Clicks

function animatePress(currentColor) {
  setTimeout(function() {
    $("." + currentColor).addClass("pressed").removeClass("pressed");
},100);
}

// Game Start

$(document).keypress(function() {
  nextSequence();
  $("h1").text("Level " + level);
});

// Checking correct Sequence

function checkAnswer(currentLevel) {
  if(currentLevel === gamePattern){
    console.log("success");
  } else {
    console.log("wrong");
  }
}



























//$("#" + randomChosenColour).ready(function() {
  //var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//  audio.play();
//});
