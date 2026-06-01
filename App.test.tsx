import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { expect, test, vi, beforeAll } from 'vitest';

beforeAll(() => {
  // Mock scrollIntoView which is not implemented in jsdom
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
});

test('renders initial greeting', () => {
  render(<App />);
  expect(screen.getByText(/Hello, I am Eliza/i)).toBeInTheDocument();
});

test('allows user to send a message', async () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Type your message here/i);

  fireEvent.change(input, { target: { value: 'Hello Eliza' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  // User message should appear immediately
  expect(screen.getByText('Hello Eliza')).toBeInTheDocument();

  // Wait for typing indicator to disappear
  await waitFor(() => {
    // If the timeout delays are simulated, wait long enough
    expect(screen.queryByText(/Eliza is typing/i)).not.toBeInTheDocument();
  }, { timeout: 3000 });
});
