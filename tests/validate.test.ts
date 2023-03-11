import { describe, expect, it } from 'vitest'
import { validate } from 'uscc-utils'
import {
  invalidCodes,
  validCodes,
} from './fixtures'

describe('validate', () => {
  it('should return true', () => {
    validCodes.forEach(code => {
      expect(validate(code)).toBeTruthy()
    })
  })

  it('should return false', () => {
    invalidCodes.forEach(code => {
      expect(validate(code)).toBeFalsy()
    })
  })
})
