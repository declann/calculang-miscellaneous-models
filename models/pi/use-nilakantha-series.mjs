import {
  pi_approximation, sum_of_terms
} from './nilakantha-series_esm/cul_scope_0.mjs';

console.log(sum_of_terms({terms_in:1}))
console.log(pi_approximation({terms_in:1}))
console.log(pi_approximation({terms_in:2}))
console.log(pi_approximation({terms_in:11}))
console.log(pi_approximation({terms_in:12}))
console.log(pi_approximation({terms_in:500}))
console.log(pi_approximation({terms_in:5000}))
console.log(pi_approximation({terms_in:10000}))
console.log(pi_approximation({terms_in:1e7})) // 3.14159265358979:13
console.log(pi_approximation({terms_in:1e9})) // 3.14159265358979:13 Error creep