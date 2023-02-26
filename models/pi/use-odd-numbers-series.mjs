import {
  series_sum_of_first_10_terms,
  series_sum_of_first_9_terms,
  term,
} from './odd-numbers-series_esm/cul_scope_0.mjs';

import { range } from 'underscore';

console.log(series_sum_of_first_10_terms({})); // vs. 0.7604599_9_4732350:5055278
console.log(4 * series_sum_of_first_10_terms({})); // ...is not 3.0418399789...
console.log(4 * series_sum_of_first_9_terms({}));
console.log(
  2 * series_sum_of_first_9_terms({}) + 2 * series_sum_of_first_10_terms({})
);

console.log(range(1, 10).map((term_number_in) => term({ term_number_in })));

// from spec.model and spec.input_domains generate data

// https://stackoverflow.com/questions/18957972/cartesian-product-of-objects-in-javascript
function copy(obj) {
  var res = {};
  for (var p in obj) res[p] = obj[p];
  return res;
}

// https://stackoverflow.com/questions/18957972/cartesian-product-of-objects-in-javascript
function cartesianProduct(input, current) {
  if (!input || !input.length) {
    return [];
  }

  var head = input[0];
  var tail = input.slice(1);
  var output = [];

  for (var key in head) {
    for (var i = 0; i < head[key].length; i++) {
      var newCurrent = copy(current);
      newCurrent[key] = head[key][i];
      if (tail.length) {
        var productOfTail = cartesianProduct(tail, newCurrent);
        output = output.concat(productOfTail);
      } else output.push(newCurrent);
    }
  }
  return output;
}
