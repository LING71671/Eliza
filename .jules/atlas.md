## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2025-06-01 - Fix flaky fallback tests in ElizaBot
**Learning:** ElizaBot script configuration includes catch-all rules like `/(.*)/i`. Tests that only verify `englishScript.fallbacks` will intermittently fail if the catch-all rule is triggered instead. Also, testing Chinese fallback requires choosing words safely to avoid keyword patterns such as `我`.
**Action:** When testing chatbot fallbacks, construct expected outputs considering both fallback pools and catch-all pattern rules, and make sure to correctly format any placeholders using the input string.
