var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];


function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(200).fadeIn(200).ready(function() {
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
});

$(".btn").click(function() {
var userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);
});

console.log(userClickedPattern);
























//$("#" + randomChosenColour).ready(function() {
  //var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//  audio.play();
//});
