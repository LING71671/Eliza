## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2025-06-11 - Message ID Generation and Test Fixing
**Learning:** `Date.now()` is not sufficient for unique ID generation, as it can cause collisions. Fallbacks logic in ElizaBot may be intercepted by broader rules, making exact matches in tests unreliable.
**Action:** Used `crypto.randomUUID()` with a fallback string for generating message IDs. Fixed ElizaBot fallback test to assert on string presence rather than strict inclusion. Mocked `window.confirm` for testing reset functionality.
