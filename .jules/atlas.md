## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2026-07-13 - Fixed Flaky Fallback Tests
**Learning:** The fallback logic in ElizaBot falls through either to a catch-all regex pattern `/(.*)/i` or true fallbacks. Previous tests only checked true fallbacks or used overly broad string type checks for Chinese due to keyword interference (like '我').
**Action:** Update fallback assertions to explicitly compute both possible catch-all responses (by replacing `{0}` with the input) and pure fallback strings, using neutral inputs that don't trigger specific conversational rules.
