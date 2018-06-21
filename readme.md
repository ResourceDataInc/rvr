# RVR

[![Build Status][travis-image]][travis-url]
[![NPM Version][npm-image]][npm-url]
[![Coverage][coveralls-image]][coveralls-url]

Get Runway Visual Range (RVR) values for airports from http://rvr.fly.faa.gov.

## Installation

```sh
npm install --save rvr
```

## Usage

```js
const rvr = require('rvr')

rvr('LAX').then(result => console.log(JSON.stringify(result, null, 2)))
```

### Output:

```json
{
  "airportId": "LAX",
  "lastUpdated": {
    "date": "06/21/2018",
    "time": "22:35:39"
  },
  "rvrValues": [
    {
      "RWY": "07R",
      "TD": "6500 ",
      "MP": "6500 ",
      "RO": "6500 ",
      "E": "0",
      "C": "0"
    },
    {
      "RWY": "25L",
      "TD": "6500 ",
      "MP": "6500 ",
      "RO": "6500 ",
      "E": "0",
      "C": "0"
    },
    {
      "RWY": "07L",
      "TD": "6500 ",
      "MP": "6500 ",
      "RO": "6500 ",
      "E": "0",
      "C": "0"
    },
    {
      "RWY": "25R",
      "TD": "6500 ",
      "MP": "6500 ",
      "RO": "6500 ",
      "E": "0",
      "C": "0"
    },
    {
      "RWY": "06R",
      "TD": "6500 ",
      "MP": "6500 ",
      "RO": "6500 ",
      "E": "0",
      "C": "0"
    },
    {
      "RWY": "24L",
      "TD": "6500 ",
      "MP": "6500 ",
      "RO": "6500 ",
      "E": "0",
      "C": "0"
    },
    {
      "RWY": "06L",
      "TD": "6500 ",
      "MP": "6500 ",
      "RO": "6500 ",
      "E": "0",
      "C": "0"
    },
    {
      "RWY": "24R",
      "TD": "6500 ",
      "MP": "6500 ",
      "RO": "6500 ",
      "E": "0",
      "C": "0"
    }
  ]
}
```

## API

### `rvr(airportId)`

### `rvr.fetch(airportId)`

#### `airportId`

Type: `string`

Description: A 3-letter IATA airport code.

## License

MIT © [Forrest Desjardins](https://github.com/fdesjardins)

[travis-url]: https://travis-ci.org/ResourceDataInc/rvr
[travis-image]: https://img.shields.io/travis/ResourceDataInc/rvr.svg?style=flat
[npm-url]: https://www.npmjs.com/package/rvr
[npm-image]: https://img.shields.io/npm/v/rvr.svg?style=flat
[coveralls-url]: https://coveralls.io/r/ResourceDataInc/rvr
[coveralls-image]: https://img.shields.io/coveralls/ResourceDataInc/rvr.svg?style=flat
