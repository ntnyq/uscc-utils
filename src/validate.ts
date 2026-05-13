import { USCC_PATTERN } from './constants'
import type { USCCParts, ValidateOptions, ValidateUSCCResult } from './types'

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
  // oxlint-disable-next-line no-magic-numbers
  1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28,
] as const

/**
 * 标准化统一社会信用代码输入
 * @param code - 原始统一社会信用代码
 * @returns 标准化后的统一社会信用代码
 */
export function normalizeUSCC(code: string): string {
  return code.trim().toUpperCase()
}

function getCodeByOptions(code: string, options: ValidateOptions = {}): string {
  const { normalize = false } = options
  return normalize ? normalizeUSCC(code) : code
}

/**
 * 获取统一社会信用代码的详细校验结果
 * @param code - 统一社会信用代码
 * @param options - 校验选项
 * @returns 详细校验结果
 */
export function explainUSCC(
  code: string,
  options: ValidateOptions = {},
): ValidateUSCCResult {
  const normalizedCode = getCodeByOptions(code, options)

  if (normalizedCode.length !== USCC_LENGTH) {
    return { normalizedCode, isValid: false, errorCode: 'INVALID_LENGTH' }
  }

  if (!USCC_PATTERN.test(normalizedCode)) {
    return { normalizedCode, isValid: false, errorCode: 'INVALID_PATTERN' }
  }

  // 统一社会信用代码仅包含数字与大写字母
  // oxlint-disable-next-line typescript/no-misused-spread
  const sum = [...normalizedCode]
    .filter((_, idx) => idx < 17)
    .reduce(
      (acc, char, idx) => acc + USCC_CHARS.indexOf(char) * USCC_WEIGHTS[idx]!,
      0,
    )

  // sum % USCC_MOD 结果可能为 0
  const isValid =
    USCC_CHARS[(USCC_MOD - (sum % USCC_MOD)) % USCC_MOD] ===
    normalizedCode.charAt(17)

  if (!isValid) {
    return { normalizedCode, isValid: false, errorCode: 'INVALID_CHECKSUM' }
  }

  return { normalizedCode, isValid: true }
}

/**
 * 校验统一社会信用代码
 * @param code - 统一社会信用代码
 * @param options - 校验选项
 * @returns 是否有效
 *
 * @example
 * ```
 * import { validateUSCC } from 'uscc-utils'
 * validateUSCC('91110108551385082Q')  // true
 * ```
 */
export function validateUSCC(
  code: string,
  options: ValidateOptions = {},
): boolean {
  return explainUSCC(code, options).isValid
}

/**
 * 按标准结构拆分统一社会信用代码
 * @param code - 统一社会信用代码
 * @param options - 校验选项
 * @returns 若代码有效则返回结构化字段，否则返回 `null`
 */
export function splitUSCC(
  code: string,
  options: ValidateOptions = {},
): USCCParts | null {
  const { isValid, normalizedCode } = explainUSCC(code, options)
  if (!isValid) {
    return null
  }

  return {
    registrationAuthorityCode: normalizedCode.slice(0, 1),
    entityTypeCode: normalizedCode.slice(1, 2),
    regionCode: normalizedCode.slice(2, 8),
    organizationCode: normalizedCode.slice(8, 17),
    checkChar: normalizedCode.slice(17, 18),
  }
}
