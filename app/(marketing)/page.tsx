import { ButtonLink } from '@/components/ui/button'

import { CommentsRoutes } from '@/modules/comments'
import { PostsRoutes } from '@/modules/posts'
import { UsersRoutes } from '@/modules/users'

import { CacheDemo } from './_lib/client'

import type { Metadata } from 'next'

const proofPointList = [
  { value: '4 layers', label: 'app, modules, features, core' },
  { value: 'Cache-first', label: 'query and route behavior made explicit' },
  { value: 'Contract-driven', label: 'routes, endpoints, and pagination isolated' },
]

const architecturePillarList = [
  {
    eyebrow: 'Architecture',
    title: 'Feature boundaries stay readable under growth',
    description:
      'The codebase is split by responsibility: app for delivery, modules for domain UI, features for reusable behavior, and core for low-level infrastructure.',
  },
  {
    eyebrow: 'Caching',
    title: 'Caching is treated as a design decision, not a side effect',
    description:
      'The project demonstrates where cache policies belong, how revalidation affects UX, and how fresh data flows through the system without collapsing boundaries.',
  },
  {
    eyebrow: 'Routing',
    title: 'Routes are modeled as contracts instead of string soup',
    description:
      'Entity routes, endpoint definitions, pagination params, and client/server access patterns are separated into explicit contracts so navigation logic stays predictable.',
  },
]

const systemLayerList = [
  {
    name: 'App layer',
    details: 'Route segments, page composition, and delivery concerns for Next.js App Router.',
  },
  {
    name: 'Modules',
    details: 'Domain-oriented building blocks for users, posts, and comments.',
  },
  {
    name: 'Features',
    details:
      'Cross-cutting capabilities such as pagination, data access, endpoint contracts, and cache policy orchestration.',
  },
  {
    name: 'Core',
    details:
      'Foundational API helpers, environment validation, and HTTP error abstractions that remain framework-aware but domain-agnostic.',
  },
]

const designDecisionList = [
  {
    title: 'Cache is explicit',
    text: 'This project is built to show how a frontend architect reasons about freshness, invalidation, and data lifetime instead of hiding them inside random fetch calls.',
  },
  {
    title: 'Routes are typed at the edges',
    text: 'Page URLs, API endpoints, and pagination search params are described as contracts so refactors do not spread brittle string literals through the UI.',
  },
  {
    title: 'Modules stay independent',
    text: 'Users, posts, and comments can evolve without leaking internal assumptions into each other because domain UI and shared behavior are intentionally separated.',
  },
]

