import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: 'node16',
  entries: ['src/index'],
  rollup: {
    esbuild: {
      charset: 'utf8',
    },
  },
})
