var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var currenQuestionindex = 0;

var begin = window.confirm("Are you ready to begin? ")
    if(begin == true) {
        startquiz();}

function startquiz(){

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

  function askquestion() {
    var currentQuestion = questions[currenQuestionindex]
    question = currentQuestion.questionText;
    option1 = currentQuestion.choices[0]
    option2 = currentQuestion.choices[1]
    option3 = currentQuestion.choices[2]
    option4 = currentQuestion.choices[3]
    addButton.addEventListener("click", function(){
    if (correctAnswer === true)
    window.alert("Correct!")
    else 
    window.alert("Incorrect!")
    }
    
    )
  }
  
  countdown()
  askquestion()
}

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
scoreboard.textContent = score;
var scoreboard = document.querySelector("#scoreboard")
var score = localStorage.getItem("score")
var score = localStorage.setItem("score")

addButton.addEventListener("click", submitAnswer)
submitAnswer.addEventListener("click", checkAnswer)


//Questions
//1. Who is the protagonist of Konosuba? Naruto Uzumaki. Monkey D Luffy. (Kazuma Satou). Subaru Natsuki.
//2. In the TV show "Overlord", how many of the Pleiades appeared on screen? 5. (6). 7. 8.
//3. What vehicle from the TV series that bears the same name, is the Black Lagoon? Car. Truck. (Boat). Plane.
//4. The TV show "No Game No Life" features a catchphrase with a dark history. What is that phrase? Exceslior. (Aschente). Nirvana. Vici.
//5. The TV show "Toradora" gets its name from what two animals? Dog/Cat. Lizard/Spider. Fish/Bird. (Tiger/Dragon).

