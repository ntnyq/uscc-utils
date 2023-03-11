
export const code1 = '123456789012345678'

/**
 * 山东步长制药股份有限公司
 */
export const code2 = '91370000728611939A'

/**
 * 中国红十字基金会
 */
export const code3 = '531000005000160090'

/**
 * 河南省嵩山少林寺文化院
 */
export const code4 = '52410000663412719U'

/**
 * 小米科技有限责任公司
 */
export const code5 = '91110108551385082Q'

export const validCodes = [
  code1,
  code2,
  code3,
  code4,
  code5,
]

export const patternErrorCodes = [
  '',
  '123',
  'FOOBARFOOBARFOOBAR',
]

/**
 * checksum
 */
export const checksumErrorCode = '91110108551385082F'

export const invalidCodes = [
  ...patternErrorCodes,
  checksumErrorCode,
]
