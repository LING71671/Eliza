import { ElizaConfig, Language, ReflectionMap, ScriptItem } from '../types';
import { englishScript, chineseScript } from './elizaScript';

export class ElizaBot {
  private lastResponse: string = "";
  
  constructor() {}

  /**
   * Main function to process input and return a response.
   */
  public processInput(input: string): string {
    const language = this.detectLanguage(input);
    const config = language === 'zh' ? chineseScript : englishScript;
    
    // 1. Preprocessing
    // Remove trailing punctuation for cleaner matching, convert to lowercase (for English)
    let cleanInput = input.trim();
    if (language === 'en') {
      cleanInput = cleanInput.toLowerCase();
      cleanInput = cleanInput.replace(/[.,?!;]$/, '');
    } else {
      // For Chinese, remove common punctuation at end
      cleanInput = cleanInput.replace(/[。，？！；]$/, '');
    }

    // 2. Keyword Matching
    for (const rule of config.keywords) {
      const match = cleanInput.match(rule.pattern);
      if (match) {
        // 3. Select a response template
        const responseTemplate = this.getRandomItem(rule.responses);
        
        // 4. If the template has a placeholder {0}, fill it with reflected remaining text
        if (responseTemplate.indexOf('{0}') > -1) {
          // Capture group 1 usually contains the "rest" of the sentence
          const remainder = match[1]; 
          if (remainder) {
            const reflectedRemainder = this.reflect(remainder, config.reflections, language);
            let finalResponse = responseTemplate.replace('{0}', reflectedRemainder);
            
            // Prevent repeating exact same response immediately if possible (simple check)
            if (finalResponse !== this.lastResponse) {
                this.lastResponse = finalResponse;
                return finalResponse;
            }
          }
        } else {
          this.lastResponse = responseTemplate;
          return responseTemplate;
        }
      }
    }

    // 5. Fallback if no patterns matched (or patterns failed to produce valid output)
    const fallback = this.getRandomItem(config.fallbacks);
    return fallback;
  }

  /**
   * Detects if the input contains Chinese characters.
   */
  private detectLanguage(input: string): Language {
    // Regular expression range for Chinese characters
    const chineseRegex = /[\u4e00-\u9fa5]/;
    return chineseRegex.test(input) ? 'zh' : 'en';
  }

  /**
   * Reflects the input string based on the reflection map (e.g., "I" -> "You").
   */
  private reflect(text: string, reflectionMap: ReflectionMap, language: Language): string {
    if (language === 'en') {
      // For English, we split by spaces to handle words
      const words = text.split(/\s+/);
      const reflectedWords = words.map(word => {
        // Check exact match first (lowercase)
        const key = word.toLowerCase();
        if (reflectionMap[key]) {
          return reflectionMap[key];
        }
        return word;
      });
      return reflectedWords.join(' ');
    } else {
      // For Chinese, we iterate through keys and replace
      // Note: Simple replacement can be dangerous if keys overlap, 
      // but for this simple Eliza implementation, we scan the string.
      // To avoid re-replacing words we just replaced (e.g. Me -> You -> Me),
      // we can tokenize. However, Chinese segmentation is hard without a library.
      // We will use a simple approach: iterate through the string char by char/window
      // or use a placeholder method.
      
      // Better approach for Chinese without tokenizer: 
      // Sort keys by length (descending) to match longest phrases first.
      let result = text;
      
      // We need a way to mark replaced tokens to avoid double replacement.
      // Using a temporary placeholder unlikely to be in text.
      const keys = Object.keys(reflectionMap).sort((a, b) => b.length - a.length);
      
      // Use a token array to build the result
      // This is a naive implementation but works for basic Eliza logic
      let temp = result;
      for (const key of keys) {
         // Replace key with a unique placeholder if found
         // We use a simple marker like {{_INDEX_}}
      }
      
      // Actually, a safer way for Chinese in this context:
      // Split string by known keys? No.
      // Let's do a single pass replacement using a regex constructed from all keys.
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
