import { assertType, describe, expectTypeOf, it } from 'vitest'
import { parse, validate } from 'uscc-utils'
import type { ParseOptions, ParseResult } from 'uscc-utils'

describe('typecheck', () => {
  it('should return type match', () => {
    expectTypeOf(validate).returns.toBeBoolean()
    expectTypeOf(parse).returns.toMatchTypeOf<ParseResult>()
  })

  it('should params type match', () => {
    assertType<(code: string) => boolean>(validate)
    assertType<(code: string, options?: ParseOptions) => ParseResult>(parse)
  })
})
