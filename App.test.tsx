import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import App from './App';
import { expect, test, vi, beforeAll } from 'vitest';

beforeAll(() => {
  // Mock scrollIntoView which is not implemented in jsdom
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
  // Mock confirm for reset tests
  window.confirm = vi.fn(() => true);
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

test('handles reset while typing bot message, checking if old response appears', async () => {
  const { container } = render(<App />);
  const input = screen.getByPlaceholderText(/Type your message here/i);

  fireEvent.change(input, { target: { value: 'This is a test message that triggers a generic response' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  const resetButton = screen.getByTitle('Clear Chat');
  fireEvent.click(resetButton);

  await act(async () => {
    await new Promise(r => setTimeout(r, 1500));
  });

  // We expect "Hello. How are you feeling now?" to be present
  expect(screen.getByText("Hello. How are you feeling now?")).toBeInTheDocument();

  // We expect NO OTHER MESSAGES (like "Please tell me more")
  const botIcons = container.querySelectorAll('.bg-emerald-100');
  // There's 1 for header, 1 for the first message = 2
  expect(botIcons.length).toBe(2);
});
