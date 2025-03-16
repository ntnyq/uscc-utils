/**
 * Result of {@link parseUSCC}
 */
export interface ParseResult {
  /**
   * category of the USCC
   */
  category: string

  /**
   * whether the USCC is valid
   */
  isValid: boolean

  /**
   * type of the USCC
   */
  type: string
}

/**
 * Options of {@link parseUSCC}
 */
export interface ParseOptions {
  /**
   * placeholder for unknown category
   */
  unknownCategory?: string

  /**
   * placeholder for unknown type
   */
  unknownType?: string
}
