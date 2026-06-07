## 2025-06-01 - Test Suite Introduction
**Learning:** The project is built with React, Vite, and Typescript, but completely lacked tests for its complex bot logic and UI components. JSDOM requires mocking `HTMLElement.prototype.scrollIntoView`.
**Action:** Introduced Vitest and React Testing Library. Added basic test suite for `ElizaBot.ts` and `App.tsx`. Future changes should maintain or extend this test coverage.

## 2023-10-25 - Node Scripts in Type Module Projects
**Learning:** The project uses `"type": "module"` in `package.json`. Node scratchpad scripts must use the `.cjs` extension to utilize CommonJS `require`, or use native ES module `import` syntax in `.js` files.
**Action:** Always use `.cjs` extension when writing temporary scripting files that use `require`. Remember to delete all temporary scripts before requesting code review.

## 2023-10-25 - Formatting Scripts
**Learning:** The project lacks a dedicated formatting script in `package.json` (e.g., no `pnpm format` command is available).
**Action:** Do not attempt to run `pnpm format`. Ensure code is well formatted manually or using programmatic AST-aware rewrites where possible.
