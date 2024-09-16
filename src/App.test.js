// src/App.test.js

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders VIT Result Management System header', () => {
  render(<App />);
  const headerElement = screen.getByText(/VIT Result Management System/i);
  expect(headerElement).toBeInTheDocument();
});
