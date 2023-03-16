import { describe, expect, it } from 'vitest'
import { parseUSCC } from 'uscc-utils'
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

const UNKNOWN = 'Unknown'

describe('parseUSCC', () => {
  it('should return type match', () => {
    ;[...validCodes, ...invalidCodes].forEach(code => {
      expect(Object.keys(parseUSCC(code))).toEqual(['isValid', 'category', 'type'])
    })
  })

  it('should parse as expected', () => {
    expect(parseUSCC('')).toMatchInlineSnapshot(`
      {
        "category": "未知",
        "isValid": false,
        "type": "未知",
      }
    `)
    expect(parseUSCC(checksumErrorCode)).toMatchInlineSnapshot(`
      {
        "category": "未知",
        "isValid": false,
        "type": "未知",
      }
    `)
    expect(
      parseUSCC(checksumErrorCode, {
        unknownCategory: UNKNOWN,
        unknownType: UNKNOWN,
      }),
    ).toMatchInlineSnapshot(`
      {
        "category": "Unknown",
        "isValid": false,
        "type": "Unknown",
      }
    `)
    expect(parseUSCC(code1)).toMatchInlineSnapshot(`
      {
        "category": "机构编制",
        "isValid": true,
        "type": "事业单位",
      }
    `)
    expect(parseUSCC(code2)).toMatchInlineSnapshot(`
      {
        "category": "工商",
        "isValid": true,
        "type": "企业",
      }
    `)
    expect(parseUSCC(code3)).toMatchInlineSnapshot(`
      {
        "category": "民政",
        "isValid": true,
        "type": "基金会",
      }
    `)
    expect(parseUSCC(code4)).toMatchInlineSnapshot(`
      {
        "category": "民政",
        "isValid": true,
        "type": "民办非企业单位",
      }
    `)
    expect(parseUSCC(code5)).toMatchInlineSnapshot(`
      {
        "category": "工商",
        "isValid": true,
        "type": "企业",
      }
    `)
  })
})
