const questionFormElement = document.getElementById("question-form");

const questionResultElement = document.getElementById("questions-result");

const BACKEND_URL =
  "https://api.kontenbase.com/query/api/v1/2fe1b8dd-1b6f-4e91-b884-65382fb84354/Question";

async function fetchQuestions() {
  const response = await fetch(`${BACKEND_URL}`);
  const questions = await response.json();

  console.log(questions);
  displayQuestions(questions);
}

fetchQuestions();

function displayQuestions(questions) {
  for (const index in questions) {
    let questionElement = `<div>
    <h1>Usernama: ${questions[index].username}<h1>
    <p>Title: ${questions[index].Title}</p>
    <p>Question: ${questions[index].question}</p>
    </div>`;
    questionResultElement.innerHTML += questionElement;
  }
}

displayQuestions();
