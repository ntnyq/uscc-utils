/**
 * 正则 统一社会信用代码
 * @see https://www.wikidata.org/wiki/Property:P6795
 * @link https://regexper.com/#%2F%5B1-9ANY%5D%5B123459%5D%28100000%7C110000%7C11010%5B1-9%5D%7C1101%5B1-9%5D%5Cd%7C110%5B2-9%5D%5Cd%7B2%7D%7C11%5B1-9%5D%5Cd%7B3%7D%7C%5B2-5%5D%5Cd%7B5%7D%7C6%5B0-4%5D%5Cd%7B4%7D%7C65%5B0-8%5D%5Cd%7B3%7D%7C6590%5Cd%7B2%7D%7C990000%29%5B0-9A-Z%5D%7B8%7D%5B0-9X%5D%5B0-9A-HJ-NPQRTUWXY%5D%2F
 */
// cSpell: disable-next-line
export const USCC_PATTERN = /[1-9ANY][123459](100000|110000|11010[1-9]|1101[1-9]\d|110[2-9]\d{2}|11[1-9]\d{3}|[2-5]\d{5}|6[0-4]\d{4}|65[0-8]\d{3}|6590\d{2}|990000)[0-9A-Z]{8}[0-9X][0-9A-HJ-NPQRTUWXY]/

/**
 * 统一社会信用代码长度
 */
export const USCC_LENGTH = 18

export const USCC_MOD = 31

/**
 * 未知
 */
export const USCC_UNKNOWN = `未知`

/**
 * 统一社会信用代码字符集
 */
export const USCC_CHARS = [
  `0`,
  `1`,
  `2`,
  `3`,
  `4`,
  `5`,
  `6`,
  `7`,
  `8`,
  `9`,
  `A`,
  `B`,
  `C`,
  `D`,
  `E`,
  `F`,
  `G`,
  `H`,
  `J`,
  `K`,
  `L`,
  `M`,
  `N`,
  `P`,
  `Q`,
  `R`,
  `T`,
  `U`,
  `W`,
  `X`,
  `Y`,
]

/**
 * 统一社会信用代码加权因子
 */
export const USCC_WEIGHTS = [
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

/**
 * 登记管理部门代码
 */
export const USCC_CATEGORY_MAP: Record<string, {
  category: string
  map: Record<string, string>
}> = {
  1: {
    category: `机构编制`,
    map: {
      1: `机关`,
      2: `事业单位`,
      3: `编办直接管理机构编制的群众团体`,
      9: `其他`,
    },
  },
  2: {
    category: `外交`,
    map: {
      1: `外国常驻新闻机构`,
      9: `其他`,
    },
  },
  3: {
    category: `司法行政`,
    map: {
      1: `律师执业机构`,
      2: `公证处`,
      3: `基层法律服务所`,
      4: `司法鉴定机构`,
      5: `仲裁委员会`,
      9: `其他`,
    },
  },
  4: {
    category: `文化`,
    map: {
      1: `外国在华文化中心`,
      9: `其他`,
    },
  },
  5: {
    category: `民政`,
    map: {
      1: `社会团体`,
      2: `民办非企业单位`,
      3: `基金会`,
      9: `其他`,
    },
  },
  6: {
    category: `旅游`,
    map: {
      1: `外国旅游部门常驻代表机构`,
      2: `港澳台地区旅游部门常驻内地（大陆）代表机构`,
      9: `其他`,
    },
  },
  7: {
    category: `宗教`,
    map: {
      1: `宗教活动场所`,
      2: `宗教院校`,
      9: `其他`,
    },
  },
  8: {
    category: `工会`,
    map: {
      1: `基层工会`,
      9: `其他`,
    },
  },
  9: {
    category: `工商`,
    map: {
      1: `企业`,
      2: `个体工商户`,
      3: `农民专业合作社`,
    },
  },
  A: {
    category: `中央军委改革和编制办公室`,
    map: {
      1: `军队事业单位`,
      9: `其他`,
    },
  },
  N: {
    category: `农业`,
    map: {
      1: `组级集体经济组织`,
      2: `村级集体经济组织`,
      3: `乡镇级集体经济组织`,
      9: `其他`,
    },
  },
  Y: {
    category: `其他`,
    map: {},
  },
}
