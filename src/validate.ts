import { USCC_PATTERN } from './constants'

/**
 * 统一社会信用代码长度
 */
const USCC_LENGTH = 18

/**
 * 统一社会信用代码 取模值
 */
const USCC_MOD = 31

/**
 * 统一社会信用代码字符集
 */
const USCC_CHARS = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'M',
  'N',
  'P',
  'Q',
  'R',
  'T',
  'U',
  'W',
  'X',
  'Y',
]

/**
 * 统一社会信用代码加权因子
 */
const USCC_WEIGHTS = [
  1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28,
]

/**
 * 校验统一社会信用代码
 * @param code - 统一社会信用代码
 * @returns 是否有效
 *
 * @example
 * ```
 * import { validateUSCC } from 'uscc-utils'
 * validateUSCC('91110108551385082Q')  // true
 * ```
 */
export function validateUSCC(code: string): boolean {
  if (code.length !== USCC_LENGTH) {
    return false
  }
  if (!USCC_PATTERN.test(code)) {
    return false
  }

  const sum = code
    .split('')
    .filter((_, idx) => idx < 17)
    .reduce(
      (acc, char, idx) => acc + USCC_CHARS.indexOf(char) * USCC_WEIGHTS[idx],
      0,
    )

  // sum % USCC_MOD could be 0
  return (
    USCC_CHARS[(USCC_MOD - (sum % USCC_MOD)) % USCC_MOD] === code.charAt(17)
  )
}
