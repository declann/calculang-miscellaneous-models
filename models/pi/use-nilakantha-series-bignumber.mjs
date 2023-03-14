import {
  pi_approximation, sum_of_terms
} from './nilakantha-series-bignumber_esm/cul_scope_0.mjs';

console.log(sum_of_terms({terms_in:1}).toFixed())
console.log(pi_approximation({terms_in:1}).toFixed())
console.log(pi_approximation({terms_in:1e6}).toFixed()) // 