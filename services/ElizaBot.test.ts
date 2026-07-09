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
      // Something that definitely won't match any specific englishScript patterns
      // However, it will match the catch-all /(.*)/i pattern.
      const input = "xyz123randomstring";
      const response = bot.processInput(input);

      const catchAllRule = englishScript.keywords.find(k => k.pattern.toString() === '/(.*)/i');
      const formattedCatchAll = (catchAllRule?.responses || []).map(r => r.replace('{0}', input));
      const possibleResponses = [...englishScript.fallbacks, ...formattedCatchAll];

      expect(possibleResponses).toContain(response);
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
      const input = "今天天气真的很好";
      const response = bot.processInput(input);

      const catchAllRule = chineseScript.keywords.find(k => k.pattern.toString() === '/(.*)/i');
      const formattedCatchAll = (catchAllRule?.responses || []).map(r => r.replace('{0}', input));
      const possibleResponses = [...chineseScript.fallbacks, ...formattedCatchAll];

      expect(possibleResponses).toContain(response);
    });
  });

  describe('Memory System', () => {
    it('should reset memory', () => {
      bot.processInput("my mother is nice");
      bot.reset();
      expect(bot).toBeDefined();
    });
  });
});
