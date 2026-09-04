## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.

## 2024-05-18 - Fix Fallback Mechanism in ElizaScript
**Learning:** The fallback mechanism was not working because the `/(.*)/i` catch-all pattern in the keywords array would intercept unmatched inputs and produce invalid responses containing `{0}` placeholders.
**Action:** Always prefer the dedicated `fallbacks` array for handling unrecognized inputs instead of relying on a catch-all pattern with dynamic `{0}` replacement that will resolve poorly for random strings. Keep the script rules and fallbacks distinct.
