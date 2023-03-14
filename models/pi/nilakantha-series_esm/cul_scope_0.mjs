// http://www.maeckes.nl/Formule%20voor%20pi%20(Nilakantha)%20GB.html

import { range } from 'underscore';

export const term_number = ({ term_number_in }) => term_number_in;
export const terms = ({ terms_in }) => terms_in;

export const sign = ({ term_number_in }) => Math.pow(-1, term_number({ term_number_in }) - 1); // +, -, +, -, ...

export const denominator = ({ term_number_in }) => term_number({ term_number_in }) * 2 * (term_number({ term_number_in }) * 2 + 1) * (term_number({ term_number_in }) * 2 + 2);

export const term = ({ term_number_in }) => sign({ term_number_in }) * (1 / denominator({ term_number_in }));

/*export const sum_of_terms = () => range(1, terms() + 1).reduce(
    (acc, term_number_in) => acc + term({ term_number_in }),
    0);*/

export const sum_of_terms = ({ terms_in }) => {
  let res = 0,term_number_in = 1;

  while (term_number_in < terms({ terms_in })) {
    res += term({ term_number_in });
    term_number_in++;
  }

  return res;
};

export const pi_approximation = ({ terms_in }) => sum_of_terms({ terms_in }) * 4 + 3;