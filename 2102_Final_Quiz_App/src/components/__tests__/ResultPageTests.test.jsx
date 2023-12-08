import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import ResultPage from "../../pages/ResultPage";

test("should render Result Page", () => {
  const sampleScore = 7;
  render(
    <MemoryRouter initialEntries={[`/result?score=${sampleScore}`]}>
      <ResultPage />
    </MemoryRouter>
  );

  const resultPage = screen.getByTestId("result-page");
  expect(resultPage).toBeInTheDocument();

  const resultPageHeader = screen.getByText("Congrats on Completing the Quiz!");
  expect(resultPageHeader).toBeInTheDocument();

  const scoreText = screen.getByText(`Your Score: ${sampleScore}/10`);
  expect(scoreText).toBeInTheDocument();

  const startOverLink = screen.getByText("Restart Quiz");
  expect(startOverLink).toBeInTheDocument();
});
