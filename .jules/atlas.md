## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2025-06-01 - Fixing ElizaBot fallback tests
**Learning:** Eliza bot catch-all rules fallback match logic can intercept generic text. Testing fallbacks must calculate possible responses carefully instead of relying on exact string matches, and inputs must avoid keywords that trigger separate rules.
**Action:** Formulate input test strings avoiding rule keywords and validate against array sets combining fallbacks and generated catch-all outputs.
