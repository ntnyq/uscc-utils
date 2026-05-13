import { USCC_CATEGORY_MAP } from './constants'
import type { ParseOptions, ParseResult } from './types'
import { explainUSCC } from './validate'

/**
 * 解析统一社会信用代码
 * @param code - 待解析的统一社会信用代码
 * @param options - 解析选项
 * @returns 解析结果 `ParseResult`
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
  const { unknownCategory = '', unknownType = '', normalize = false } = options
  const { isValid, normalizedCode } = explainUSCC(code, { normalize })

  if (!isValid) {
    return {
      isValid,
      category: unknownCategory,
      type: unknownType,
    }
  }

  const matched = USCC_CATEGORY_MAP[normalizedCode.charAt(0)]
  const category = matched?.category ?? unknownCategory
  const type = matched?.map[normalizedCode.charAt(1)] ?? unknownType

  return {
    isValid,
    category,
    type,
  }
}
