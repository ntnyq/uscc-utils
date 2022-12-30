/**
 * 正则 统一社会信用代码
 * @see https://www.wikidata.org/wiki/Property:P6795
 * @link https://regexper.com/#%2F%5B1-9ANY%5D%5B123459%5D%28100000%7C110000%7C11010%5B1-9%5D%7C1101%5B1-9%5D%5Cd%7C110%5B2-9%5D%5Cd%7B2%7D%7C11%5B1-9%5D%5Cd%7B3%7D%7C%5B2-5%5D%5Cd%7B5%7D%7C6%5B0-4%5D%5Cd%7B4%7D%7C65%5B0-8%5D%5Cd%7B3%7D%7C6590%5Cd%7B2%7D%7C990000%29%5B0-9A-Z%5D%7B8%7D%5B0-9X%5D%5B0-9A-Y%5D%2F
 */
export const USCC_PATTERN = /[1-9ANY][123459](100000|110000|11010[1-9]|1101[1-9]\d|110[2-9]\d{2}|11[1-9]\d{3}|[2-5]\d{5}|6[0-4]\d{4}|65[0-8]\d{3}|6590\d{2}|990000)[0-9A-Z]{8}[0-9X][0-9A-Y]/

/**
 * 统一社会信用代码长度
 */
export const USCC_LENGTH = 18

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
