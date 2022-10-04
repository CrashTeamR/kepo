const questionForm = document.getElementById("question-form");

const BACKEND_URL =
  "https://api.kontenbase.com/query/api/v1/2fe1b8dd-1b6f-4e91-b884-65382fb84354/Question";

async function fetchQuestions() {
  const response = await fetch(`${BACKEND_URL}`);
  const questions = await response.json();

  console.log(questions);
}

fetchQuestions();
