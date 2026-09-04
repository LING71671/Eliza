## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.

## 2024-07-03 - ElizaBot Fallback Tests
**Learning:** ElizaBot's fallback tests were failing because inputs like "xyz123randomstring" were being caught by the catch-all regex `/(.*)/i` in the script's `keywords` list instead of falling through to the generic `fallbacks` array.
**Action:** When testing bot fallbacks, always evaluate against both the standard `fallbacks` array and any catch-all rules, substituting `{0}` with the input string to match the bot's reflection behavior.
