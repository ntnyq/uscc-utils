import { describe, expect, it } from 'vitest'
import {
  USCC_CATEGORY_MAP,
  USCC_CHARS,
  USCC_LENGTH,
  USCC_MOD,
  USCC_PATTERN,
  USCC_UNKNOWN,
  USCC_WEIGHTS,
} from 'uscc-utils'
import {
  patternErrorCodes,
  validCodes,
} from './fixtures'

describe(`constants`, () => {
  it(`should match`, () => {
    validCodes.forEach(code => {
      expect(code).toMatch(USCC_PATTERN)
    })
  })

  it(`should not match`, () => {
    patternErrorCodes.forEach(code => {
      expect(code).not.toMatch(USCC_PATTERN)
    })
  })

  it(`snapshot`, () => {
    expect(USCC_MOD).toMatchInlineSnapshot('31')
    expect(USCC_LENGTH).toMatchInlineSnapshot('18')
    expect(USCC_UNKNOWN).toMatchInlineSnapshot('"未知"')
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
    expect(USCC_CATEGORY_MAP).toMatchInlineSnapshot(`
      {
        "1": {
          "category": "机构编制",
          "map": {
            "1": "机关",
            "2": "事业单位",
            "3": "编办直接管理机构编制的群众团体",
            "9": "其他",
          },
        },
        "2": {
          "category": "外交",
          "map": {
            "1": "外国常驻新闻机构",
            "9": "其他",
          },
        },
        "3": {
          "category": "司法行政",
          "map": {
            "1": "律师执业机构",
            "2": "公证处",
            "3": "基层法律服务所",
            "4": "司法鉴定机构",
            "5": "仲裁委员会",
            "9": "其他",
          },
        },
        "4": {
          "category": "文化",
          "map": {
            "1": "外国在华文化中心",
            "9": "其他",
          },
        },
        "5": {
          "category": "民政",
          "map": {
            "1": "社会团体",
            "2": "民办非企业单位",
            "3": "基金会",
            "9": "其他",
          },
        },
        "6": {
          "category": "旅游",
          "map": {
            "1": "外国旅游部门常驻代表机构",
            "2": "港澳台地区旅游部门常驻内地（大陆）代表机构",
            "9": "其他",
          },
        },
        "7": {
          "category": "宗教",
          "map": {
            "1": "宗教活动场所",
            "2": "宗教院校",
            "9": "其他",
          },
        },
        "8": {
          "category": "工会",
          "map": {
            "1": "基层工会",
            "9": "其他",
          },
        },
        "9": {
          "category": "工商",
          "map": {
            "1": "企业",
            "2": "个体工商户",
            "3": "农民专业合作社",
          },
        },
        "A": {
          "category": "中央军委改革和编制办公室",
          "map": {
            "1": "军队事业单位",
            "9": "其他",
          },
        },
        "N": {
          "category": "农业",
          "map": {
            "1": "组级集体经济组织",
            "2": "村级集体经济组织",
            "3": "乡镇级集体经济组织",
            "9": "其他",
          },
        },
        "Y": {
          "category": "其他",
          "map": {},
        },
      }
    `)
  })
})
