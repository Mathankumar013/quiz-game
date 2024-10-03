import { NEXT_QUESTION, PREVIOUS_QUESTION, SELECT_OPTION, RESTART_QUIZ } from './actiontype';
import { question } from './question';
import { answer } from './answer';


const initialState = {
  index: 0,
  selectedOption: null,
  score: 0,
  result: false,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_QUESTION:
      const isCorrect = state.selectedOption === answer[state.index].ans;
      return {
        ...state,
        index: state.index < question.length - 1 ? state.index + 1 : state.index,
        score: isCorrect ? state.score + 1 : state.score,
        selectedOption: null,
        result: state.index === question.length - 1 ? true : state.result,
      };

    case PREVIOUS_QUESTION:
      return {
        ...state,
        index: state.index > 0 ? state.index - 1 : state.index,
        selectedOption: null,
      };

    case SELECT_OPTION:
      return {
        ...state,
        selectedOption: action.payload,
      };

    case RESTART_QUIZ:
      return initialState;

    default:
      return state;
  }
};

export default quizReducer;
