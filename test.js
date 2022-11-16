import assert from 'node:assert/strict'
import test from 'node:test'
import {vendors} from './index.js'

test('vendors', function () {
  let index = -1

  assert.ok(Array.isArray(vendors), 'should be an `array`')

  while (++index < vendors.length) {
    assert.equal(
      typeof vendors[index],
      'string',
      '`' + vendors[index] + '` should be a string'
    )
  }
})
