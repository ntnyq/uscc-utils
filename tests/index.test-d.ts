import { assertType, describe, expectTypeOf, it } from 'vitest'
import { parseUSCC, validateUSCC } from 'uscc-utils'
import type { ParseOptions, ParseResult } from 'uscc-utils'

describe('typecheck', () => {
  it('should return type match', () => {
    expectTypeOf(validateUSCC).returns.toBeBoolean()
    expectTypeOf(parseUSCC).returns.toMatchTypeOf<ParseResult>()
  })

  it('should params type match', () => {
    assertType<(code: string) => boolean>(validateUSCC)
    assertType<(code: string, options?: ParseOptions) => ParseResult>(parseUSCC)

    expectTypeOf(validateUSCC).parameter(0).toBeString()
    expectTypeOf(parseUSCC).parameter(0).toBeString()
    expectTypeOf(parseUSCC).parameter(1).toMatchTypeOf<ParseOptions | undefined>()
  })
})
