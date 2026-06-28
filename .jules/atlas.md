## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.
## 2025-06-03 - Fixing Flaky Tests in ElizaBot
**Learning:** ElizaBot's testing environment is fragile when asserting against expected fallback responses because the `(.*)` catch-all rules also generate valid, generic strings. Similarly, in the Chinese script, using inputs containing common keywords like "我" unexpectedly triggers specific rules instead of hitting the fallback.
**Action:** When testing ElizaBot's fallback logic, verify responses against a combined set of standard fallbacks and evaluated catch-all templates. Additionally, ensure test strings intended to trigger fallbacks are devoid of common trigger words.
