import { describe, expect, it } from 'vitest'
import { explainUSCC, splitUSCC, validateUSCC } from '../src'
import { checksumErrorCode, invalidCodes, validCodes } from './fixtures'

describe(validateUSCC, () => {
  it('all codes are valid', () => {
    validCodes.forEach(code => {
      expect(validateUSCC(code)).toBe(true)
    })
  })

  it('all codes are invalid', () => {
    invalidCodes.forEach(code => {
      expect(validateUSCC(code)).toBe(false)
    })
  })

  it('should support normalization by option', () => {
    expect(validateUSCC('  91370000728611939a  ')).toBe(false)
    expect(validateUSCC('  91370000728611939a  ', { normalize: true })).toBe(
      true,
    )
  })
})

describe(explainUSCC, () => {
  it('should return detailed invalid reason', () => {
    expect(explainUSCC('')).toStrictEqual({
      normalizedCode: '',
      isValid: false,
      errorCode: 'INVALID_LENGTH',
    })
    expect(explainUSCC('FOOBARFOOBARFOOBAR')).toStrictEqual({
      normalizedCode: 'FOOBARFOOBARFOOBAR',
      isValid: false,
      errorCode: 'INVALID_PATTERN',
    })
    expect(explainUSCC(checksumErrorCode)).toStrictEqual({
      normalizedCode: checksumErrorCode,
      isValid: false,
      errorCode: 'INVALID_CHECKSUM',
    })
  })
})

describe(splitUSCC, () => {
  it('should split valid code into parts', () => {
    expect(splitUSCC('91110108551385082Q')).toStrictEqual({
      registrationAuthorityCode: '9',
      entityTypeCode: '1',
      regionCode: '110108',
      organizationCode: '551385082',
      checkChar: 'Q',
    })
  })

  it('should return null for invalid code', () => {
    expect(splitUSCC('foo')).toBeNull()
  })
})
