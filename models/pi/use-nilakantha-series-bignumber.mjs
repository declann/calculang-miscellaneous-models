import {
    pi_approximation, sum_of_terms
} from './nilakantha-series-bignumber_esm/cul_scope_0.mjs';

console.log(sum_of_terms({ terms_in: 1 }).toFixed());
console.log(pi_approximation({ terms_in: 1 }).toFixed());
console.log(pi_approximation({ terms_in: 1e6 }).toFixed());

// ans using 1e6 (1M) terms:

// 3.1415926535897932387126433832792017957459452741092124882086541815807967314969323542518228257404621996
// vs 
// 3.141592653589793238462643383279
// 3.141592653589793238 <-- this part is the same
