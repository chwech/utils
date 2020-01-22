import { serializeQueryStr, transferUrl, sleep, toType } from './utils.ts'

// serializeQueryStr
it('test function: serializeQueryStr. it serializes an object to string', () => {
  expect(serializeQueryStr({
    a: 1,
    b: 2
  })).toBe('?a=1&b=2')
})

// transferUrl
it('test function: transferUrl. it transfers an url via join value in array', () => {
  expect(transferUrl('/test', ['1', '2'])).toBe('/test/1/2')
})

// sleep
it('test function: sleep. it sleeps timeout, return a "done" string after timeout',async () => {
  const result = await sleep(2000)
  expect(result).toBe('done')
})

// toType
it('test function: toType. it checks a variable and return the variable type string', () => {
  const fn = jest.fn()
  const s = Symbol()
  const map = new Map()
  const set = new Set()
  const asyncFn = async () => {}
  // const bigint = 15346349309n
  
  expect(toType(NaN)).toBe('number')
  expect(toType(123)).toBe('number')
  expect(toType('123')).toBe('string')
  expect(toType(true)).toBe('boolean')
  expect(toType(false)).toBe('boolean')
  expect(toType(null)).toBe('null')
  expect(toType(undefined)).toBe('undefined')
  expect(toType(s)).toBe('symbol')
  // expect(toType(bigint)).toBe('bigint')

  expect(toType([])).toBe('array')
  expect(toType(map)).toBe('map')
  expect(toType(set)).toBe('set')
  expect(toType({})).toBe('object')
  expect(toType(fn)).toBe('function')
  expect(toType(asyncFn)).toBe('asyncfunction')
})
