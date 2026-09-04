## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2025-06-12 - Unique ID Generation in Frontend
**Learning:** `Date.now().toString()` was previously used for generating message IDs. This can lead to collisions if multiple messages are generated in the same millisecond or if tests run too quickly.
**Action:** Introduced a `generateId()` utility function using `crypto.randomUUID()` with a fallback to `Date.now() + Math.random()` for older browsers. Use this approach instead of `Date.now()` for generating IDs in the frontend.
