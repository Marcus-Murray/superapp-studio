# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Superapp Studio is a TypeScript monorepo scaffold targeting a tablet‑first “superapp” that blends Figma‑like ideation, Notion‑like docs/tasks/PM, and AI code generation. Target device: Samsung S10 FE+ (Android). Cross‑platform foundation with npm workspaces.
- Workspace layout (planned):
  - apps/ — end‑user apps (mobile first; web/desktop later)
  - packages/ — shared libraries (ui, core, ai, sync, schema, tooling)
  - docs/ — design vision, architecture, roadmap

Requirements
- Node.js >= 18 (enforced via package.json engines)
- npm workspaces enabled (npm v7+)

Common commands
- Install all workspace dependencies (run at repo root):
  - PowerShell: npm install

- Build, Lint, Format, Test (repo root):
  - Build all workspaces (TypeScript project references):
    - npm run build
  - Lint/Format are placeholders for now.
  - Tests run per workspace (see below).

- Run a script in a specific workspace (examples):
  - App build/dev: npm run -w .\apps\ideation-app build | dev
  - App tests: npm run -w .\apps\ideation-app test (ensure core is built or run npm run build at root first)
  - Core package build/tests: npm run -w .\packages\core build | test
  - Across all workspaces (build via project refs is at root): npm run build

- Running a single test (Node's built-in test runner is configured):
  - Build first: npm run build
  - By name (core): npm run -w .\packages\core test -- --test-name-pattern "hello"
  - By name (app): npm run -w .\apps\ideation-app test -- --test-name-pattern "app can import"
  - By file (core): npm run -w .\packages\core test -- test\hello.test.js

High-level architecture and workflow
- Monorepo with npm workspaces:
  - apps/* consume shared packages from packages/*.
  - packages/* house cross‑cutting concerns (ui components, core domain logic, AI orchestration, sync/transport, schema/validation, tooling).
  - docs/ captures design/architecture/roadmap context informing implementation in apps/ and packages/.
- Dependency flow (intended): packages → apps (one‑way). Apps compose features by importing from shared packages. Workspaces are versioned internally and linked by npm during install.

Notes derived from README
- The repository is currently scaffolded. After creating apps/ and packages/, re‑run npm install to link workspaces.
- Vision: sketch/wireframe on tablet, auto‑sync to AI pipeline that generates boilerplates, manage projects/docs/tasks within the same app, resume on PC with ready‑to‑run repos.
