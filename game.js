var buttonColours= ["red", "blue", "green", "yellow" ];
var gamePattern=[];
var userClickedPattern=[];
var level=0;

function playSound(name){
  var sound= new Audio (name + ".mp3");
  sound.play();
}
function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  },100);
}

//var indd=0;
$(".container .btn").click(function(){
  if(!indi)so();
  else if(tsg){so();}
  else{
  var userChosenColour =this.id;
  userClickedPattern.push(userChosenColour);
  animatePress(this.id);
  playSound(this.id);

  ca(userClickedPattern.length-1);
  //indd++;
}
});
function so(){

  var snd=new Audio ("wrong.mp3");
  snd.play();
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
  $("#level-title").text("Game Over, Press the Play button to Restart");
  indi=0;
  level=0;
  //indd=0;
  tsg=0;

  gamePattern.length=0;
  userClickedPattern.length=0;
}

var tsg=0;

function nextSequence(){
  tsg=0;
  level++;
  $("h1").text("Level " + level);
  var randomNumber= Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}
function ca(ind){

  if(userClickedPattern[ind]!=gamePattern[ind]){
    //console.log(userClickedPattern);
    //console.log(gamePattern);

    so();

  }
  else if(userClickedPattern.length===gamePattern.length){
    userClickedPattern.length=0;
    tsg=1;
    setTimeout(function(){
      //if(tsg===0)alert("gotcha");<--------------------BUG FIX------->
      //indd=0;
      if(tsg!=0)nextSequence();

    },1000);
  }
}



var indi=0;
$("#playbutton").click(function(){
  $("#playbutton").addClass("pressed");
  setTimeout(function(){
    $("#playbutton").removeClass("pressed");
  },100);
  if(indi===0){indi++;nextSequence();}
});
