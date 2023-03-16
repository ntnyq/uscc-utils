export interface ParseResult {
  isValid: boolean
  category: string
  type: string
}

export interface ParseOptions {
  unknownCategory?: string
  unknownType?: string
}
