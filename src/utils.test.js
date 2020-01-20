import { serializeQueryStr, transferUrl } from './utils.ts'

it('test function: serializeQueryStr. it serialize an object to string', () => {
  expect(serializeQueryStr({
    a: 1,
    b: 2
  })).toBe('?a=1&b=2')
})

it('test function: transferUrl. it transfer an url via join value in array', () => {
  expect(transferUrl('/test', ['1', '2'])).toBe('/test/1/2')
})