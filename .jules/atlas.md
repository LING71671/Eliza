## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2026-06-29 - Testing ElizaBot Fallbacks
**Learning:** Fallback tests in ElizaBot need to account for catch-all regex patterns (like `/(.*)/i`) which format the response with the exact input string, instead of just the generic fallback arrays. Additionally, testing Chinese fallbacks requires inputs devoid of common keywords (like '我') to avoid falsely triggering specific patterns.
**Action:** Format the catch-all responses by replacing `{0}` with the input string and assert against the combined list of both standard fallbacks and the formatted catch-all responses.
