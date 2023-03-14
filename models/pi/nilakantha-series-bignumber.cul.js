// http://www.maeckes.nl/Formule%20voor%20pi%20(Nilakantha)%20GB.html

import { range } from 'underscore'

import BigNumber from "./bignumber.js";

BigNumber.set({ DECIMAL_PLACES: 100, ROUNDING_MODE: 4 });

export const term_number = () => term_number_in;
export const terms = () => terms_in;

export const sign = () => Math.pow(-1, term_number() - 1); // +, -, +, -, ...

export const denominator = () => (term_number() * 2) * (term_number() * 2 + 1) * (term_number() * 2 + 2);

export const term = () => /*sign() **/ (new BigNumber("1").dividedBy(denominator())).times(sign()) //(1 / denominator());

/*export const sum_of_terms = () => range(1, terms() + 1).reduce(
    (acc, term_number_in) => acc + term({ term_number_in }),
    0);*/

export const sum_of_terms = () => {
    let res = new BigNumber(0), term_number_in = 1;

    while (term_number_in < terms()) {
        res = res.plus(term({ term_number_in })),
    
        term_number_in++;
    }

    return res;
}

export const pi_approximation = () => sum_of_terms().times(4).plus(3)// + 3