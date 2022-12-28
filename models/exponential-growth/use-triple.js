var m = require('./triple.js');
var _ = require('underscore');

const v0_in = 8;

console.table(
  _.range(0, 25).map((t_in) =>
    m.v({
      v0_in,
      t_in,
    }).toLocaleString(undefined, { minimumFractionDigits: 2  })
  )
);
