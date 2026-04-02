import { readdirSync } from 'node:fs'
import { join } from 'node:path'

import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import importPlugin from 'eslint-plugin-import'

const privateEntrypointsRegex = '^@/(?:modules|features|core)/[^/]+/(?!(?:server|client)(?:/|$)).+'

const getSystemNames = (systemDirectory) =>
  readdirSync(join(process.cwd(), systemDirectory), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)

const createSelfImportGuards = (systemDirectory, systemLabel) =>
  getSystemNames(systemDirectory).map((systemName) => ({
    files: [`${systemDirectory}/${systemName}/**/*.{ts,tsx,mts}`],
    ignores: [
      `${systemDirectory}/${systemName}/index.ts`,
      `${systemDirectory}/${systemName}/client.ts`,
      `${systemDirectory}/${systemName}/server.ts`,
    ],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              regex: privateEntrypointsRegex,
              message:
                'Import only through a public entrypoint: the system root, "/server", or "/client". Internal paths are private.',
            },
            {
              group: [
                `@/${systemDirectory}/${systemName}`,
                `@/${systemDirectory}/${systemName}/client`,
                `@/${systemDirectory}/${systemName}/server`,
              ],
              message: `Inside the ${systemName} ${systemLabel}, use relative imports instead of the public barrel.`,
            },
          ],
        },
      ],
    },
  }))

const selfImportGuards = [
  ...createSelfImportGuards('modules', 'module'),
  ...createSelfImportGuards('features', 'feature'),
]

export default defineConfig([
  // ===============================
  // Next.js defaults
  // ===============================
  ...nextVitals,
  ...nextTs,

  // ===============================
  // Project-wide ignores
  // ===============================
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),

  // ===============================
  // Import order & architecture
  // ===============================
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      // -------------------------------
      // Import Order
      // -------------------------------
      // Keep imports predictable and scannable.
      // External dependencies should be easy to distinguish from internal modules.
      // Shared UI building blocks are prioritized before feature and domain imports.
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'type'],
          pathGroups: [
            {
              pattern: '@/components/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/modules/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },

  // ===============================
  // GLOBAL ARCHITECTURE GUARDS
  // (Merged into a single rule definition)
  // ===============================
  {
    rules: {
      // -------------------------------
      // Public Entrypoints Only
      // -------------------------------
      // Internal implementation details stay private.
      // Cross-system imports are allowed only through stable public entrypoints:
      // root, /server, and /client.
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              regex: privateEntrypointsRegex,
              message:
                'Import only through a public entrypoint: the system root, "/server", or "/client". Internal paths are private.',
            },
          ],
        },
      ],
      // -------------------------------
      // Type Import Consistency
      // -------------------------------
      // Separate type-only imports from runtime imports.
      // This keeps intent explicit and prevents accidental runtime dependencies.
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
    },
  },

  // ===============================
  // MODULE SELF-IMPORT GUARDS
  // ===============================
  ...selfImportGuards,

  // ===============================
  // LAYER DIRECTION GUARDS
  // ===============================
  {
    files: ['core/**/*.{ts,tsx,mts}'],
    rules: {
      // -------------------------------
      // Core Isolation
      // -------------------------------
      // Core provides technical primitives and must stay independent from
      // application systems and domain modules.
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/features', '@/features/*', '@/features/**'],
              message: 'Core must not depend on features.',
            },
            {
              group: ['@/modules', '@/modules/*', '@/modules/**'],
              message: 'Core must not depend on modules.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['features/**/*.{ts,tsx,mts}'],
    rules: {
      // -------------------------------
      // Feature Independence From Domain
      // -------------------------------
      // Features are cross-project systems and must not depend on domain modules.
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/modules', '@/modules/*', '@/modules/**'],
              message: 'Features must not depend on modules.',
            },
          ],
        },
      ],
    },
  },
])
