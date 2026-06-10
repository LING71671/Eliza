import { describe, it, expect, vi } from 'vitest';
import { generateId } from './utils';

describe('utils', () => {
  describe('generateId', () => {
    it('returns a string', () => {
      const id = generateId();
      expect(typeof id).toBe('string');
      expect(id.length).toBeGreaterThan(0);
    });

    it('generates unique ids', () => {
      const id1 = generateId();
      const id2 = generateId();
      expect(id1).not.toBe(id2);
    });

    it('uses fallback if crypto.randomUUID is not available', () => {
      // Mock crypto to be undefined temporarily
      const originalCrypto = global.crypto;

      // @ts-ignore
      delete global.crypto;

      const id = generateId();
      expect(typeof id).toBe('string');
      expect(id.length).toBeGreaterThan(0);

      // Restore
      global.crypto = originalCrypto;
    });
  });
});
