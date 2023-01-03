import {
  USCC_CATEGORY_MAP,
  USCC_UNKNOWN,
} from './constants'
import { validate } from './validate'

export interface ParseResult {
  isValid: boolean
  category: string
  type: string
}

export function parse (code: string, {
  unknownCategory = USCC_UNKNOWN,
  unknownType = USCC_UNKNOWN,
} = {}): ParseResult {
  const isValid = validate(code)

  if (!isValid) {
    return {
      isValid,
      category: unknownCategory,
      type: unknownType,
    }
  }

  const matched = USCC_CATEGORY_MAP[code.charAt(0)]
  const category = matched.category
  const type = matched.map[code.charAt(1)] || unknownType

  return {
    isValid,
    category,
    type,
  }
}
