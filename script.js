const questions = [
{
question: "Qual a Capital do Brasil?",
answers: ["São Paulo", "Brasilia", "Rio de Janeiro", "Salvador" ],
correct: 1

},
{
  question: "Qual Linguagem usamos para estilizar páginas web?",
  answers: ["HTML", "Python", "CSS", "JAVA"],
  correct: 2

},
{
question: "Qual desses é um framework JavaScript?",
answers: ["Laravel", "React", "Django", "Ruby"],
correct: 1

}
];

let currentQuestion = 0;
let score = 0;

const questionE1 = document.getElementById("question");
const answersE1 = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
const q = questions[currentQuestion];
questionE1.textContent = q.question;
answersE1.innerHTML = "";
q.answers.forEach((answer, index) => {
  const btn = document.createElement("button");
  btn.textContent = answer;
  btn.addEventListener("click", () => selectAnswer (index));
  answersE1.appendChild(btn);
});

}

function selectAnswer (index) {
if (index === questions[currentQuestion].correct) {
  score++;
}
currentQuestion++;
if (currentQuestion <questions.length) {
  showQuestion();
} else {
  showResults()
}
}

function showResults () {
questionE1.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
answersE1.innerHTML = "";
nextBtn.style.display = "none";

}

nextBtn.style.display = "none";

showQuestion();