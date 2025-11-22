import { ElizaConfig, Language, ReflectionMap, ScriptItem } from '../types';
import { englishScript, chineseScript } from './elizaScript';

export class ElizaBot {
  private lastResponse: string = "";
  private memory: Map<string, boolean> = new Map();
  
  constructor() {}

  /**
   * Resets the bot's memory.
   */
  public reset(): void {
    this.memory.clear();
    this.lastResponse = "";
  }

  /**
   * Main function to process input and return a response.
   */
  public processInput(input: string): string {
    const language = this.detectLanguage(input);
    const config = language === 'zh' ? chineseScript : englishScript;
    
    // 1. Preprocessing
    let cleanInput = input.trim();
    if (language === 'en') {
      cleanInput = cleanInput.toLowerCase();
      cleanInput = cleanInput.replace(/[.,?!;]$/, '');
    } else {
      cleanInput = cleanInput.replace(/[。，？！；]$/, '');
    }

    // 2. Keyword Matching
    for (const rule of config.keywords) {
      const match = cleanInput.match(rule.pattern);
      if (match) {
        let responseTemplate: string | undefined;

        // Check for memory key
        if (rule.key && this.memory.has(rule.key) && rule.followUps && rule.followUps.length > 0) {
            // Topic is in memory, use a follow-up response
            responseTemplate = this.getRandomItem(rule.followUps);
        } else {
            // First time seeing this topic or it's a stateless rule
            responseTemplate = this.getRandomItem(rule.responses);
            // If it's a new memory topic, store it
            if (rule.key) {
                this.memory.set(rule.key, true);
            }
        }
        
        // 4. If the template has a placeholder {0}, fill it
        if (responseTemplate && responseTemplate.indexOf('{0}') > -1) {
          const remainder = match[1]; 
          if (remainder) {
            const reflectedRemainder = this.reflect(remainder, config.reflections, language);
            let finalResponse = responseTemplate.replace('{0}', reflectedRemainder);
            
            if (finalResponse !== this.lastResponse) {
                this.lastResponse = finalResponse;
                return finalResponse;
            }
          }
        } else if (responseTemplate) {
          this.lastResponse = responseTemplate;
          return responseTemplate;
        }
      }
    }

    // 5. Fallback if no patterns matched
    const fallback = this.getRandomItem(config.fallbacks);
    return fallback;
  }

  /**
   * Detects if the input contains Chinese characters.
   */
  private detectLanguage(input: string): Language {
    const chineseRegex = /[\u4e00-\u9fa5]/;
    return chineseRegex.test(input) ? 'zh' : 'en';
  }

  /**
   * Reflects the input string based on the reflection map.
   */
  private reflect(text: string, reflectionMap: ReflectionMap, language: Language): string {
    if (language === 'en') {
      const words = text.split(/\s+/);
      const reflectedWords = words.map(word => {
        const key = word.toLowerCase();
        return reflectionMap[key] || word;
      });
      return reflectedWords.join(' ');
    } else {
      // For Chinese, use a regex constructed from all keys for a single-pass replacement.
      // Sort keys by length (desc) to match longest phrases first.
      const keys = Object.keys(reflectionMap).sort((a, b) => b.length - a.length);
      const patternString = keys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
      const regex = new RegExp(patternString, 'g');
      
      return text.replace(regex, (matched) => {
        return reflectionMap[matched] || matched;
      });
    }
  }

  private getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}