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