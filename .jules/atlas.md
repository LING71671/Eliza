## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2025-06-17 - ElizaBot Fallback Test Fix
**Learning:** Fallback tests were brittle because they only checked `config.fallbacks` array, neglecting the `/(.*)/i` catch-all rule which also processes unmatched input and substitutes `{0}` placeholders.
**Action:** Always assert against the combined list of standard fallbacks and catch-all responses with replaced placeholders. For Chinese tests, use completely generic input (like "苹果很好吃") to avoid incidentally matching common keyword rules like "我" or "是".
