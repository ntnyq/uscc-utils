import { USCC_CATEGORY_MAP } from './constants'
import { validateUSCC } from './validate'
import type { ParseOptions, ParseResult } from './types'

/**
 * parse uscc
 * @param code - code to parse
 * @param options - parse options
 * @returns parsed result `ParseResult`
 *
 * @example
 * ```
 * import { parseUSCC } from 'uscc-utils'
 * parseUSCC('91110108551385082Q') // { isValid: true, category: '工商', type: '企业' }
 * ```
 */
export function parseUSCC(
  code: string,
  options: ParseOptions = {},
): ParseResult {
  const { unknownCategory = '', unknownType = '' } = options
  const isValid = validateUSCC(code)

  if (!isValid) {
    return {
      isValid,
      category: unknownCategory,
      type: unknownType,
    }
  }

  const matched = USCC_CATEGORY_MAP[code.charAt(0)]
  const category = matched?.category ?? unknownCategory
  const type = matched?.map[code.charAt(1)] ?? unknownType

  return {
    isValid,
    category,
    type,
  }
}
