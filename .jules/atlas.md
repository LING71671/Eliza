## 2024-05-15 - ElizaBot Catch-All Rules
**Learning:** ElizaBot's pattern matching logic treats `/(.*)/i` as a fallback rule instead of strictly utilizing the `fallbacks` array when tests use generic inputs that match `(.*)`.
**Action:** When asserting fallback behaviors in ElizaBot tests, ensure the expected responses include both the standard `fallbacks` array and the formatted responses from the `(.*)` catch-all rules, specifically replacing the `{0}` placeholders with the exact input string.
