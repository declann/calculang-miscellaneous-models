var m = require('./fern');
var _ = require('underscore');

console.log('i_in,x,y')

_.forEach(_.range(0, 10000), (i_in) => {
  console.log(`${i_in},${m.x({ i_in })},${m.y({ i_in })}`);
});
