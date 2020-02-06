var startEl = document.getElementById("startBtn");
var startDiv = document.getElementById("start");
var quizDiv = document.getElementById("quiz");
var endDiv = document.getElementById("end");

var leaderBoard = document.getElementById("leaderBoard");
var yourScoreEl = document.getElementById("yourScore");
var initialsEl = document.getElementById("initials");
var maxScoreEl = "";
var maxScoreInitialsEl = "";
var count = 0;
var timeEl = document.getElementById("time");
var secondsLeft = 0;
var yourScore = 0;
var yourInitials = "";

var questionEl = document.getElementById("question");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
var resultEl = document.getElementById("result");

document.getElementById("save").addEventListener("click", save);

var questions = questionsArr;
var questionsUsed = [];

var maxScore = localStorage.getItem("maxScore");
var maxScoreInitials = localStorage.getItem("maxScoreInitials");

if(maxScore) {
leaderBoard.innerHTML = "Time to beat: " + maxScoreInitials + "'s time of " + maxScore + " seconds."
};

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
    yourScore = score;
    yourScoreEl.textContent = yourScore;
    initialsEl.textContent = yourInitials;
    maxScore = localStorage.getItem("maxScore");
    maxScoreInitials = localStorage.getItem("maxScoreInitials");

    if(yourScore > maxScore) {
        document.getElementById("initials").style.display = "block";
    }

    quizDiv.style.display = "none";
    endDiv.style.display = "block";
}

function save() {

    yourInitials = document.getElementById("initials").value;

        if(yourScore > maxScore) {
            maxScore = yourScore;
            maxScoreInitials = yourInitials;
            localStorage.setItem("maxScore", yourScore);
            localStorage.setItem("maxScoreInitials", yourInitials);
        }
    
    window.location.href = "index.html";
}