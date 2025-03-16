// @ts-check

import { defineESLintConfig } from '@ntnyq/eslint-config'

export default defineESLintConfig({
  typescript: {
    allowDefaultProject: ['build.config.ts', 'vitest.config.ts'],
    tsconfigPath: './tsconfig.json',
  },
})
