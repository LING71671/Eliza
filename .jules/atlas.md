## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2026-06-02 - Fallback Logic Consolidation
**Learning:** The ElizaScript configuration had redundant fallback mechanisms: a dedicated `fallbacks` array and a catch-all `/(.*)/i` pattern at the end of the keywords array. The catch-all pattern also intercepted inputs preventing the fallback logic from executing properly in tests.
**Action:** Consolidated the fallback mechanisms by removing the `/(.*)/i` patterns and moving their responses to the `fallbacks` arrays. Updated `ElizaBot.ts` to support the `{0}` placeholder within the fallback logic and correctly update `lastResponse`.
