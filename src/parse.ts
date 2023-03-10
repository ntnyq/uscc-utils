import {
  USCC_CATEGORY_MAP,
  USCC_UNKNOWN,
} from './constants'
import type {
  ParseOptions,
  ParseResult,
} from './type'
import { validate } from './validate'

/**
 * parse uscc
 * @param code code to parse
 * @param options parse options
 * @returns parsed result `ParseResult`
 *
 * @example
 * ```
 * import { parse } from 'uscc-utils'
 * parse(`91110108551385082Q`) // { isValid: true, category: '工商', type: '企业' }
 * ```
 */
export function parse(code: string, options: ParseOptions = {}): ParseResult {
  const {
    unknownCategory = USCC_UNKNOWN,
    unknownType = USCC_UNKNOWN,
  } = options
  const isValid = validate(code)

  if (!isValid) {
    return {
      isValid,
      category: unknownCategory,
      type: unknownType,
    }
  }

  const matched = USCC_CATEGORY_MAP[code.charAt(0)]
  const category = matched.category
  const type = matched.map[code.charAt(1)] || unknownType

  return {
    isValid,
    category,
    type,
  }
}
