## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.

## 2023-10-25 - ElizaBot Fallback Test Flakiness
**Learning:** Fallback tests in `ElizaBot.test.ts` assumed that unmatched random input would strictly return a string from the `fallbacks` array. However, catch-all keyword patterns like `/(.*)/i` can also match random input, causing tests to intermittently fail when the bot selected a catch-all response instead of a standard fallback. Furthermore, using common Chinese words (like "我") in test input can unintentionally trigger specific rules.
**Action:** When writing tests for fallback behavior, assert inclusion against both standard fallbacks and the possible responses from the catch-all rule (`/(.*)/i`), formatting `{0}` placeholders with the user input. Avoid using common keywords in test input to ensure the fallback mechanism is genuinely being tested.
