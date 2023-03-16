import { describe, expect, it } from 'vitest'
import { validateUSCC } from 'uscc-utils'
import { invalidCodes, validCodes } from './fixtures'

describe('validateUSCC', () => {
  it('all codes are valid', () => {
    validCodes.forEach(code => {
      expect(validateUSCC(code)).toBeTruthy()
    })
  })

  it('all codes are invalid', () => {
    invalidCodes.forEach(code => {
      expect(validateUSCC(code)).toBeFalsy()
    })
  })
})
