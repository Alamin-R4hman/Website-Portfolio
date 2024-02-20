const questions = [
    {
        question: "Which is larget animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Where was the first example of paper money used?",
        answers: [
            { text: "China", correct: true},
            { text: "Turkey", correct: false},
            { text: "Greece", correct: false},
            { text: "Britain", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which of the following languages has the longest alphabet?",
        answers: [
            { text: "Russian", correct: true},
            { text: "Greek", correct: false},
            { text: "Mandarin", correct: false},
            { text: "Arabic", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    }, 
    {
        question: "Which of the following is NOT a fruit?",
        answers: [
            { text: "Rhubarb", correct: true},
            { text: "Tomatoes", correct: false},
            { text: "Avocados", correct: false},
            { text: "Guava", correct: false},
        ]
    },  
    {
        question: "What did Aladdin steal in the marketplace at the beginning of the movie Aladdin?",
        answers: [
            { text: "Bread", correct: true},
            { text: "Apple", correct: false},
            { text: "Rice", correct: false},
            { text: "Gold", correct: false},
        ]
    }, 
    {
        question: "Which of the following languages has the longest alphabet?",
        answers: [
            { text: "Greek", correct: false},
            { text: "Russian", correct: true},
            { text: "Arabic", correct: false},
            { text: "Bengali", correct: false},
        ]
    }, 
    {
        question: "The fear of insects is known as what?",
        answers: [
            { text: "Arachnophobia", correct: false},
            { text: "Entomophobia", correct: true},
            { text: "Ailurophobia", correct: false},
            { text: "Icouldnotthinofanotherphobia", correct: false},
        ]
    },  
    {
        question: "What was the original name of Mickey Mouse?",
        answers: [
            { text: "The Rat", correct: false},
            { text: "Marshall Mouse", correct: false},
            { text: "Mortimer Mouse", correct: true},
            { text: "Marvin Mouse", correct: false},
        ]
    },  
    {
        question: " What Italian city is famous for its system of canals?",
        answers: [
            { text: "Bologna", correct: false},
            { text: "Naples", correct: false},
            { text: "Rome", correct: false},
            { text: "Venice", correct: true},
        ]
    },  
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();