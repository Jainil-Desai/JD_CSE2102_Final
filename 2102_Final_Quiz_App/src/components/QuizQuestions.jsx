import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuizQuestions.module.scss";

const QuizQuestions = ({ questions }) => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option, questionIndex) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionIndex]: option,
    }));
  };

  const handleSubmit = () => {
    let userScore = 0;

    questions.forEach((question, index) => {
      const selectedOption = selectedOptions[index];
      if (selectedOption === question.answer) {
        userScore += 1;
      }
    });

    setScore(userScore);
    navigate(`/result?score=${userScore}`);
  };

  return (
    <div data-testid="quiz-1" className={styles.quizContainer}>
      <h1>Questions</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <h2>{question.question}</h2>
          <ul>
            <li>
              <label>
                <input
                  className={styles.optionInput}
                  type="radio"
                  name={`question_${index}`}
                  value={question.optionA}
                  checked={selectedOptions[index] === question.optionA}
                  onChange={() => handleOptionSelect(question.optionA, index)}
                />
                {question.optionA}
              </label>
            </li>
            <li>
              <label>
                <input
                  className={styles.optionInput}
                  type="radio"
                  name={`question_${index}`}
                  value={question.optionB}
                  checked={selectedOptions[index] === question.optionB}
                  onChange={() => handleOptionSelect(question.optionB, index)}
                />
                {question.optionB}
              </label>
            </li>
            <li>
              <label>
                <input
                  className={styles.optionInput}
                  type="radio"
                  name={`question_${index}`}
                  value={question.optionC}
                  checked={selectedOptions[index] === question.optionC}
                  onChange={() => handleOptionSelect(question.optionC, index)}
                />
                {question.optionC}
              </label>
            </li>
            <li>
              <label>
                <input
                  className={styles.optionInput}
                  type="radio"
                  name={`question_${index}`}
                  value={question.optionD}
                  checked={selectedOptions[index] === question.optionD}
                  onChange={() => handleOptionSelect(question.optionD, index)}
                />
                {question.optionD}
              </label>
            </li>
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuizQuestions;
