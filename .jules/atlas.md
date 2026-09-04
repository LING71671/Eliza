## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.

## 2023-10-25 - Fix Eliza fallback testing and state logic
**Learning:** The fallback logic wasn't fully covering the `{0}` reflection replacement, and tests asserting against `fallbacks` were failing when intercepted by the `/(.*)/i` rule.
**Action:** Always verify if a catch-all regex can intercept a test input before asserting against a static list. Also ensure that all chatbot response paths update state (like `lastResponse`) appropriately.
