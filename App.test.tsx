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

test('prevents sending a message while bot is typing', async () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Type your message here/i);

  fireEvent.change(input, { target: { value: 'First message' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  // Bot is now typing, input should be disabled implicitly by the component logic
  fireEvent.change(input, { target: { value: 'Second message' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  // Only the first message should appear immediately
  expect(screen.getByText('First message')).toBeInTheDocument();
  expect(screen.queryByText('Second message')).not.toBeInTheDocument();

  await waitFor(() => {
    expect(screen.queryByText(/Eliza is typing/i)).not.toBeInTheDocument();
  }, { timeout: 3000 });
});
