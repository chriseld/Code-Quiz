var startEl = document.getElementById("startBtn");
var startDiv = document.getElementById("start");
var quizDiv = document.getElementById("quiz");
var endDiv = document.getElementById("end");

var yourScoreEl = document.getElementById("yourScore");
var initialsEl = document.getElementById("initials");
var maxScoreEl = document.querySelectorAll(".maxScore");
var maxScoreInitialsEl = document.querySelectorAll(".maxScoreInitials");

var timeEl = document.getElementById("time");

var questionEl = document.getElementById("question");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
var resultEl = document.getElementById("result");

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
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remain";

        if(secondsLeft <= 0 || questionArr.length === 0) {
            clearInterval(countdownId);
            timeEl.textContent = "";
            endQuiz(secondsLeft);
        }
    }, 1000)
}

function getQuestion() {
    var question = questionArr[Math.floor(Math.random() * questionArr.length)];
    questionArr.splice(question);
    console.log(question.question);
    questionEl.textContent = question.question;
}

function startQuiz() {
    startDiv.style.display = "none";
    quizDiv.style.display = "block";
    resetArray();
    startTimer();
    getQuestion();
}

function endQuiz(score) {
    yourScoreEl.textContent = score;
    initialsEl.textContent = initials;
    maxScoreEl.textContent = localStorage.getItem("maxScore");
    maxScoreInitialsEl.textContent = localStorage.getItem("maxScoreInitials");

    if(score > maxScoreEl && score > 0) {
        localStorage.setItem("maxScore", score);
        localStorage.setItem("maxScoreInitials", initials);
    }

    quizDiv.style.display = "none";
    endDiv.style.display = "block";
}