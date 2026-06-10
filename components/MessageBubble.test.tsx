import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MessageBubble from './MessageBubble';
import { Message } from '../types';

describe('MessageBubble', () => {
  it('applies whitespace-pre-wrap to the message text to preserve newlines', () => {
    const testMessage: Message = {
      id: 'test-1',
      text: 'Line 1\n\nLine 2',
      sender: 'bot',
      timestamp: new Date()
    };

    const { container } = render(<MessageBubble message={testMessage} />);

    // Find the paragraph element containing the text
    const paragraph = container.querySelector('p');
    expect(paragraph).toBeInTheDocument();

    // Check if the class is applied
    expect(paragraph?.className).toContain('whitespace-pre-wrap');

    // Check that text content includes the newlines
    expect(paragraph?.textContent).toBe('Line 1\n\nLine 2');
  });
});
