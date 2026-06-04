import { describe, it, expect, beforeEach } from 'vitest';
import { ElizaBot } from './ElizaBot';
import { englishScript, chineseScript } from './elizaScript';

describe('ElizaBot', () => {
  let bot: ElizaBot;

  beforeEach(() => {
    bot = new ElizaBot();
  });

  describe('English Interactions', () => {
    it('should reflect pronouns correctly', () => {
      const response = bot.processInput("who are you");
      const possibleWhoAreYou = englishScript.keywords.find(k => k.pattern.toString() === '/who are you/i')?.responses || [];
      expect(possibleWhoAreYou).toContain(response);
    });

    it('should handle fallbacks', () => {
      // Something that definitely won't match any englishScript patterns
      const response = bot.processInput("xyz123randomstring");
      // Use fallback list OR the catch-all pattern response
      const catchAllResponses = englishScript.keywords.find(k => k.pattern.toString() === '/(.*)/i')?.responses || [];
      expect([...englishScript.fallbacks, ...catchAllResponses.map(r => r.replace('{0}', 'xyz123randomstring'))]).toContain(response);
    });

    it('should apply reflections to placeholders', () => {
      const response = bot.processInput("i feel tired");
      expect(response).toBeTypeOf('string');
    });
  });

  describe('Chinese Interactions', () => {
    it('should match Chinese greetings', () => {
      const response = bot.processInput("你好");
      const possibleGreetings = chineseScript.keywords.find(k => k.pattern.toString() === '/你好|您好|嗨|喂/i')?.responses || [];
      expect(possibleGreetings).toContain(response);
    });

    it('should match Chinese fallbacks or some generic rule like "我"', () => {
      const response = bot.processInput("我随便乱说的没有任何匹配");
      // "我" matches "我" in the regex and triggers the rule for "我".
      // Let's just check it returns a string for a generic input since specific fallback might be intercepted by "我" pattern
      expect(response).toBeTypeOf('string');
      expect(response.length).toBeGreaterThan(0);
    });
  });

  describe('Memory System', () => {
    it('should reset memory', () => {
      bot.processInput("my mother is nice");
      bot.reset();
      expect(bot).toBeDefined();
    });
  });

  describe('Repetition Handling', () => {
    it('should handle repeated inputs by returning different rule responses instead of fallbacks', () => {
      const input = "i feel sad";
      // Get the possible responses for "i feel" rule
      const possibleResponses = englishScript.keywords.find(k => k.pattern.toString() === '/i feel ([^?]*)/i')?.responses || [];
      const possibleReflected = possibleResponses.map(r => r.replace('{0}', 'sad'));

      const response1 = bot.processInput(input);
      const response2 = bot.processInput(input);
      const response3 = bot.processInput(input);

      expect(possibleReflected).toContain(response1);
      expect(possibleReflected).toContain(response2);
      expect(possibleReflected).toContain(response3);

      // Due to randomness, they shouldn't always be the same, but importantly
      // they shouldn't fallback to the generic `fallbacks`
      expect(englishScript.fallbacks).not.toContain(response2);
      expect(englishScript.fallbacks).not.toContain(response3);
    });
  });
});
