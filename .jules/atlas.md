## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.

## $(date +%Y-%m-%d) - App/Bot Repetition Handling
**Learning:** ElizaBot logic uses a regex matcher that can fail to provide multiple responses for the same input and unintentionally skips rules if `finalResponse` matches `this.lastResponse`. It also requires handling empty `match[1]` properly to avoid returning `{0}` literal to the user.
**Action:** `ElizaBot.ts` response template logic requires a loop to exhaustively seek unused responses, properly failing the attempt if `remainder` fails for `{0}` placeholders.
