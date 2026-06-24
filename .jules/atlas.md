## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2026-06-24 - ElizaBot Fallback Test Flakiness
**Learning:** ElizaBot's fallback tests were failing or flaking because random strings can be matched by the catch-all rule `/(.*)/i` in the keywords array, instead of strictly hitting the `fallbacks` array. Also, Chinese generic inputs must avoid matching specific generic rules like "我".
**Action:** When testing fallbacks, always assert inclusion against both the `fallbacks` array and the formatted responses of the catch-all rule. Use input strings for Chinese fallbacks that avoid common matching keywords.
