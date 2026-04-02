'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { invalidateCacheDemoAction } from '../actions/invalidate-cache-demo.action'

type TDemoMode = 'cache' | 'no-store'

type TDemoResponse = {
  mode: TDemoMode
  delayMs: number
  cacheTtlSeconds: number
  serverDurationMs: number
  generatedAt: string
  requestToken: string
}

type TDemoResult = TDemoResponse & {
  clientDurationMs: number
}

const demoCards: Record<
  TDemoMode,
  {
    title: string
    description: string
    buttonLabel: string
  }
> = {
  cache: {
    title: 'Cached request',
    description:
      'The route fetches the delayed source with revalidation enabled. First click is slow, repeated clicks reuse the cached fetch result.',
    buttonLabel: 'Run cached request',
  },
  'no-store': {
    title: 'Fresh request',
    description: 'This route fetches the same source with no-store and pays the full artificial delay on every click.',
    buttonLabel: 'Run uncached request',
  },
}

const numberFormatter = new Intl.NumberFormat('en-US')

function formatDuration(durationMs: number) {
  return `${numberFormatter.format(durationMs)} ms`
}

function formatTimestamp(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(new Date(value))
}

export function CacheDemo() {
  const [pendingMode, setPendingMode] = useState<TDemoMode | null>(null)
  const [results, setResults] = useState<Partial<Record<TDemoMode, TDemoResult>>>({})
  const [errors, setErrors] = useState<Partial<Record<TDemoMode, string>>>({})
  const [isInvalidating, setIsInvalidating] = useState(false)
  const [invalidateError, setInvalidateError] = useState<string | null>(null)

  const runDemo = async (mode: TDemoMode): Promise<void> => {
    setPendingMode(mode)
    setErrors((current) => ({ ...current, [mode]: undefined }))

    const startedAt = performance.now()

    try {
      const response = await fetch(`/api/cache-demo?mode=${mode}`)

      if (!response.ok) {
        throw new Error('The demo route returned a non-success response.')
      }

      const payload = (await response.json()) as TDemoResponse
      const clientDurationMs = Math.round(performance.now() - startedAt)

      setResults((current) => ({
        ...current,
        [mode]: {
          ...payload,
          clientDurationMs,
        },
      }))
    } catch {
      setErrors((current) => ({
        ...current,
        [mode]: 'Request failed. Open the network tab and verify the demo route is reachable.',
      }))
    } finally {
      setPendingMode((current) => (current === mode ? null : current))
    }
  }

  const invalidateCache = async (): Promise<void> => {
    setIsInvalidating(true)
    setInvalidateError(null)

    try {
      await invalidateCacheDemoAction()
    } catch {
      setInvalidateError('Cache invalidation failed. Verify the server action can update the cache-demo tag.')
    } finally {
      setIsInvalidating(false)
    }
  }

  return (
    <section
      aria-labelledby="landing-cache-demo-title"
      className="rounded-2xl border border-divider-subtle bg-surface-raised p-xl shadow-sm"
    >
      <div className="grid gap-lg lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="flex flex-col gap-sm">
          <div className="text-xs font-medium tracking-[0.16em] text-content-muted uppercase">Live cache demo</div>
          <h2 id="landing-cache-demo-title" className="text-3xl font-semibold tracking-tight text-content-primary">
            Same delay, different cache policy
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-content-secondary">
            Both cards hit the same delayed route. The difference is whether the server fetches the slow source with
            next revalidate or forces a no-store request. The cached card also lets you invalidate the cache-demo tag
            through a server action so the next cached request recomputes immediately. The BFF responses disable browser
            caching so the speed-up comes from Next server fetch caching only.
          </p>
        </div>

        <div className="rounded-xl border border-divider-subtle bg-surface-sunken p-md text-sm leading-7 text-content-secondary">
          Click the cached button twice in a row. The second response should return much faster. Then use the invalidate
          button next to it to invalidate the cache-demo tag and force the next cached request to pay the full delay
          again without waiting for the TTL to expire.
        </div>
      </div>

      <div className="mt-lg grid gap-md lg:grid-cols-2">
        {(['cache', 'no-store'] as const).map((mode) => {
          const card = demoCards[mode]
          const result = results[mode]
          const error = errors[mode]
          const isPending = pendingMode === mode
          const showRevalidateButton = mode === 'cache'

          return (
            <article
              key={mode}
              className="grid min-h-96 grid-rows-[auto_1fr_auto] gap-md rounded-xl border border-divider-subtle bg-surface-sunken p-lg"
            >
              <div className="flex min-h-32 flex-col gap-xs">
                <h3 className="text-xl font-semibold text-content-primary">{card.title}</h3>
                <p className="text-sm leading-7 text-content-secondary">{card.description}</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-sm rounded-lg border border-divider-subtle bg-surface-raised/70 p-md text-center">
                <div className="flex flex-wrap items-center justify-center gap-sm">
                  <Button type="button" isDisabled={isPending || isInvalidating} onClick={() => runDemo(mode)}>
                    {isPending ? 'Waiting for response...' : card.buttonLabel}
                  </Button>

                  {showRevalidateButton && (
                    <Button type="button" isDisabled={isPending || isInvalidating} onClick={invalidateCache}>
                      Invalidate cache
                    </Button>
                  )}
                </div>

                <span className="text-sm text-content-muted">
                  Artificial delay: {formatDuration(result?.delayMs ?? 2000)}
                </span>

                {showRevalidateButton && invalidateError && (
                  <p className="text-sm text-feedback-error">{invalidateError}</p>
                )}
              </div>

              <div className="mt-auto grid gap-xs rounded-lg border border-divider-subtle bg-surface-raised p-md text-sm text-content-secondary">
                <div>
                  Server wait:{' '}
                  <span className="font-medium text-content-primary">
                    {result ? formatDuration(result.serverDurationMs) : 'Not requested yet'}
                  </span>
                </div>
                <div>
                  Client roundtrip:{' '}
                  <span className="font-medium text-content-primary">
                    {result ? formatDuration(result.clientDurationMs) : 'Not requested yet'}
                  </span>
                </div>
                <div>
                  Payload generated at:{' '}
                  <span className="font-medium text-content-primary">
                    {result ? formatTimestamp(result.generatedAt) : 'Not requested yet'}
                  </span>
                </div>
                <div>
                  Request token:{' '}
                  <span className="font-medium text-content-primary">
                    {result ? result.requestToken : 'Not requested yet'}
                  </span>
                </div>
              </div>

              {error && <p className="text-sm text-feedback-error">{error}</p>}
            </article>
          )
        })}
      </div>
    </section>
  )
}
