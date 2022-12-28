
    import { memoize } from 'underscore';
    //import memoize from 'lru-memoize';
    //import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?
    
    import { v0_ as v0$, t_ as t$, v_ as v$ } from './triple.cul.js?+memoed'; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!
    
    

////////// start v0 memo-loader code //////////
//const v0$m = memoize(999999, isEqual)(v0$);
export const v0$m = memoize(v0$, JSON.stringify);
export const v0 = (a) => {
  return v0$m(a);
  // eslint-disable-next-line no-undef
  v0$(); // never run, but here to "trick" calculang graph logic
};
////////// end v0 memo-loader code //////////



////////// start t memo-loader code //////////
//const t$m = memoize(999999, isEqual)(t$);
export const t$m = memoize(t$, JSON.stringify);
export const t = (a) => {
  return t$m(a);
  // eslint-disable-next-line no-undef
  t$(); // never run, but here to "trick" calculang graph logic
};
////////// end t memo-loader code //////////



////////// start v memo-loader code //////////
//const v$m = memoize(999999, isEqual)(v$);
export const v$m = memoize(v$, JSON.stringify);
export const v = (a) => {
  return v$m(a);
  // eslint-disable-next-line no-undef
  v$(); // never run, but here to "trick" calculang graph logic
};
////////// end v memo-loader code //////////


    