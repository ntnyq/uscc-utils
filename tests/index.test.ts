import { describe, expect, it } from 'vitest'
import { greet, msg } from '../src'

describe(`Group`, () => {
  it(`Should return message`, () => {
    expect(greet()).toBe(msg)
  })
})
