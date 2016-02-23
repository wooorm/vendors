/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module vendors
 * @fileoverview Test suite for `vendors`.
 */

'use strict';

/* eslint-env node */

/*
 * Module dependencies.
 */

var test = require('tape');
var vendors = require('./index.js');

/*
 * Tests.
 */

test('vendors', function (t) {
    t.ok(
        Array.isArray(vendors),
        'should be an `array`'
    );

    vendors.forEach(function (vendor) {
        t.equal(
            typeof vendor,
            'string',
            '`' + vendor + '` should be a string'
        );
    });

    t.end();
});
