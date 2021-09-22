var timerEl = document.getElementById('countdown')
var mainEl = document.getElementById('main')

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
    }

    timeleft--;
    
  }, 1000);
  }
  countdown()
}

