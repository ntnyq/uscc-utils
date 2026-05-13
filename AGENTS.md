# AGENTS.md

## Purpose

Guidance for AI coding agents working in this repository. Keep changes small, typed, and test-backed.

## Tooling And Commands

- Package manager: `pnpm` (see `packageManager` in `package.json`).
- Install: `pnpm install`
- Test: `pnpm test`
- Typecheck: `pnpm typecheck`
- Lint: `pnpm lint`
- Format: `pnpm format`
- Build: `pnpm build`
- Release precheck: `pnpm run release:check`

## Project Map

- `src/validate.ts`: USCC validation logic (length, pattern, checksum with weighted factors).
- `src/parse.ts`: parse helper that calls `validateUSCC` and maps category/type.
- `src/constants.ts`: regex and category/type mapping tables.
- `src/types.ts`: `ParseOptions` and `ParseResult`.
- `src/index.ts`: public API export surface.
- `tests/*.test.ts`: runtime tests.
- `tests/index.test-d.ts`: type-level API tests.

## Conventions

- Keep package zero-dependency unless explicitly justified.
- Keep ESM + TypeScript style consistent with existing files.
- If adding/removing public APIs, update `src/index.ts` exports and type tests in `tests/index.test-d.ts`.
- Prefer updating fixtures and assertions over introducing one-off test patterns.
- Preserve Chinese category/type semantics in `src/constants.ts`.

## Validation Pitfalls

- Checksum logic in `src/validate.ts` is sensitive to index/order changes.
- USCC character set excludes some letters by design; do not simplify to generic alphanumeric checks.
- Parser behavior for invalid codes must continue honoring `unknownCategory` and `unknownType` defaults.

## Docs

- API usage and examples: [README.md](./README.md)
- Distribution and build settings: [package.json](./package.json), [tsdown.config.ts](./tsdown.config.ts)
- JSR metadata: [jsr.json](./jsr.json)
