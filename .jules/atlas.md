## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2025-06-14 - Test Suite Robustness & ID Generation
**Learning:** Tests for `ElizaBot` fallback logic previously failed because they didn't account for the `/(.*)/i` catch-all rule which is evaluated before pure fallbacks. Additionally, message IDs in `App.tsx` were generated using `Date.now()`, which can lead to collisions.
**Action:** Updated tests to verify responses against both fallbacks and catch-all rules. Replaced `Date.now()` with `crypto.randomUUID()` with a fallback to `Date.now()` for older browsers in `App.tsx`.
