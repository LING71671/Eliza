## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2025-06-01 - ID Generation & Fallback Assertions
**Learning:** `Date.now()` is insufficient for generating unique IDs for React elements, especially when multiple state updates happen in the same millisecond or under Strict Mode. ElizaBot fallback tests were fragile because fallback strings and catch-all `/(.*)/i` rules were not mutually exclusive in assertions.
**Action:** Replaced `Date.now()` with a `generateId()` utility relying on `crypto.randomUUID()` with a fallback. Updated fallback tests to correctly predict responses from both fallback arrays and catch-all regex patterns formatted with the test input.
