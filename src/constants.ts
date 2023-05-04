/**
 * 正则 统一社会信用代码
 * @see https://www.wikidata.org/wiki/Property:P6795
 * @link https://regexper.com/#%2F%5B1-9ANY%5D%5B1-59%5D%5Cd%7B6%7D%5B%5CdA-Z%5D%7B8%7D%5B%5CdX%5D%5B%5CdA-HJ-NP-RTUW-Y%5D%2F
 */
export const USCC_PATTERN =
  // cSpell: disable-next-line
  /[1-9ANY][1-59]\d{6}[\dA-Z]{8}[\dX][\dA-HJ-NP-RTUW-Y]/

/**
 * 登记管理部门代码
 */
export const USCC_CATEGORY_MAP: Record<
  string,
  {
    category: string
    map: Record<string, string>
  }
> = {
  1: {
    category: '机构编制',
    map: {
      1: '机关',
      2: '事业单位',
      3: '编办直接管理机构编制的群众团体',
      9: '其他',
    },
  },
  2: {
    category: '外交',
    map: {
      1: '外国常驻新闻机构',
      9: '其他',
    },
  },
  3: {
    category: '司法行政',
    map: {
      1: '律师执业机构',
      2: '公证处',
      3: '基层法律服务所',
      4: '司法鉴定机构',
      5: '仲裁委员会',
      9: '其他',
    },
  },
  4: {
    category: '文化',
    map: {
      1: '外国在华文化中心',
      9: '其他',
    },
  },
  5: {
    category: '民政',
    map: {
      1: '社会团体',
      2: '民办非企业单位',
      3: '基金会',
      9: '其他',
    },
  },
  6: {
    category: '旅游',
    map: {
      1: '外国旅游部门常驻代表机构',
      2: '港澳台地区旅游部门常驻内地（大陆）代表机构',
      9: '其他',
    },
  },
  7: {
    category: '宗教',
    map: {
      1: '宗教活动场所',
      2: '宗教院校',
      9: '其他',
    },
  },
  8: {
    category: '工会',
    map: {
      1: '基层工会',
      9: '其他',
    },
  },
  9: {
    category: '工商',
    map: {
      1: '企业',
      2: '个体工商户',
      3: '农民专业合作社',
    },
  },
  A: {
    category: '中央军委改革和编制办公室',
    map: {
      1: '军队事业单位',
      9: '其他',
    },
  },
  N: {
    category: '农业',
    map: {
      1: '组级集体经济组织',
      2: '村级集体经济组织',
      3: '乡镇级集体经济组织',
      9: '其他',
    },
  },
  Y: {
    category: '其他',
    map: {},
  },
}
