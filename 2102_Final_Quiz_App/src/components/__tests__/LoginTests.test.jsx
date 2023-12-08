import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Login from "../Login";

test("should render Login component", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const loginElement = screen.getByTestId("login-1");
  expect(loginElement).toBeInTheDocument();

  const loginHeader = screen.getByText("Login");
  expect(loginHeader).toBeInTheDocument();

  const emailLabel = screen.getByText("Email:");
  expect(emailLabel).toBeInTheDocument();

  const emailInput = screen.getByTestId("emailInput");
  expect(emailInput).toBeInTheDocument();

  const passwordLabel = screen.getByText("Password:");
  expect(passwordLabel).toBeInTheDocument();

  const passwordInput = screen.getByTestId("passwordInput");
  expect(passwordInput).toBeInTheDocument();

  const signInButton = screen.getByText("Sign in");
  expect(signInButton).toBeInTheDocument();
});
