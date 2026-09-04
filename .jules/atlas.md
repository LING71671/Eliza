## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.

## 2023-10-27 - Flaky Fallback Tests in ElizaBot
**Learning:** ElizaBot's pattern matching evaluates sequentially. A fallback test that checks only the `fallbacks` array might intermittently fail if the input matches a generic catch-all pattern (like `/(.*)/i`) that generates a response with `{0}` placeholders.
**Action:** When asserting fallback behaviors, tests must verify that the generated output is in the union of explicitly defined `fallbacks` AND formatted responses from catch-all rules.
