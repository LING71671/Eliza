## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2025-06-01 - Testing ElizaBot Fallbacks
**Learning:** ElizaBot fallbacks might be intercepted by catch-all rules `/(.*)/i`, and Chinese test strings must be crafted carefully to avoid unintentional keyword matches (e.g., "我"). Testing fallback behaviors requires combining explicit `fallbacks` arrays with catch-all `responses` arrays (and replacing `{0}` placeholders with the exact input string) rather than using simple string type checks.
**Action:** When testing bot logic fallbacks, compute the complete set of possible valid responses dynamically and use `.toContain()` assertions. Avoid common language keywords in fallback test inputs.
