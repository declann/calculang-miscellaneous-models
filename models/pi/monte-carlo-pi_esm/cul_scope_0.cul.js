
    import { memoize } from 'underscore';
    //import memoize from 'lru-memoize';
    //import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?
    
    import { p_ as p$, x_ as x$, y_ as y$, f_ as f$, inside_ as inside$, inside_count_ as inside_count$, ratio_ as ratio$, pi_approximation_ as pi_approximation$ } from './monte-carlo-pi.cul.js?+memoed'; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!
    
    

////////// start p memo-loader code //////////
//const p$m = memoize(999999, isEqual)(p$);
export const p$m = memoize(p$, JSON.stringify);
export const p = (a) => {
  return p$m(a);
  // eslint-disable-next-line no-undef
  p$(); // never run, but here to "trick" calculang graph logic
};
////////// end p memo-loader code //////////



////////// start x memo-loader code //////////
//const x$m = memoize(999999, isEqual)(x$);
export const x$m = memoize(x$, JSON.stringify);
export const x = (a) => {
  return x$m(a);
  // eslint-disable-next-line no-undef
  x$(); // never run, but here to "trick" calculang graph logic
};
////////// end x memo-loader code //////////



////////// start y memo-loader code //////////
//const y$m = memoize(999999, isEqual)(y$);
export const y$m = memoize(y$, JSON.stringify);
export const y = (a) => {
  return y$m(a);
  // eslint-disable-next-line no-undef
  y$(); // never run, but here to "trick" calculang graph logic
};
////////// end y memo-loader code //////////



////////// start f memo-loader code //////////
//const f$m = memoize(999999, isEqual)(f$);
export const f$m = memoize(f$, JSON.stringify);
export const f = (a) => {
  return f$m(a);
  // eslint-disable-next-line no-undef
  f$(); // never run, but here to "trick" calculang graph logic
};
////////// end f memo-loader code //////////



////////// start inside memo-loader code //////////
//const inside$m = memoize(999999, isEqual)(inside$);
export const inside$m = memoize(inside$, JSON.stringify);
export const inside = (a) => {
  return inside$m(a);
  // eslint-disable-next-line no-undef
  inside$(); // never run, but here to "trick" calculang graph logic
};
////////// end inside memo-loader code //////////



////////// start inside_count memo-loader code //////////
//const inside_count$m = memoize(999999, isEqual)(inside_count$);
export const inside_count$m = memoize(inside_count$, JSON.stringify);
export const inside_count = (a) => {
  return inside_count$m(a);
  // eslint-disable-next-line no-undef
  inside_count$(); // never run, but here to "trick" calculang graph logic
};
////////// end inside_count memo-loader code //////////



////////// start ratio memo-loader code //////////
//const ratio$m = memoize(999999, isEqual)(ratio$);
export const ratio$m = memoize(ratio$, JSON.stringify);
export const ratio = (a) => {
  return ratio$m(a);
  // eslint-disable-next-line no-undef
  ratio$(); // never run, but here to "trick" calculang graph logic
};
////////// end ratio memo-loader code //////////



////////// start pi_approximation memo-loader code //////////
//const pi_approximation$m = memoize(999999, isEqual)(pi_approximation$);
export const pi_approximation$m = memoize(pi_approximation$, JSON.stringify);
export const pi_approximation = (a) => {
  return pi_approximation$m(a);
  // eslint-disable-next-line no-undef
  pi_approximation$(); // never run, but here to "trick" calculang graph logic
};
////////// end pi_approximation memo-loader code //////////


    