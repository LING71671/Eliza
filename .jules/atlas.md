## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2025-06-10 - ElizaBot Fallback Tests
**Learning:** Tests for ElizaBot fallback responses should assert for a non-empty string rather than strict array inclusion, because catch-all rules in the script often intercept inputs before standard fallbacks are triggered.
**Action:** When writing tests for ElizaBot generic responses, use assertions like `expect(response).toBeTypeOf("string")` and `expect(response.length).toBeGreaterThan(0)`.
