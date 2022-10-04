const questionFormElement = document.getElementById("question-form");

const questionResultElement = document.getElementById("questions-result");

const BACKEND_URL =
  "https://api.kontenbase.com/query/api/v1/2fe1b8dd-1b6f-4e91-b884-65382fb84354";

async function fetchQuestions() {
  const response = await fetch(`${BACKEND_URL}/Questions`);
  const questions = await response.json();

  console.log(questions);
  displayQuestions(questions);
}

fetchQuestions();

function displayQuestions(questions) {
  for (const index in questions) {
    let questionElement = `<div>
    <h1>Username: ${questions[index].username}<h1>
    <p>Title: ${questions[index].title}</p>
    <p>Question: ${questions[index].text}</p>
    </div>`;
    questionResultElement.innerHTML += questionElement;
  }
}

displayQuestions();

const addNewQuestion = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const newQuestion = {
    username: formData.get("username"),
    title: formData.get("title"),
    text: formData.get("text"),
  };

  const response = await fetch(`${BACKEND_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newQuestion),
  });

  fetchQuestions();
};

questionFormElement.addEventListener("submit", addNewQuestion);
