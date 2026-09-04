## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2025-06-01 - Fix Flaky ElizaBot Fallback Tests
**Learning:** Chatbot testing often fails when unmatched input assertions strictly check for "fallbacks" but miss valid catch-all regex patterns (e.g. `/(.*)/i`). Additionally, testing generic behavior requires input devoid of common language keywords to prevent intercepting specific rule branches.
**Action:** When asserting fallback/generic behaviors in conversational tests, combine expected generic fallbacks with the substituted strings from catch-all rules. Ensure test input strings avoid common keywords (e.g., using "苹果橘子香蕉" instead of sentences with "我").
