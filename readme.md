# vendors

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of vendor prefixes.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`vendors`](#vendors-1)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a little list of real (as in, `mso-` and `prince-` are not included
because they are not valid) vendor prefixes known to the web platform.
From [Wikipedia][wiki] and the [CSS 2.1 spec][spec].

## When should I use this?

You can use this package if you’re dealing with parsing and transforming CSS and
you don’t want to copy/paste these prefixes into each project.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install vendors
```

In Deno with [Skypack][]:

```js
import {vendors} from 'https://cdn.skypack.dev/vendors@2?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import {vendors} from 'https://cdn.skypack.dev/vendors@2?min'
</script>
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

## Types

This package is fully typed with [TypeScript][].

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

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

[skypack]: https://www.skypack.dev

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[wiki]: https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes

[spec]: https://www.w3.org/TR/CSS22/syndata.html#vendor-keyword-history
