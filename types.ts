export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export type Language = 'en' | 'zh';

export interface ScriptItem {
  pattern: RegExp;
  responses: string[];
  key?: string; // The key to store in memory, e.g., 'mother'
  followUps?: string[]; // Responses to use if the key is already in memory
}

export interface ReflectionMap {
  [key: string]: string;
}

export interface ElizaConfig {
  initialMessages: string[];
  keywords: ScriptItem[];
  reflections: ReflectionMap;
  fallbacks: string[];
}