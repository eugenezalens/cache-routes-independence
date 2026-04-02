import * as z from 'zod'

const isDev = process.env.NODE_ENV !== 'production'

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  APP_ORIGIN: z.url(),
  NEXT_PUBLIC_APP_ORIGIN: z.url(),
  API_ORIGIN: z.url(),
})

const parsed = EnvSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  APP_ORIGIN: process.env.APP_ORIGIN ?? (isDev ? 'http://localhost:3000' : undefined),
  NEXT_PUBLIC_APP_ORIGIN: process.env.NEXT_PUBLIC_APP_ORIGIN ?? (isDev ? 'http://localhost:3000' : undefined),
  API_ORIGIN: process.env.API_ORIGIN ?? 'https://jsonplaceholder.typicode.com',
})

if (!parsed.success) {
  console.error('❌ Invalid environment variables:')

  for (const issue of parsed.error.issues) {
    const path = issue.path.length ? issue.path.join('.') : '(root)'
    console.error(`- ${path}: ${issue.message}`)
  }

  throw new Error('Invalid environment variables')
}

export const env = parsed.data
export type TEnv = z.infer<typeof EnvSchema>
