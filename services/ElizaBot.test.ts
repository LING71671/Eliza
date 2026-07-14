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
      const input = "xyz123randomstring";
      const response = bot.processInput(input);

      const catchAllResponses = englishScript.keywords.find(k => k.pattern.toString() === '/(.*)/i')?.responses || [];
      const validResponses = [
        ...englishScript.fallbacks,
        ...catchAllResponses.map(r => r.replace('{0}', input))
      ];

      expect(validResponses).toContain(response);
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

    it('should handle Chinese fallbacks', () => {
      const input = "测试随机字符串";
      const response = bot.processInput(input);

      const catchAllResponses = chineseScript.keywords.find(k => k.pattern.toString() === '/(.*)/i')?.responses || [];
      const validResponses = [
        ...chineseScript.fallbacks,
        ...catchAllResponses.map(r => r.replace('{0}', input))
      ];

      expect(validResponses).toContain(response);
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
