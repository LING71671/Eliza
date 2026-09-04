## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2024-07-10 - ElizaBot Fallback Test Flakiness
**Learning:** ElizaBot's `processInput` fallback logic checks both explicit fallbacks and "catch-all" keywords like `/(.*)/i`, and formats them using the `{0}` placeholder with user input. Tests previously only checked against the explicit `fallbacks` array or were extremely loose (checking length > 0), leading to test failures when the catch-all pattern was randomly selected instead.
**Action:** When testing bot fallback or default behaviors, ensure the expected response pool correctly combines all potential default arrays (e.g., `fallbacks` and catch-all rules) and correctly formats placeholders. Ensure test inputs avoid keywords (especially in Chinese tests where characters like `我` can trigger specific rules).
