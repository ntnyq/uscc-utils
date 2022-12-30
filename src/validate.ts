import {
  USCC_CHARS,
  USCC_LENGTH,
  USCC_PATTERN,
  USCC_WEIGHTS,
} from './constants'

/**
 * 校验统一社会信用代码
 * @param code 统一社会信用代码
 * @returns 是否有效
 */
export function validate (code: string) {
  if (code.length !== USCC_LENGTH) return false
  if (!USCC_PATTERN.test(code)) return false

  let checksum = 0

  for (let i = 0; i < 17; i++) {
    const char = code.charAt(i)
    const num = USCC_CHARS.indexOf(char)
    const weight = USCC_WEIGHTS[i]
    checksum += num * weight
  }
  checksum = 31 - (checksum % 31)

  return USCC_CHARS[checksum] === code.charAt(17)
}
