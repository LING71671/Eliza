## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.

## 2024-06-21 - Fixing flaky ElizaBot fallback tests
**Learning:** ElizaBot's fallback tests were previously flaky or too permissive because they did not account for the `/(.*)/i` catch-all rule, which can intercept inputs that fail to match specific keywords and substitute the input text into a `{0}` placeholder, returning that instead of a generic fallback string. Also, tests for generic fallbacks should avoid using input words that match generic fallback triggers like "我" (I), as they would test the specific rule instead of the intended fallback behavior.
**Action:** When testing fallback behavior in NLP/chatbot rulesets that use prioritized rule evaluation, ensure that test assertions check against both the strict fallback array and any dynamic catch-all rules.
