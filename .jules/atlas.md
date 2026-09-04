## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2023-10-25 - Testing Catch-All Fallbacks in ElizaBot
**Learning:** ElizaBot's fallback testing must account for generic catch-all rules (e.g., `/(.*)/i`) defined in the keyword matching logic, as these can intercept unknown inputs before they hit the global fallback logic. These catch-all rules may also contain `{0}` placeholders that must be dynamically formatted with the user input in test assertions.
**Action:** When testing fallback behaviors in `ElizaBot.test.ts`, assert against a combined array of standard `fallbacks` and dynamically formatted responses from catch-all rules.
