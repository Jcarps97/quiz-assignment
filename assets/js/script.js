//Universal Variables


//TODO:
//Get options to register clicks
//Establish "checkanswer" function
//Setup scoreboard
//you could just give them all a class that's the same and add an event listener to that class to trigger checkAnswer


var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var currentQuestionindex = 0;
var listEl = document.getElementById("question");
var li1 = document.getElementById("li1");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");
var li4 = document.getElementById("li4");
var buttonsdiv = document.getElementById("options")

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
  var currentQuestion = questions[currentQuestionindex]
  listEl.textContent = currentQuestion.questionText;
  li1.textContent = currentQuestion.choices[0]
  li2.textContent = currentQuestion.choices[1]
  li3.textContent = currentQuestion.choices[2]
  li4.textContent = currentQuestion.choices[3]
};

function countdown(){
  var timeleft = 90;
  var timeInterval = setInterval(function() {
  timerEl.textContent = timeleft;
  
  
  if(timeleft === 0) {
    clearInterval(timeInterval);
    timerEl.textContent= "";
    window.alert("Time's Up!")
    return; 
  }

  timeleft--;
  
}, 1000);
}

function startquiz(){
  countdown()
  askquestion()
}

function submitAnswer() {
  // Grab value of which li element they currently have selected
  buttonsdiv.addEventListener("click", function(event){
    
  })

  // Check the answer
  if (correctAnswer === true){
    window.alert("Correct!")}
    else {
    window.alert("Incorrect!")
    timeleft - 5;
  }
  currentQuestionindex++;
  askquestion();
} 

function recordscore() {
var name = window.prompt("What is your name?")
console.log(name)
localStorage.setItem("Username", name)
scoreboard.textContent = score;
var scoreboard = document.querySelector("#scoreboard")
var score = localStorage.getItem("score")
var addscore = localStorage.setItem("score")

}


//addButton.addEventListener("click", submitAnswer)


//Questions
//1. Who is the protagonist of Konosuba? Naruto Uzumaki. Monkey D Luffy. (Kazuma Satou). Subaru Natsuki.
//2. In the TV show "Overlord", how many of the Pleiades appeared on screen? 5. (6). 7. 8.
//3. What vehicle from the TV series that bears the same name, is the Black Lagoon? Car. Truck. (Boat). Plane.
//4. The TV show "No Game No Life" features a catchphrase with a dark history. What is that phrase? Exceslior. (Aschente). Nirvana. Vici.
//5. The TV show "Toradora" gets its name from what two animals? Dog/Cat. Lizard/Spider. Fish/Bird. (Tiger/Dragon).

