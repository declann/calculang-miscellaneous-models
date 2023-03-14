// leibniz formula for pi: https://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80
// watch: https://youtu.be/HrRMnzANHHs by Matt Parker (@standupmaths)

import { range } from 'underscore'

// 1/1 - 1/3 + 1/5 - 1/7 + ... = pi/4
// starting at 1 i.e. term 1 = 1/1, 2=-1/3, ...

export const term_number = () => term_number_in;
export const terms = () => terms_in;

export const sign = () => Math.pow(-1, term_number() - 1); // +, -, +, -, ...

export const denominator = () => (term_number() - 1) * 2 + 1; // odd number series

export const term = () => sign() * (1 / denominator());
/*
export const sum_of_terms = () => range(1, terms()).reduce(
  (acc, term_number_in) => acc + term({ term_number_in }),
  0);
*/

export const sum_of_terms = () => {
  let res = 0, term_number_in = 1;
  
  while(term_number_in < terms()) {
    res += term({term_number_in})
    term_number_in++;
  }

  return res
  }

export const sum_of_terms_times_4 = () => sum_of_terms() * 4


// abstract this ...
export const series_sum_of_first_10_terms = () =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(
    (acc, term_number_in) => acc + term({ term_number_in }),
    0
  );

export const series_sum_of_first_9_terms = () =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(
    (acc, term_number_in) => acc + term({ term_number_in }),
    0
  );



// 0.76045990473235055278398931649706