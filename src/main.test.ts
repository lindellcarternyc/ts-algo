import { greet } from './main'

describe('greet', () => {
  it(`should run a sanity check`, () => {
    expect(true).toBe(true)
  })

  it(`should return a string in the format 'Greet, <input>!'`, () => {
    const input = 'NAME'
    const exp = `Greet, NAME!`
    const act = greet(input)
    expect(act).toEqual(exp)
  })
})