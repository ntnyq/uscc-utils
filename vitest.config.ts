import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: 'dot',
    coverage: {
      reporter: ['lcov', 'text', 'clover'],
    },
  },

  resolve: {
    alias: {
      'uscc-utils': fileURLToPath(new URL('./src/index.ts', import.meta.url)),
    },
  },
})
