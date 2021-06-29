var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

var randomArrayNumber = Math.floor(Math.random() * 10);
var lostMessageArray = ["No one knows why Babou turned gay.",
 "Babou seems gay. I am worried about him.","Babou makes awesome Gay Marines.",
"Void.", "I like my desk.", "Babou has amazing calves though.", "Anybody has ever seen Babou cook a Steak? Sexy af.",
 "Hmm.", "Yep.", "Sometimes I imagine Babou being in the shower."];

var randomMessage = lostMessageArray[randomArrayNumber];


$("button").click(function() {
  $("button").addClass("start-button-pressed");
  setTimeout(function() {
    $("button").removeClass("start-button-pressed");
  });
  setTimeout(function() {
  $("button").hide();
},100);
  if(!started) {
    $("#level-title").text("Level " + level);
    $("#losing-message").text("");
    nextSequence();
    started = true;
}
});

$(".btn").click(function() {

var userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour);

playSound(userChosenColour);
animatePress(userChosenColour);

checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
      if(userClickedPattern.length === gamePattern.length) {
        setTimeout(function() {
          nextSequence();
        },1000);
      }
  } else {
    playSound("wrong");
    $("body").addClass("game-over")
    $("#level-title").text("Get fucked.");

    generateRandomMessage();

    setTimeout(function() {
    $("body").removeClass("game-over")
  },200);

    startOver();
  }

}


function nextSequence(){
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(200).fadeIn(200);
  playSound(randomChosenColour);
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  },100);
}

function playSound(name) {
var audio = new Audio("sounds/" + name + ".mp3");
audio.play();

}

function startOver(){
  level = 0;
  gamePattern = []
  started = false;
  $("button").show();
}

function generateRandomMessage(){
  var randomArrayNumber = Math.floor(Math.random() * 10);
  var lostMessageArray = ["No one knows why Babou turned gay.",
   "Babou seems gay. I am worried about him.","Speck is a useful way of thinking.",
  "Void.", "I like my desk.", "Bro you fucked up, holy fk.", "Ziemlich speckig das Ganze.",
   "Hmm.", "Yep.", "Sometimes I imagine Babou being in the shower."];

  var randomMessage = lostMessageArray[randomArrayNumber];
  $("#losing-message").text(randomMessage);
}
