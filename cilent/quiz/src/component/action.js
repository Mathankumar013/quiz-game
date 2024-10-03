import { NEXT_QUESTION,PREVIOUS_QUESTION,SELECT_OPTION,RESTART_QUIZ } from "./actiontype";

export const nextQuestion = () => ({
    type: NEXT_QUESTION,
  });
  
  export const previousQuestion = () => ({
    type: PREVIOUS_QUESTION,
  });
  
  export const selectOption = (option) => ({
    type: SELECT_OPTION,
    payload: option,
  });
  
  export const restartQuiz = () => ({
    type: RESTART_QUIZ,
  });