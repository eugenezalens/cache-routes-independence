import { NextResponse } from 'next/server'

const DEMO_DELAY_MS = 2000

function wait(delayMs: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delayMs)
  })
}

export async function GET() {
  await wait(DEMO_DELAY_MS)

  return NextResponse.json({
    delayMs: DEMO_DELAY_MS,
    generatedAt: new Date().toISOString(),
    requestToken: crypto.randomUUID(),
  })
}
