## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.

## 2023-10-27 - Flaky Fallback Tests due to Catch-All Patterns
**Learning:** ElizaBot's `processInput` handles fallback logic via two paths: the `fallbacks` list *and* a `/(.*)/i` catch-all keyword pattern. Asserting only against `config.fallbacks` in tests creates flakiness when the catch-all pattern is matched first.
**Action:** Always test fallback logic by asserting against the combination of `config.fallbacks` and dynamically formatted catch-all responses (replacing `{0}` with test input). Also ensure Chinese fallback test inputs avoid generic keywords like "我" that trigger dedicated rules.
