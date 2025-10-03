# Architecture

Initial foundation: TypeScript monorepo using npm workspaces.

- apps/
  - mobile (planned): React Native (Expo) for Android tablet-first design.
  - web (planned): Next.js for web access to documents and boards.
- packages/
  - ui: cross-platform UI kit (RN + web where feasible).
  - core: domain models (blocks, pages, canvases, projects).
  - ai: adapters for AI code generation pipelines.
  - sync: offline-first data sync and storage (e.g., CRDTs, IndexedDB/SQLite on device).
  - schema: shared types and validation (Zod/TypeScript).
  - tooling: scripts/CLIs for boilerplate generation and automation.

Key concerns
- Offline-first with conflict-free sync for tablet workflows.
- Modular feature flags for Figma- and Notion-like modules.
- Secure, privacy-conscious AI generation (local-first where possible, pluggable providers).
- Extensibility via plugin-like modules.
