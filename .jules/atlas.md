## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.

## 2023-10-25 - ElizaBot Fallback Test Logic
**Learning:** Fallback tests in ElizaBot need to account for both the pure `fallbacks` array and the catch-all `/(.*)/i` regex pattern rule, which formats strings with `{0}` replacing the user's input. Chinese text matching also easily falls into specific character traps if inputs contain common words like '我' instead of triggering true catch-alls.
**Action:** When testing fallback logic, generate possible responses by combining `fallbacks` with formatted responses from the catch-all pattern, and test Chinese fallbacks using strings unlikely to trigger specific keyword rules (e.g., "今天天气真的很好").
