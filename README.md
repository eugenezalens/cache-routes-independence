# Modern Frontend Systems: Cache, Routes, and Independence

Public Next.js architecture project for YouTube.

This repository is not about building a few pages and calling it a system. It is a practical playground that shows how modern frontend systems are designed when cache behavior, route contracts, feature boundaries, and domain independence are treated as first-class decisions.

The visible UI is intentionally simple: users, posts, and comments. The real focus is the system underneath them.

## What This Project Demonstrates

- Cache-aware data flows instead of hidden fetch behavior.
- Route contracts instead of scattered string literals.
- Independent domain modules that can grow without leaking assumptions into each other.
- Clear layering between delivery, domain UI, reusable features, and infrastructure.
- A frontend architecture that stays readable as the codebase expands.

## Core Ideas

### Cache Is Explicit

Caching is treated as a design decision, not a side effect. The project shows where cache policies belong, how revalidation impacts UX, and how fresh data should move through the system without collapsing architectural boundaries.

### Routes Are Contracts

Page routes, API endpoints, and pagination params are modeled explicitly. That keeps navigation predictable and prevents brittle refactors caused by string-based routing scattered across the UI.

### Modules Stay Independent

Users, posts, and comments are separated into domain-oriented modules. Shared behavior lives in the right layer, so one module can evolve without silently coupling itself to another.

## Architecture Shape

The codebase is intentionally split into four layers:

1. `app` - Next.js App Router delivery layer, route segments, page composition, and server/client entry points.
2. `modules` - Domain-oriented UI and domain-specific orchestration for users, posts, and comments.
3. `features` - Reusable capabilities such as pagination, endpoint contracts, cache policy handling, and shared data-access concerns.
4. `core` - Low-level infrastructure including API helpers, environment handling, and HTTP error abstractions.

This structure keeps responsibilities obvious: where data access belongs, where contracts are defined, and how pages stay thin while the system grows.

## Working Areas In The App

- `Users` - browse user-focused pages and route composition.
- `Posts` - inspect modular page composition and related domain flows.
- `Comments` - explore another domain slice built on the same architectural rules.
- `Cache demo` - review how cache behavior and freshness decisions affect the app.

## Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint 9
- Zod
- Conform

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view the marketing page and start exploring the system.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run check-quality
```

## Why This Repository Exists

This project was built as a public YouTube example to demonstrate principal-level frontend thinking in a concrete codebase. The goal is not abstraction for its own sake. The goal is to make architectural decisions visible:

- where state should live,
- where data access should happen,
- how cache and revalidation influence UX,
- how contracts reduce routing fragility,
- and how a system can stay understandable under growth.

## Repository Focus

If you are reading this repository, the main value is not only the rendered pages. The main value is how the code is organized around:

- route helpers,
- endpoint contracts,
- pagination composition,
- cache-aware server interactions,
- and separation between app, modules, features, and core.

Browse the running pages first, then inspect the architecture behind them.
