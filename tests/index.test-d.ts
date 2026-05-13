import { assertType, describe, expectTypeOf, it } from 'vitest'
import { explainUSCC, parseUSCC, splitUSCC, validateUSCC } from '../src'
import type {
  ParseOptions,
  ParseResult,
  USCCParts,
  ValidateOptions,
  ValidateUSCCResult,
} from '../src'

describe('typecheck', () => {
  it('should type match', () => {
    assertType<(code: string, options?: ValidateOptions) => boolean>(
      validateUSCC,
    )
    assertType<(code: string, options?: ParseOptions) => ParseResult>(parseUSCC)
    assertType<(code: string, options?: ValidateOptions) => ValidateUSCCResult>(
      explainUSCC,
    )
    assertType<(code: string, options?: ValidateOptions) => USCCParts | null>(
      splitUSCC,
    )
  })

  it('should return type match', () => {
    expectTypeOf(validateUSCC).returns.toBeBoolean()
    expectTypeOf(parseUSCC).returns.toExtend<ParseResult>()
    expectTypeOf(explainUSCC).returns.toExtend<ValidateUSCCResult>()
    expectTypeOf(splitUSCC).returns.toEqualTypeOf<USCCParts | null>()
  })

  it('should params type match', () => {
    expectTypeOf(validateUSCC).parameter(0).toEqualTypeOf<string>()
    expectTypeOf(validateUSCC)
      .parameter(1)
      .toEqualTypeOf<ValidateOptions | undefined>()
    expectTypeOf(parseUSCC).parameter(0).toEqualTypeOf<string>()
    expectTypeOf(parseUSCC)
      .parameter(1)
      .toEqualTypeOf<ParseOptions | undefined>()
    expectTypeOf(explainUSCC).parameter(0).toEqualTypeOf<string>()
    expectTypeOf(explainUSCC)
      .parameter(1)
      .toEqualTypeOf<ValidateOptions | undefined>()
    expectTypeOf(splitUSCC).parameter(0).toEqualTypeOf<string>()
    expectTypeOf(splitUSCC)
      .parameter(1)
      .toEqualTypeOf<ValidateOptions | undefined>()
  })
})
