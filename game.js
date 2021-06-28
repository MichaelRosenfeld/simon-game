var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];


function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);

  $("#" + randomChosenColour).fadeOut(200).fadeIn(200).ready(function() {
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
  });

  return randomNumber;
}

gamePattern.push(randomChosenColour);


$(".btn").click(function() {
var userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);
});

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
});



























//$("#" + randomChosenColour).ready(function() {
  //var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//  audio.play();
//});
