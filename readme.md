# vendors

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

<!--lint disable no-html-->

List of (real<sup>†</sup>) vendor prefixes known to the web platform.
From [Wikipedia][wiki] and the [CSS 2.1 spec][spec].

† — real, as in, `mso-` and `prince-` are not included because they are
not valid.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install vendors
```

## Use

```js
import {vendors} from 'vendors'

console.log(vendors)
```

Yields:

```js
[
  'ah',
  'apple',
  'atsc',
  'epub',
  'hp',
  'khtml',
  'moz',
  'ms',
  'o',
  'rim',
  'ro',
  'tc',
  'wap',
  'webkit',
  'xv'
]
```

## API

This package exports the following identifiers: `vendors`.
There is no default export.

### `vendors`

List of vendor prefixes (`string[]`).

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/vendors/workflows/main/badge.svg

[build]: https://github.com/wooorm/vendors/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/vendors.svg

[coverage]: https://codecov.io/github/wooorm/vendors

[downloads-badge]: https://img.shields.io/npm/dm/vendors.svg

[downloads]: https://www.npmjs.com/package/vendors

[size-badge]: https://img.shields.io/bundlephobia/minzip/vendors.svg

[size]: https://bundlephobia.com/result?p=vendors

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[wiki]: https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes

[spec]: https://www.w3.org/TR/CSS21/syndata.html#vendor-keyword-history
