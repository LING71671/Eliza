## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2025-06-01 - Proper testing for Eliza fallbacks
**Learning:** ElizaBot's fallback tests need to account for both exact matches in the `fallbacks` array and the `/(.*)/i` catch-all regex pattern rule. If an input hits the catch-all, the test must check against `catchAllResponses` initialized dynamically with the user input string replacing the `{0}` placeholder.
**Action:** ElizaBot tests now appropriately combine the array values to assert against dynamic outputs without assuming absolute fallback constants.
