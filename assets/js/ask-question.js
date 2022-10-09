import { postQuestion } from "./modules/index.js";

const formElement = document.getElementById("form");
const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const objectValue = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value,
  };

  const request = new Request("https://kepo-api.ericprd.site/api/questions", {
    method: "POST",
    body: JSON.stringify(objectValue),
    headers: {
      "Content-Type": "application/json",
    },
  });

  postQuestion(request);

  formElement.reset();
});
