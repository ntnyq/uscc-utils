import { describe, expect, it } from 'vitest'
import { parse } from 'uscc-utils'
import {
  checksumErrorCode,
  code1,
  code2,
  code3,
  code4,
  code5,
  invalidCodes,
  validCodes,
} from './fixtures'

const UNKNOWN = `Unknown`

describe(`parse`, () => {
  it(`should pass`, () => {
    [
      ...validCodes,
      ...invalidCodes,
    ].forEach(code => {
      expect(Object.keys(parse(code))).toEqual([`isValid`, `category`, `type`])
    })
  })

  it(`should parse as expected`, () => {
    expect(parse(``)).toMatchInlineSnapshot(`
      {
        "category": "未知",
        "isValid": false,
        "type": "未知",
      }
    `)
    expect(parse(checksumErrorCode)).toMatchInlineSnapshot(`
      {
        "category": "未知",
        "isValid": false,
        "type": "未知",
      }
    `)
    expect(parse(checksumErrorCode, {
      unknownCategory: UNKNOWN,
      unknownType: UNKNOWN,
    })).toMatchInlineSnapshot(`
      {
        "category": "Unknown",
        "isValid": false,
        "type": "Unknown",
      }
    `)
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
