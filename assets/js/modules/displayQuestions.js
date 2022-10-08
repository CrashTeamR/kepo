import { createQuestionCard } from "./createQuestionCard.js";

export const displayQuestions = (questionsPromise) => {
  questionsPromise.then((questionsObject) => {
    questionsObject.response.forEach((question) => {
      createQuestionCard({ ...question });
    });
  });
};
