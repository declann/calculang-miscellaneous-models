
import { memoize } from 'underscore';
//import memoize from 'lru-memoize';
//import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?

import { t_ as t$, dx_ as dx$, dampener_ as dampener$, x_ as x$, y_ as y$, dy_ as dy$ } from "./cul_scope_1.mjs"; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!



////////// start t memo-loader code //////////
//const t$m = memoize(999999, isEqual)(t$);
export const t$m = memoize(t$, JSON.stringify);
export const t = (a) => {
  return t$m(a);
  // eslint-disable-next-line no-undef
  t$({ t_in }); // never run, but here to "trick" calculang graph logic
};
////////// end t memo-loader code //////////



////////// start dx memo-loader code //////////
//const dx$m = memoize(999999, isEqual)(dx$);
export const dx$m = memoize(dx$, JSON.stringify);
export const dx = (a) => {
  return dx$m(a);
  // eslint-disable-next-line no-undef
  dx$({ dx_in }); // never run, but here to "trick" calculang graph logic
};
////////// end dx memo-loader code //////////



////////// start dampener memo-loader code //////////
//const dampener$m = memoize(999999, isEqual)(dampener$);
export const dampener$m = memoize(dampener$, JSON.stringify);
export const dampener = (a) => {
  return dampener$m(a);
  // eslint-disable-next-line no-undef
  dampener$({ dampener_in }); // never run, but here to "trick" calculang graph logic
};
////////// end dampener memo-loader code //////////



////////// start x memo-loader code //////////
//const x$m = memoize(999999, isEqual)(x$);
export const x$m = memoize(x$, JSON.stringify);
export const x = (a) => {
  return x$m(a);
  // eslint-disable-next-line no-undef
  x$({ t_in, dx_in }); // never run, but here to "trick" calculang graph logic
};
////////// end x memo-loader code //////////



////////// start y memo-loader code //////////
//const y$m = memoize(999999, isEqual)(y$);
export const y$m = memoize(y$, JSON.stringify);
export const y = (a) => {
  return y$m(a);
  // eslint-disable-next-line no-undef
  y$({ t_in, dampener_in }); // never run, but here to "trick" calculang graph logic
};
////////// end y memo-loader code //////////



////////// start dy memo-loader code //////////
//const dy$m = memoize(999999, isEqual)(dy$);
export const dy$m = memoize(dy$, JSON.stringify);
export const dy = (a) => {
  return dy$m(a);
  // eslint-disable-next-line no-undef
  dy$({ t_in, dampener_in }); // never run, but here to "trick" calculang graph logic
};
////////// end dy memo-loader code //////////