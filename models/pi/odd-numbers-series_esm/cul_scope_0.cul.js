// leibniz formula for pi: https://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80
// watch: https://youtu.be/HrRMnzANHHs by Matt Parker (@standupmaths)

import { range } from 'underscore'

// 1/1 - 1/3 + 1/5 - 1/7 + ... = pi/4
// starting at 1 i.e. term 1 = 1/1, 2=-1/3, ...


// alternating sign: +, -, +, -, ...
export const sign = () => Math.pow(-1, term_number() - 1);

// denominator from sequence of odd numbers
export const denominator = () => (term_number() - 1) * 2 + 1;

// input: number of current term
export const term_number = () => term_number_in; 

// one term:
export const term = () => sign() * (1 / denominator());

// sum of terms (1 to terms input):
export const sum_of_terms = () => range(1, terms() + 1).reduce(
  (acc, term_number_in) => acc + term({ term_number_in }),
  0);

// pi approximation:
export const pi_approximation = () => sum_of_terms() * 4;

// input: total number of terms to sum
export const terms = () => terms_in;

/*export const sum_of_terms = () => {
  let res = 0, term_number_in = 1;
  
  while(term_number_in < terms()) {
    res += term({term_number_in})
    term_number_in++;
  }

  return res
  }*/
