import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    `src/index`,
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    esbuild: {
      // TODO: wait https://github.com/unjs/unbuild/pull/190
      // charset: `utf8`,
    },
  },
})
