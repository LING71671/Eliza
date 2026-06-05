## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.

## 2024-06-05 - Fixing Unreachable Code in ElizaBot
**Learning:** A greedy `(.*)` regex pattern at the end of a rules list will consume all inputs, effectively rendering any designated fallback lists as unreachable dead code. Furthermore, fallback arrays typically do not support regex capture groups (`{0}`).
**Action:** When working with rule-based text processing (like ELIZA implementations), remove the greedy catch-all rule and instead rely on the designated fallback array. Be sure to strip out placeholder tokens (e.g., `{0}`) when moving responses from a catch-all regex rule into a simple fallback array.
