## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2026-06-08 - Fallbacks Configuration Bug
**Learning:** The Eliza script configurations contained dead code. A catch-all regex `/(.*)/i` at the end of the keywords array intercepted all unmatched inputs, preventing the system from ever accessing the dedicated `fallbacks` array.
**Action:** Always ensure that static catch-all mechanisms (like a fallbacks array) are not overshadowed by greedy wildcard regex rules in pattern-matching logic.
