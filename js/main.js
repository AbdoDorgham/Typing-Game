window.addEventListener('load' , init);

const seconds = document.getElementById('seconds');
const  select = document.getElementById('select');
const currentWord = document.getElementById('current-word');
const timeDisplay = document.getElementById('time') ;
const wordInput = document.getElementById('word-input');
const scoreDisplay = document.getElementById('score');
const message = document.getElementById('message');

// Available Levels 
const levels = {
  easy : 15 ,
  medium : 13 ,
  hard : 10
};

// To Get Level 
function getLevel(){
  var value = Number(select.options[select.selectedIndex].value);
  let currentlevel ;
  if(value == 1 ){
    currentlevel = levels.easy;
  }
  else if(value == 2){
    currentlevel = levels.medium;
  }
  else{
    currentlevel = levels.hard;
  }
  return currentlevel ;
}

seconds.innerHTML = getLevel() ;
timeDisplay.innerHTML = getLevel();
let time = getLevel();
var score = 0 ;
localStorage.setItem("score",score);
scoreDisplay.innerHTML = 0 ;

// To Change Level
function changelevel(){
  seconds.innerHTML = getLevel() ;
  time = getLevel() + 1;
  score = 0 
  localStorage.setItem("score",score);
  scoreDisplay.innerHTML = 0 ;
  wordInput.focus();


}
select.onchange = changelevel ;

// Array Of Words 
const words = [

  'excellent',
  'perfect',
  'fine',
  'wonderful',
  'nice',
  'lovely',
  'beautiful',
  'sweet',
  'sugary',
  'masterful',
  'clever',
  'amazing',
  'soft',
  'good',
  'pretty',
  'well',
  'cute',
  'awesome',
  'very good',
  'magical',
  'kind',
  'funny',
  'extraordinary',
  'enjoyable',
  'special'


];

// Get Word from Array 
function showWord(){
 
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];

}

function init(){
  showWord(words);
  wordInput.addEventListener('input',startMatch);
  setInterval(countdown,1000);

}

//  Match currentWord VS wordInput 
function startMatch(){
 
  if(wordInput.value == currentWord.innerHTML){
    
    showWord(words);
    wordInput.value = '';
    score++ ;
    message.innerHTML = 'Correct!!!';

  } else{
    message.innerHTML = '';
  }
  localStorage.setItem("score",score);
  scoreDisplay.innerHTML = score ;


}


// Countdown timer 
function countdown(){
  if(time > 0 ){
    time--
  }
  else if (time == 0){
    // Game is Over 
    window.location.replace("abdo.html");
    }
    timeDisplay.innerHTML = time ;
}