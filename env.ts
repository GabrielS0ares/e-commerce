import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  APP_URL: z.string().url(),
})

const parseEnv = envSchema.safeParse(process.env)

if (!parseEnv.success) {
  console.error(
    'Variaveis do ENV inválidas',
    parseEnv.error.flatten().fieldErrors,
  )

  throw new Error('Variaveis do ENV inválidas')
}

export const env = parseEnv.data
