## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.

## 2026-07-07 - Bot Fallback Testing Insights
**Learning:** ElizaBot's keyword matching logic prioritizes iterating through the keywords array, meaning catch-all rules like `/(.*)/i` act as standard fallback responses. Simple fallback tests may fail or be non-deterministic if they don't account for these catch-all patterns replacing `{0}` with the input string.
**Action:** Tests covering fallbacks should explicitly merge static `fallbacks` arrays with formatted responses from `/(.*)/i` rules to assert against all possible fallback states. Additionally, Chinese fallback tests must use inputs entirely devoid of common words like '我' to avoid false-positive keyword triggers.
