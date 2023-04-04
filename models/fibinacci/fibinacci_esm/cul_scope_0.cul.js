
    import { memoize } from 'underscore';
    //import memoize from 'lru-memoize';
    //import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?
    
    import { n_ as n$, fib_ as fib$ } from './fibinacci.cul.js?+memoed'; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!
    
    

////////// start n memo-loader code //////////
//const n$m = memoize(999999, isEqual)(n$);
export const n$m = memoize(n$, JSON.stringify);
export const n = (a) => {
  return n$m(a);
  // eslint-disable-next-line no-undef
  n$(); // never run, but here to "trick" calculang graph logic
};
////////// end n memo-loader code //////////



////////// start fib memo-loader code //////////
//const fib$m = memoize(999999, isEqual)(fib$);
export const fib$m = memoize(fib$, JSON.stringify);
export const fib = (a) => {
  return fib$m(a);
  // eslint-disable-next-line no-undef
  fib$(); // never run, but here to "trick" calculang graph logic
};
////////// end fib memo-loader code //////////


    