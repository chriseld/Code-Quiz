var startEl = document.getElementById("startBtn");
var startDiv = document.getElementById("start");
var quizDiv = document.getElementById("quiz");
var endDiv = document.getElementById("end");

var questionArr = [];

function resetArray() {
    questionArr = [];

    for(var i = 1; i < 4; i++) {
     questionArr.push("question".concat(i));
    }
}

function startTimer() {
    var secondsLeft = 60;
    var countdownId = setInterval(function() {
        countdownEl.textContent = secondsLeft = " seconds remain";

        if(secondsLeft <= 0) {
            clearInterval(countdownId);
            countdownEl.textContent = "";
            endQuiz();
        }
    }, 1000)
}

function startQuiz() {
    startDiv.style.display = "none";
    quizDiv.style.display = "block";
    resetArray();
    startTimer();
    console.log("I STARTED");
}