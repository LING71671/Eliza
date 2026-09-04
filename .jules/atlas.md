## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2025-06-01 - Fixing Non-deterministic Tests
**Learning:** ElizaBot's fallback logic relies heavily on both a predefined list of fallback responses and a generic `/(.*)/i` catch-all regex. Using `toContain` with *only* the fallbacks list leads to flaky tests, as the catch-all rule can intercept the input and format it dynamically using `{0}` substitution.
**Action:** Always assert fallback logic by joining both the `fallback` array and the `responses` array from the `/(.*)/i` regex rule (with `{0}` replaced by the test input string). Also, avoid using known dictionary keywords (e.g., '我') as input for fallback tests to prevent unintentional specific rule matching.
