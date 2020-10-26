'use strict'

var test = require('tape')
var vendors = require('.')

test('vendors', function (t) {
  t.ok(Array.isArray(vendors), 'should be an `array`')

  vendors.forEach(function (vendor) {
    t.equal(typeof vendor, 'string', '`' + vendor + '` should be a string')
  })

  t.end()
})
