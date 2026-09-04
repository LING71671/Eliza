## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2025-06-26 - Test Suite Fixes
**Learning:** ElizaBot's testing suite was brittle when checking for fallbacks. Fallbacks in the application could either come from `script.fallbacks` or from generic catch-all rules `/(.*)/i`. Using generic string types assertions or randomly typed inputs could unpredictably hit generic catch-all responses instead.
**Action:** Always assert fallback behaviors in tests against both the explicit `fallbacks` array and the formatted catch-all rules to prevent flaky test behaviors, replacing the `{0}` placeholders in catch-all responses with the explicit test inputs.
