// http://www.maeckes.nl/Formule%20voor%20pi%20(Nilakantha)%20GB.html

import { range } from 'underscore';

import BigNumber from "./bignumber.js";

BigNumber.set({ DECIMAL_PLACES: 100, ROUNDING_MODE: 4 });

export const term_number = ({ term_number_in }) => term_number_in;
export const terms = ({ terms_in }) => terms_in;

export const sign = ({ term_number_in }) => Math.pow(-1, term_number({ term_number_in }) - 1); // +, -, +, -, ...

export const denominator = ({ term_number_in }) => term_number({ term_number_in }) * 2 * (term_number({ term_number_in }) * 2 + 1) * (term_number({ term_number_in }) * 2 + 2);

export const term = ({ term_number_in }) => /*sign() **/new BigNumber("1").dividedBy(denominator({ term_number_in })).times(sign({ term_number_in })); //(1 / denominator());

/*export const sum_of_terms = () => range(1, terms() + 1).reduce(
    (acc, term_number_in) => acc + term({ term_number_in }),
    0);*/

export const sum_of_terms = ({ terms_in }) => {
  let res = new BigNumber(0),term_number_in = 1;

  while (term_number_in < terms({ terms_in })) {
    res = res.plus(term({ term_number_in })),

    term_number_in++;
  }

  return res;
};

export const pi_approximation = ({ terms_in }) => sum_of_terms({ terms_in }).times(4).plus(3); // + 3