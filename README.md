# Utility Library for Date Manipulation

This utility library provides helpful functions for manipulating Date objects in JavaScript. It offers functionality for formatting dates, adding days to a date, and calculating the difference in days between two dates.

## Installation

You can install the package via npm:

```bash
npm install date-utils-js
```

## Usage

```javascript
const dateUtils = require('date-utils-js');

// Formatting a date
const formattedDate = dateUtils.formatDate(new Date(), 'YYYY-MM-DD'); // Output: '2024-05-05'

// Adding days to a date
const futureDate = dateUtils.addDays(new Date(), 7);

// Calculating the difference in days between two dates
const startDate = new Date('2024-04-01');
const endDate = new Date('2024-04-10');
const diffDays = dateUtils.diffInDays(startDate, endDate); // Output: 9
```

## API Reference

### `formatDate(date, format)`

Formats a Date object to the specified format.

- `date`: The Date object to format.
- `format`: The format string. Default is `'YYYY-MM-DD'`.

### `addDays(date, days)`

Adds a specified number of days to a Date object.

- `date`: The Date object to which days will be added.
- `days`: The number of days to add.

### `diffInDays(date1, date2)`

Calculates the difference in days between two Date objects.

- `date1`: The first Date object.
- `date2`: The second Date object.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
#   d a t e s e t t e r 
 
 