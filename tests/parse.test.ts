import { describe, expect, it } from 'vitest'
import { parse } from 'uscc-utils'
import {
  code1,
  code2,
  code3,
  code4,
  code5,
  validCodes,
} from './fixtures'

describe(`parse`, () => {
  it(`should pass`, () => {
    validCodes.forEach(code => {
      expect(parse(code)).toHaveProperty(`isValid`)
    })
  })

  it(`should parse`, () => {
    expect(parse(code1)).toMatchInlineSnapshot(`
      {
        "category": "机构编制",
        "isValid": true,
        "type": "事业单位",
      }
    `)
    expect(parse(code2)).toMatchInlineSnapshot(`
      {
        "category": "工商",
        "isValid": true,
        "type": "企业",
      }
    `)
    expect(parse(code3)).toMatchInlineSnapshot(`
      {
        "category": "民政",
        "isValid": true,
        "type": "基金会",
      }
    `)
    expect(parse(code4)).toMatchInlineSnapshot(`
      {
        "category": "民政",
        "isValid": true,
        "type": "民办非企业单位",
      }
    `)
    expect(parse(code5)).toMatchInlineSnapshot(`
      {
        "category": "工商",
        "isValid": true,
        "type": "企业",
      }
    `)
  })
})
