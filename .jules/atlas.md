## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.

## 2024-05-23 - Fix ElizaBot Fallback Tests
**Learning:** ElizaBot's fallback tests need to account for catch-all rules like `/(.*)/i` which might intercept generic inputs instead of triggering standard `fallbacks`. Placeholders like `{0}` in these catch-all rules need to be replaced with the exact test input string. In addition, when testing Chinese responses, the test strings should be very careful not to contain common keywords like '我' that may trigger unintended specific logic over the fallback flow.
**Action:** Always format catch-all responses using the input string, and include them with the primary fallbacks when asserting return values in ElizaBot fallback tests. Use truly neutral input strings when intentionally targeting fallbacks.
