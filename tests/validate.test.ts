import { describe, expect, it } from 'vitest'
import { validateUSCC } from '../src'
import { invalidCodes, validCodes } from './fixtures'

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
})
