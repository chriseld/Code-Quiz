var startEl = document.getElementById("startBtn");
var startDiv = document.getElementById("start");
var quizDiv = document.getElementById("quiz");
var endDiv = document.getElementById("end");

var yourScoreEl = document.getElementById("yourScore");
var initialsEl = document.getElementById("initials");
var maxScoreEl = document.querySelectorAll(".maxScore");
var maxScoreInitialsEl = document.querySelectorAll(".maxScoreInitials");
var count = 0;
var timeEl = document.getElementById("time");
var secondsLeft = 0;
var score = 0;
var initials = "";

var questionEl = document.getElementById("question");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
var resultEl = document.getElementById("result");

document.getElementById("save").addEventListener("click", save);

var questions = questionsArr;
var questionsUsed = [];

var maxScore;

function startTimer() {
    secondsLeft = 60;
    var countdownId = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remain";
        if(secondsLeft <= 0) {
            clearInterval(countdownId);
            timeEl.textContent = "";
            endQuiz(secondsLeft);
        }
    }, 1000);
    getQuestion();
    
}

function getQuestion() {
    if(questions.length === questionsUsed.length) {
        endQuiz(secondsLeft);
    }
    var questionPicked = questions[count]
    questionsUsed.push(questionPicked);

    if(questionPicked) {
        questionEl.textContent = questionPicked.question;

        answer1El.textContent = questionPicked.choices[0];
        answer2El.textContent = questionPicked.choices[1];
        answer3El.textContent = questionPicked.choices[2];
        answer4El.textContent = questionPicked.choices[3];
    }
}

function choice(btnId) {
    var choices = questions[count];
    var correctAnswer = choices.answer;
    var btnVal = document.getElementById("answer" + btnId).textContent;
    if(btnVal === correctAnswer) {
        resultEl.textContent = "Correct!";
        count++;
        getQuestion();
        
    } else {
        resultEl.textContent = "Wrong!";
        secondsLeft = secondsLeft - 5;
        count++;
        getQuestion();
        
    }
}


function startQuiz() {
    startDiv.style.display = "none";
    startTimer();
    quizDiv.style.display = "block";
}

function endQuiz(score) {
    yourScoreEl.textContent = score;
    initialsEl.textContent = initials;
    maxScoreEl.textContent = localStorage.getItem("maxScore");
    maxScoreInitialsEl.textContent = localStorage.getItem("maxScoreInitials");
    questionsUsed = [];

    quizDiv.style.display = "none";
    endDiv.style.display = "block";
}

function save() {

    console.log(maxScoreEl.textContent);

    if(localStorage.getItem(maxScore)) {

    if(score > maxScoreEl.textContent && score > 0) {
        localStorage.setItem("maxScore", score);
        localStorage.setItem("maxScoreInitials", initials);
    }
    }
    endDiv.style.display = "none";
    startDiv.style.display = "block";

    var questions = questionsArr;
    var questionsUsed = [];
}