# Country to Currency

This is a simple Node.js package that provides a mapping from country names to their respective currencies.

## Installation

You can install this package using npm:

```bash
npm install country-to-currency
```

Usage
First, import the package:

```
const countryToCurrency = require('country-to-currency');
```

Then, you can use the getCurrency function to get the currency of a country:

```
const currency = countryToCurrency.getCurrency('United States');
console.log(currency); // 'USD'
```
