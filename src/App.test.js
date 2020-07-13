import React from 'react';
import { render, screen, fireEvent, queryByAttribute } from '@testing-library/react';
import App from './App';

test('Check if Sign in Button present in DOM', () => {
  render(<App />);
  screen.getByText(/sign in/i);

  const SignBtn = screen.getByRole("button", { "name": "Sign In" })
  expect(SignBtn).toBeInTheDocument();
});

test('Check if Sign Up Button present in DOM', () => {
  render(<App />);
  screen.getByText(/sign Up/i);

  const SignUpBtn = screen.getByRole("button", { "name": "Sign Up" })
  expect(SignUpBtn).toBeInTheDocument();
});

test('Open modal pop up on click on signIn button', () => {
  const dom = render(<App />);
  const signinBtn = screen.getByText(/sign in/i);
  fireEvent.click(signinBtn)

  const getById = queryByAttribute.bind(null, 'id');
  const modalPopUp = getById(dom.container, 'signInModal');
  expect(modalPopUp).toBeInTheDocument();
});

test('Close modal on click on cross button of the modal', async () => {
  const dom = render(<App />);
  const signinBtn = screen.getByText(/sign in/i);
  fireEvent.click(signinBtn)

  const getById = queryByAttribute.bind(null, 'id');
  const modalPopUp = getById(dom.container, 'signInModal');

  const modalClose = screen.getByRole("button", { "name": "close-button" })
  fireEvent.click(modalClose)
  expect(modalPopUp).not.toBeInTheDocument();
});