import { z } from 'zod'

export const postEditorSchema = z.object({
  title: z
    .string({ error: 'Title is required' })
    .trim()
    .min(3, { error: 'Title must be at least 3 characters long' })
    .max(100, { error: 'Title must not exceed 100 characters' }),

  body: z
    .string({ error: 'Post body is required' })
    .trim()
    .min(10, { error: 'Post body must be at least 10 characters long' }),
})
