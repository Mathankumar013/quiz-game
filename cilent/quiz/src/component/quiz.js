import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextQuestion, previousQuestion, selectOption, restartQuiz } from "./action";
import { question } from "./question";
import { option } from "./option";
import { gql, useQuery } from "@apollo/client";

const Get_Quiz=gql`
query Query {
  getQuestions {
    id
    questionText
    correctAnswer {
      id
      correctAnswer
    }
  }
}
`;


function Quiz() {
  const dispatch = useDispatch();
  const { index, selectedOption, score, result } = useSelector((state) => state);
  const { loading,error,data}=useQuery(Get_Quiz)


  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      dispatch(nextQuestion());
    }
  };

  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };

  const handleOptionChange = (option) => {
    dispatch(selectOption(option));
  };

  const handleRestartQuiz = () => {
    dispatch(restartQuiz());
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <div>
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <div>
          <h2>Your Score: {score} out of {question.length}</h2>
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <h2>{index + 1}. {question[index].question}</h2>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <input type="radio" name={`question-${index}`} value="1"checked={selectedOption === "1"}onChange={() => handleOptionChange("1")}/> {option[index].option1}
            </li>
            <li>
              <input type="radio" name={`question-${index}`} value="2" checked={selectedOption === "2"} onChange={() => handleOptionChange("2")}/> {option[index].option2}
            </li>
            <li>
              <input type="radio"name={`question-${index}`} value="3" checked={selectedOption === "3"} onChange={() => handleOptionChange("3")}/> {option[index].option3}
            </li>
            <li>
              <input type="radio"name={`question-${index}`} value="4" checked={selectedOption === "4"} onChange={() => handleOptionChange("4")}/> {option[index].option4}
            </li>
          </ul>
          <button onClick={handlePreviousQuestion}>Previous</button>
          <button onClick={handleNextQuestion}>Next</button>
          <div>{index + 1} of {question.length} questions</div>
        </>
      )}
    </div>
  );
}

export default Quiz;
