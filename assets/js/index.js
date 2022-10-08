import { useState, useFetch, displayQuestions } from "./modules/index.js";

const BACKEND_URL = "https://kepo-backend.ericprd.site/api/questions";

// Initialize questions state
// Initial value is a promise based on the fetch request using useFetch function
// If the promise is resolved, the value will be the questions object
// And if the promise is rejected, the value will be an empty array
const [questions, setQuestions] = useState(useFetch(BACKEND_URL));

// Show all questions from the results of questions (promise)
displayQuestions(questions);
