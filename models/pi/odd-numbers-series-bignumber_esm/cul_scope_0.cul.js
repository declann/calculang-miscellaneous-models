// some pi day release prep... leibniz series for pi
// watch: https://youtu.be/HrRMnzANHHs by Matt Parker (@standupmaths)

// 1/1 - 1/3 + 1/5 - 1/7 + ... = pi/4

// starting at 1 i.e. term 1 = 1/1, 2=-1/3, ...

import BigNumber from "./bignumber.js";

BigNumber.set({ DECIMAL_PLACES: 100, ROUNDING_MODE: 4 });

export const term_number = () => term_number_in;

export const sign = () => Math.pow(-1, term_number() - 1); // +, -, +, -, ...

export const denominator = () => (term_number() - 1) * 2 + 1; // odd number series

export const term = () => /*sign() **/ (new BigNumber("1").dividedBy(denominator())).times(sign()) //(1 / denominator());

// abstract this ...
export const series_sum_of_first_10_terms = () =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(
    (acc, term_number_in) => acc.plus(term({ term_number_in })),
    new BigNumber(0)
  );

/*export const series_sum_of_first_9_terms = () =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(
    (acc, term_number_in) => acc + term({ term_number_in }),
    0
  );
*/

// 0.76045990473235055278398931649706