export const metadata: Metadata = {
  title: 'Modern Frontend Systems',
  description:
    'A public Next.js architecture playground that demonstrates cache strategy, route contracts, feature isolation, and principal-level frontend system design.',
}

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-231 flex-col gap-16 pb-16">
      <section
        aria-labelledby="landing-hero-title"
        className="relative overflow-hidden rounded-[1.75rem] border border-divider-subtle bg-surface-sunken px-xl py-16 shadow-md"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-0 -left-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute top-16 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative grid gap-xl lg:grid-cols-[1.4fr_0.9fr] lg:items-end">
          <div className="flex flex-col gap-lg">
            <div className="inline-flex w-fit rounded-full border border-divider px-sm py-xs text-xs font-medium tracking-[0.18em] text-content-secondary uppercase">
              Open Architecture Lab for YouTube
            </div>

            <div className="flex flex-col gap-md">
              <h1
                id="landing-hero-title"
                className="max-w-4xl text-4xl font-bold tracking-tight text-content-primary sm:text-5xl lg:text-6xl"
              >
                A free public project that shows how modern frontend systems are designed, not just screens.
              </h1>

              <p className="max-w-3xl text-base leading-8 text-content-secondary sm:text-lg">
                Built for my YouTube channel, this project demonstrates practical frontend architecture in Next.js:
                cache-aware data flows, route contracts, modular boundaries, and decisions that keep a growing codebase
                understandable.
              </p>
            </div>

            <div className="flex flex-wrap gap-sm">
              <ButtonLink href={UsersRoutes.browse()} aria-label="Explore users pages">
                Explore the system
              </ButtonLink>

              <ButtonLink
                href={PostsRoutes.browse()}
                aria-label="Open posts section"
                className="bg-surface-raised text-content-primary hover:bg-surface-raised/90 active:bg-surface-subtle"
              >
                View working modules
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-sm rounded-2xl border border-divider-subtle bg-surface-raised/80 p-md shadow-sm">
            <div className="text-xs font-medium tracking-[0.16em] text-content-muted uppercase">
              What this landing proves
            </div>
            {proofPointList.map((item) => (
              <div
                key={item.value}
                className="grid gap-xs border-t border-divider-subtle pt-sm first:border-t-0 first:pt-0"
              >
                <div className="text-2xl font-bold text-content-primary">{item.value}</div>
                <div className="text-sm leading-6 text-content-secondary">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="landing-pillars-title" className="grid gap-md lg:grid-cols-3">
        <h2 id="landing-pillars-title" className="sr-only">
          Core architecture pillars
        </h2>

        {architecturePillarList.map((pillar, index) => (
          <article
            key={pillar.title}
            aria-labelledby={`landing-pillar-title-${index}`}
            className="flex flex-col gap-md rounded-2xl border border-divider-subtle bg-surface-raised p-lg shadow-sm"
          >
            <div className="text-xs font-medium tracking-[0.16em] text-content-muted uppercase">{pillar.eyebrow}</div>
            <h3
              id={`landing-pillar-title-${index}`}
              className="text-2xl font-semibold tracking-tight text-content-primary"
            >
              {pillar.title}
            </h3>
            <p className="text-sm leading-7 text-content-secondary">{pillar.description}</p>
          </article>
        ))}
      </section>

      <section aria-labelledby="landing-system-section-title" className="grid gap-xl lg:grid-cols-[1.05fr_0.95fr]">
        <h2 id="landing-system-section-title" className="sr-only">
          System architecture and design decisions
        </h2>

        <article
          aria-labelledby="landing-system-shape-title"
          className="rounded-2xl border border-divider-subtle bg-surface-raised p-xl shadow-sm"
        >
          <div className="mb-lg flex flex-col gap-sm">
            <div className="text-xs font-medium tracking-[0.16em] text-content-muted uppercase">System shape</div>
            <h3 id="landing-system-shape-title" className="text-3xl font-semibold tracking-tight text-content-primary">
              Architecture that explains itself
            </h3>
            <p className="max-w-2xl text-sm leading-7 text-content-secondary">
              The goal is not to impress with abstraction. The goal is to make responsibilities obvious: where state
              lives, where data access belongs, where contracts are defined, and how pages stay thin while the system
              grows.
            </p>
          </div>

          <div className="grid gap-sm">
            {systemLayerList.map((layer, index) => (
              <div
                key={layer.name}
                className="grid gap-sm rounded-xl border border-divider-subtle bg-surface-subtle p-md md:grid-cols-[auto_1fr] md:items-start"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-divider bg-surface-raised text-sm font-semibold text-content-primary">
                  0{index + 1}
                </div>
                <div className="grid gap-xs">
                  <h3 className="text-lg font-medium text-content-primary">{layer.name}</h3>
                  <p className="text-sm leading-7 text-content-secondary">{layer.details}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article
          aria-labelledby="landing-why-it-matters-title"
          className="rounded-2xl border border-divider-subtle bg-surface-sunken p-xl shadow-md"
        >
          <div className="mb-lg flex flex-col gap-sm">
            <div className="text-xs font-medium tracking-[0.16em] text-content-muted uppercase">Why this matters</div>
            <h3
              id="landing-why-it-matters-title"
              className="text-3xl font-semibold tracking-tight text-content-primary"
            >
              Cache, routes, and independence are not isolated topics
            </h3>
            <p className="text-sm leading-7 text-content-secondary">
              They are the pressure points that decide whether a frontend stays maintainable. This repository is
              structured to show how those concerns connect in a real codebase.
            </p>
          </div>

          <div className="grid gap-sm">
            {designDecisionList.map((decision) => (
              <div
                key={decision.title}
                className="rounded-xl border border-divider-subtle bg-surface-raised p-md shadow-sm"
              >
                <h3 className="text-lg font-medium text-content-primary">{decision.title}</h3>
                <p className="mt-xs text-sm leading-7 text-content-secondary">{decision.text}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <CacheDemo />

      <section
        aria-labelledby="landing-cta-title"
        className="rounded-2xl border border-divider-subtle bg-surface-raised p-xl shadow-sm"
      >
        <div className="grid gap-lg lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="flex flex-col gap-sm">
            <div className="text-xs font-medium tracking-[0.16em] text-content-muted uppercase">Call to action</div>
            <h2 id="landing-cta-title" className="text-3xl font-semibold tracking-tight text-content-primary">
              Browse the working parts, then inspect the architecture behind them.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-content-secondary">
              Users, posts, and comments are only the visible surface. The real value is the system underneath: route
              helpers, endpoint contracts, pagination composition, cache-aware server actions, and clear separation
              between features and domains.
            </p>
          </div>

          <div className="flex flex-wrap gap-sm lg:justify-end">
            <ButtonLink href={UsersRoutes.browse()} aria-label="Open users module">
              Users
            </ButtonLink>
            <ButtonLink href={PostsRoutes.browse()} aria-label="Open posts module">
              Posts
            </ButtonLink>
            <ButtonLink href={CommentsRoutes.browse()} aria-label="Open comments module">
              Comments
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  )
}
