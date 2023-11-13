const quizData = [
    {
        question: 'How old is Javascript language?',
        a: '10',
        b: '100',
        c: '28',
        d: '53',
        correct: 'c'
    }, {
        question: 'What was the first programming language name?',
        a: 'Python',
        b: 'Fortran',
        c: 'C',
        d: 'Javascript',
        correct: 'b'
    }, {
        question: 'What is the easiest codding language?',
        a: 'Python',
        b: 'Javascript',
        c: 'C++',
        d: 'None',
        correct: 'a'
    }, {
        question: 'What is the programming language name that I create this website with?',
        a: 'C++',
        b: 'Java',
        c: 'SQL',
        d: 'Javascript',
        correct: 'd'
    }, {
        question: 'What does HTML stand for?',
        a: 'Jason Object Notation',
        b: 'Application Programming Interface',
        c: 'Helicopter Terminals Motorbouats Lamborginies',
        d: 'Hypertext Markup Language',
        correct: 'd'
    }
]

const question = document.getElementById("question")
const answerA = document.getElementById("answer_a")
const answerB = document.getElementById("answer_b")
const answerC = document.getElementById("answer_c")
const answerD = document.getElementById("answer_d")
const next = document.getElementById("next")
const quiz = document.getElementById("quiz")


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz]
    question.innerHTML = currentQuizData.question
    answerA.innerHTML = currentQuizData.a
    answerB.innerHTML = currentQuizData.b
    answerC.innerHTML = currentQuizData.c
    answerD.innerHTML = currentQuizData.d

}

function getSelected() {
    const answersEls = document.querySelectorAll(".answer")

    let answer = undefined

    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer
}

function deselectAnswer() {
    const answersEls = document.querySelectorAll(".answer")
    answersEls.forEach((answerEl) => {
        if (answerEl.checked){
            answerEl.checked = false
        }
    }
)}



next.addEventListener("click", () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        }else {
            quiz.innerHTML = `<h3>You answered correctly at ${score}/${quizData.length} questions.</h3> <button onClick="location.reload()">Reload</button>`
        }
    }
})
