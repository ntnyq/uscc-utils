import { describe, expect, it } from 'vitest'
import { validate } from 'uscc-utils'
import {
  invalidCodes,
  validCodes,
} from './fixtures'

describe('validate', () => {
  it('all codes are valid', () => {
    validCodes.forEach(code => {
      expect(validate(code)).toBeTruthy()
    })
  })

  it('all codes are invalid', () => {
    invalidCodes.forEach(code => {
      expect(validate(code)).toBeFalsy()
    })
  })
})
