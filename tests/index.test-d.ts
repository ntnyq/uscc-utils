import { assertType, describe, expectTypeOf, it } from 'vitest'
import { parseUSCC, validateUSCC } from '../src'
import type { ParseOptions, ParseResult } from '../src'

describe('typecheck', () => {
  it('should type match', () => {
    assertType<(code: string) => boolean>(validateUSCC)
    assertType<(code: string, options?: ParseOptions) => ParseResult>(parseUSCC)
  })

  it('should return type match', () => {
    expectTypeOf(validateUSCC).returns.toBeBoolean()
    expectTypeOf(parseUSCC).returns.toMatchTypeOf<ParseResult>()
  })

  it('should params type match', () => {
    expectTypeOf(validateUSCC).parameters.toEqualTypeOf<[string]>()
    expectTypeOf(parseUSCC).parameters.toEqualTypeOf<[string, ParseOptions?]>()
  })
})
