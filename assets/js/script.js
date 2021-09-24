//Universal Variables


//TODO:
//Setup scoreboard
//Record timeleft


var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var currentQuestionindex = 0;
var listEl = document.getElementById("question");
var li1 = document.getElementById("li1");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");
var li4 = document.getElementById("li4");
var entry = document.getElementById("entry");
var currentQuestion;
var timeleft = 90;
var score;
var name;
var timeInterval;

var questions = [
  {
    questionText: "Who is the protagonist of Konosuba?",
    choices: ["Naruto Uzumaki", "Monkey D. Luffy", "Kazuma Satou", "Subaru Natsuki"],
    correctAnswer: "Kazuma Satou"
  },
  {
    questionText: "In the TV show Overlord, how many of the Pleiades appeared on screen?",
    choices: ["5", "6", "7", "8"],
    correctAnswer: "6"
  },
  {
    questionText: "What vehicle from the TV series that bears the same name, is the Black Lagoon?",
    choices: ["Car", "Truck", "Boat", "Plane"],
    correctAnswer: "Boat"
  },
  {
    questionText: "The TV show No Game No Life features a catchphrase with a dark history. What is that phrase?",
    choices: ["Excelsior", "Aschente", "Nirvana", "Vici"],
    correctAnswer: "Aschente"
  },
  {
    questionText: "The TV show Toradora gets its name from what two animals?",
    choices: ["Dog/Cat", "Lizard/Spider", "Fish/Bird", "Tiger/Dragon"],
    correctAnswer: "Tiger/Dragon"
  },
]



//Begin the Quiz and countdown

var begin = window.confirm("Are you ready to begin?")
    if(begin == true) {
        startquiz();}

//Question looping

function askquestion() {
  currentQuestion = questions[currentQuestionindex]
  listEl.textContent = currentQuestion.questionText;
  li1.textContent = currentQuestion.choices[0]
  li2.textContent = currentQuestion.choices[1]
  li3.textContent = currentQuestion.choices[2]
  li4.textContent = currentQuestion.choices[3]
};

function countdown(){
  timeInterval = setInterval(function() {
  timerEl.textContent = timeleft;
  
  
  if(timeleft === 0) {
    clearInterval(timeInterval);
    timerEl.textContent= "";
    window.alert("Time's Up! No points for you.")
    return; 
  }

  timeleft--;
  
}, 1000);
}

//Core function
function startquiz(){
  countdown()
  askquestion()
  submitAnswer()
}

function recordscore() {
  name = window.prompt("What is your name?")
  console.log(name)
  score = timeleft;
  console.log(score)
  localStorage.setItem("Username", name)
  localStorage.setItem("score", score)
  entry.textContent = localStorage.getItem("Username") + localStorage.getItem("score")
}

//submitting and checking answer
function submitAnswer() {
  var buttonsdiv = document.getElementsByClassName("options");
  for (let i = 0; i < buttonsdiv.length; i++){
    buttonsdiv[i].addEventListener("click", function(e){
      if (e.target.textContent === currentQuestion.correctAnswer){
        window.alert("Correct!");
      }
      else {
        window.alert("Incorrect!")
        timeleft = timeleft - 15;
      }
      if (currentQuestionindex < 4){
      currentQuestionindex++;
      askquestion();}
      else {
        clearInterval(timeInterval)
        recordscore();
        return timeleft;
      }
    });
  }

//When 5th question, Question[4] is complete, stop timer.
}


// scoreboard.textContent = score;
// var scoreboard = document.querySelector("#scoreboard")
// var score = localStorage.getItem("score")
// var addscore = localStorage.setItem("score")



