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

test('allows user to clear chat history', async () => {
  // Mock window.confirm
  const confirmSpy = vi.spyOn(window, 'confirm').mockImplementation(() => true);

  render(<App />);
  const input = screen.getByPlaceholderText(/Type your message here/i);

  // Send a message
  fireEvent.change(input, { target: { value: 'Hello Eliza' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  expect(screen.getByText('Hello Eliza')).toBeInTheDocument();

  // Find and click the reset button
  const resetButton = screen.getByTitle('Clear Chat');
  fireEvent.click(resetButton);

  expect(confirmSpy).toHaveBeenCalled();

  // Wait for the chat to clear and show the new initial greeting
  await waitFor(() => {
    expect(screen.queryByText('Hello Eliza')).not.toBeInTheDocument();
    expect(screen.getByText('Hello. How are you feeling now?')).toBeInTheDocument();
  });

  confirmSpy.mockRestore();
});
