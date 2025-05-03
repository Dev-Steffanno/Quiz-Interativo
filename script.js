const questions = [
{
question: "What is the correct way to write this number: 15?",
answers: ["Fifty", "Fifteen", "Five", "Fifty-five"],
correct: 1

},
{
  question: "Choose the correct sentence:",
  answers: ["She am a teacher.", "He are happy.", "I is hungry.", "They are students."],
  correct: 3

},
{
question: "What color is the sky on a sunny day?",
answers: ["Green", "Blue", "Red", "Yellow"],
correct: 1
}
];

let currentQuestion = 0;
let score = 0;

const questionE1 = document.getElementById("question");
const answersE1 = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const letterLabels = ["A", "B", "C", "D"];
const resultE1 = document.getElementById("result");

function showQuestion() {
const question = questions[currentQuestion];
questionE1.textContent = question.question;
answersE1.innerHTML = "";

question.answers.forEach((answer, index) => {
  const btn = document.createElement("button");
  btn.innerHTML = `<strong>${letterLabels[index]}.</strong> ${answer}`;
  btn.classList.add("answer-btn");
  btn.addEventListener("click", () => selectAnswer (index));
  answersE1.appendChild(btn);
});

}

function selectAnswer (index) {
  const question = questions[currentQuestion];

if (index === question.correct) {
  score++;
}
currentQuestion++;

if (currentQuestion < questions.length) {
  showQuestion();
} else {
  showResults()
}
}


function showResults() {

  document.getElementById("quiz-container").style.display = "none";

  resultE1.innerHTML = `
    <div class="result-message">
      <p><strong>Você acertou ${score} de ${questions.length} perguntas! 🎉</strong></p>
      <button onclick="restartQuiz()" class="restart-btn">Refazer quiz</button>
    </div>
  `;

  
  answersE1.innerHTML = "";
  nextBtn.style.display = "none";
}

function restartQuiz () {
currentQuestion = 0;
score = 0 ; 
document.getElementById ("quiz-container").style.display = "block";
document.getElementById ("result").innerHTML = "";
resultE1.innerHTML = "";
showQuestion();


}
showQuestion();

