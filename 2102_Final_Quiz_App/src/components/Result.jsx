import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./ResultPage.module.scss";

function Result() {
  const location = useLocation();
  const score = new URLSearchParams(location.search).get("score");
  const navigate = useNavigate();

  const handleRestartButton = () => {
    navigate("/");
  };

  return (
    <div data-testid="result-page" className={styles.resultPage}>
      <h1>Congrats on Completing the Quiz!</h1>
      <h3>Your Score: {score}/10</h3>
      <button onClick={handleRestartButton}>Restart Quiz</button>
    </div>
  );
}

export default Result;
