import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import QuizQuestions from "../QuizQuestions";

test("should render QuizQuestions component with correct answer", () => {
  const sampleQuestions = [
    {
      question: "What is 2 + 2?",
      optionA: "3",
      optionB: "4",
      optionC: "5",
      optionD: "6",
      answer: "4",
    },
  ];

  render(
    <MemoryRouter>
      <QuizQuestions questions={sampleQuestions} />
    </MemoryRouter>
  );

  const correctAnswer = sampleQuestions[0].answer;

  const correctAnswerInput = screen.getByLabelText(correctAnswer);
  fireEvent.click(correctAnswerInput);

  // Find and click the submit button
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
});

test("should render QuizQuestions component with incorrect answer", () => {
  const sampleQuestions = [
    {
      question: "What is 2 + 2?",
      optionA: "3",
      optionB: "4",
      optionC: "5",
      optionD: "6",
      answer: "4",
    },
  ];

  render(
    <MemoryRouter>
      <QuizQuestions questions={sampleQuestions} />
    </MemoryRouter>
  );

  const incorrectAnswer = sampleQuestions[0].optionA;

  const incorrectAnswerInput = screen.getByLabelText(incorrectAnswer);
  fireEvent.click(incorrectAnswerInput);

  // Find and click the submit button
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
});

test("should render QuizQuestions component with multiple questions", () => {
  const sampleQuestions = [
    {
      question: "What is 2 + 2?",
      optionA: "3",
      optionB: "4",
      optionC: "5",
      optionD: "6",
      answer: "4",
    },
    {
      question: "What is the capital of India?",
      optionA: "Paris",
      optionB: "New Delhi",
      optionC: "London",
      optionD: "Mumbai",
      answer: "New Delhi",
    },
  ];

  render(
    <MemoryRouter>
      <QuizQuestions questions={sampleQuestions} />
    </MemoryRouter>
  );

  const correctAnswer1 = sampleQuestions[0].answer;
  const correctAnswerInput1 = screen.getByLabelText(correctAnswer1);
  fireEvent.click(correctAnswerInput1);

  const submitButton1 = screen.getByText("Submit");
  fireEvent.click(submitButton1);

  const correctAnswer2 = sampleQuestions[1].answer;
  const correctAnswerInput2 = screen.getByLabelText(correctAnswer2);
  fireEvent.click(correctAnswerInput2);

  const submitButton2 = screen.getByText("Submit");
  fireEvent.click(submitButton2);
});
