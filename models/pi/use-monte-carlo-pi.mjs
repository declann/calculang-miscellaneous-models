import {
    x, inside_count, pi_approximation
} from './monte-carlo-pi_esm/cul_scope_0.mjs';

import { range } from 'underscore';

console.log(range(0, 50).map(p_in => ({ x: x({ p_in }),
inside_count: inside_count({p_in}),
pi_approximation: pi_approximation({p_in})
 })
))


// bombs out due to recursion without stepping strategy
let out = range(1e3,1e6+1,1000).map(p_in => ({ p_in, x: x({ p_in }),
inside_count: inside_count({p_in}),
pi_approximation: pi_approximation({p_in})
 })
)

console.log(out[out.length-1])