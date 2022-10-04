const questionFormElement = document.getElementById("question-form");

const questionResultElement = document.getElementById("questions-result");

const questionFormElement = document.getElementById("question-form");

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
    <h1>Username: ${questions[index].username}<h1>
    <p>Title: ${questions[index].Title}</p>
    <p>Question: ${questions[index].question}</p>
    </div>`;
    questionResultElement.innerHTML += questionElement;
  }
}

displayQuestions();

const addNewQuestion = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const newQuestion = {
    username: formData.get("username")
    Title: formData.get("question-title"),
    question: formData.get("question-text"),
  };

  const response = await fetch(`${BACKEND_API_URL}/questions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newQuestion),
  });

  fetchQuestions();
};

questionFormElement.addEventListener("submit", addNewQuestion);
