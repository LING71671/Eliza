## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2025-06-15 - Fixing flaky test assertions\n**Learning:** Tests for ElizaBot fallback responses must assert against both default fallback list and catch-all `(.*)` responses formatted with `{0}` placeholders, rather than relying on weak `typeof` string checks.\n**Action:** Replaced weak assertions with accurate array inclusions for robust coverage.\n
