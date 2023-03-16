import { USCC_CHARS, USCC_LENGTH, USCC_MOD, USCC_PATTERN, USCC_WEIGHTS } from './constants'

/**
 * 校验统一社会信用代码
 * @param code 统一社会信用代码
 * @returns 是否有效
 *
 * @example
 * ```
 * import { validateUSCC } from 'uscc-utils'
 * validateUSCC(`91110108551385082Q`)  // true
 * ```
 */
export function validateUSCC(code: string) {
  if (code.length !== USCC_LENGTH) return false
  if (!USCC_PATTERN.test(code)) return false

  let checksum = 0

  for (let i = 0; i < 17; i++) {
    const char = code.charAt(i)
    const num = USCC_CHARS.indexOf(char)
    const weight = USCC_WEIGHTS[i]
    checksum += num * weight
  }
  checksum = USCC_MOD - (checksum % USCC_MOD)

  return USCC_CHARS[checksum % USCC_MOD] === code.charAt(17)
}

/**
 * @deprecated renamed to `validateUSCC` for a semantic name
 */
export const validate = validateUSCC
