/* global describe, it */

const assert = require('chai').assert
const rvr = require('./index')

describe('rvr', () => {
  it('should exist', () => {
    assert(rvr !== undefined)
  })
  it('should expose a fetch function', () => {
    assert(rvr.fetch !== undefined)
  })
  it('should fetch RVR values', async () => {
    return rvr('LAX').then(values => {
      assert(values.airportId === 'LAX')
      assert(values.lastUpdated !== null)
      assert(values.rvrValues.length > 0)
    })
  })
})
