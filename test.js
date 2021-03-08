import test from 'tape'
import {vendors} from './index.js'

test('vendors', function (t) {
  var index = -1

  t.ok(Array.isArray(vendors), 'should be an `array`')

  while (++index < vendors.length) {
    t.equal(
      typeof vendors[index],
      'string',
      '`' + vendors[index] + '` should be a string'
    )
  }

  t.end()
})
