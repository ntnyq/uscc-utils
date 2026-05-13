/**
 * {@link parseUSCC} 的返回结果
 */
export interface ParseResult {
  /**
   * 统一社会信用代码的登记管理部门类别
   */
  category: string

  /**
   * 统一社会信用代码是否有效
   */
  isValid: boolean

  /**
   * 统一社会信用代码对应的机构类型
   */
  type: string
}

/**
 * {@link parseUSCC} 的选项
 */
export interface ParseOptions {
  /**
   * 未知类别时的占位文本
   */
  unknownCategory?: string

  /**
   * 未知类型时的占位文本
   */
  unknownType?: string

  /**
   * 在解析/校验前标准化输入
   * - 去除首尾空白
   * - 转为大写
   *
   * @default false
   */
  normalize?: boolean
}

/**
 * 校验相关函数的选项
 */
export interface ValidateOptions {
  /**
   * 在解析/校验前标准化输入
   * - 去除首尾空白
   * - 转为大写
   *
   * @default false
   */
  normalize?: boolean
}

/**
 * 校验失败原因
 */
export type USCCValidationErrorCode =
  | 'INVALID_LENGTH'
  | 'INVALID_PATTERN'
  | 'INVALID_CHECKSUM'

/**
 * 详细校验结果
 */
export interface ValidateUSCCResult {
  /**
   * 标准化后的输入代码
   */
  normalizedCode: string

  /**
   * 统一社会信用代码是否有效
   */
  isValid: boolean

  /**
   * 无效时的失败原因
   */
  errorCode?: USCCValidationErrorCode
}

/**
 * 有效统一社会信用代码的结构化字段
 */
export interface USCCParts {
  /**
   * 登记管理部门代码（第1位）
   */
  registrationAuthorityCode: string

  /**
   * 机构类别代码（第2位）
   */
  entityTypeCode: string

  /**
   * 行政区划代码（第3-8位）
   */
  regionCode: string

  /**
   * 主体标识码（第9-17位）
   */
  organizationCode: string

  /**
   * 校验码（第18位）
   */
  checkChar: string
}
