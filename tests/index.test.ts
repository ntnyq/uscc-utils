import { describe, expect, it } from 'vitest'
import {
  USCC_CHARS,
  USCC_PATTERN,
  USCC_WEIGHTS,
  parse,
  validate,
} from 'uscc-utils'

const validCodes = [
  `123456789012345678`,
  `91110108551385082Q`,
]

const invalidCodes = [
  // length
  ``,
  `123`,

  // pattern
  `FOOBARFOOBARFOOBAR`,

  // checksum
  `91110108551385082F`,
]

describe(`constants`, () => {
  it(`should match`, () => {
    validCodes.forEach(code => {
      expect(code).toMatch(USCC_PATTERN)
    })
  })

  it(`snapshot`, () => {
    expect(USCC_CHARS).toMatchInlineSnapshot(`
      [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "T",
        "U",
        "W",
        "X",
        "Y",
      ]
    `)
    expect(USCC_WEIGHTS).toMatchInlineSnapshot(`
      [
        1,
        3,
        9,
        27,
        19,
        26,
        16,
        17,
        20,
        29,
        25,
        13,
        8,
        24,
        10,
        30,
        28,
      ]
    `)
  })
})

describe(`parse`, () => {
  it(`should pass`, () => {
    expect(parse()).toBeUndefined()
  })
})

describe(`validate`, () => {
  it(`should return true`, () => {
    validCodes.forEach(code => {
      expect(validate(code)).toBeTruthy()
    })
  })

  it(`should return false`, () => {
    invalidCodes.forEach(code => {
      expect(validate(code)).toBeFalsy()
    })
  })
})
