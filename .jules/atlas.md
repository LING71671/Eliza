## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2025-07-06 - Test Suite Fix: Catch-all Fallbacks
**Learning:** ElizaBot's fallback tests were previously flaky because the logic could randomly choose a generic catch-all regex pattern (`/(.*)/i`) instead of a pure fallback string. The test only expected `englishScript.fallbacks` which missed the dynamic responses where `{0}` was substituted with the input string.
**Action:** When testing ElizaBot's generic responses, ensure tests build a combined set of both literal `fallbacks` and formatted catch-all `/(.*)/i` responses before checking `toContain(response)`.
