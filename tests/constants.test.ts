import { describe, expect, it } from 'vitest'
import { USCC_CATEGORY_MAP, USCC_PATTERN } from '../src'
import { patternErrorCodes, validCodes } from './fixtures'

describe('constants', () => {
  it('should match', () => {
    validCodes.forEach(code => {
      expect(code).toMatch(USCC_PATTERN)
    })
  })

  it('should not match', () => {
    patternErrorCodes.forEach(code => {
      expect(code).not.toMatch(USCC_PATTERN)
    })
  })

  it('should be full-string match', () => {
    expect(`x${validCodes[0]}x`).not.toMatch(USCC_PATTERN)
  })

  it('snapshot', () => {
    expect(USCC_CATEGORY_MAP).toMatchSnapshot()
  })
})
