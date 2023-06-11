
import { memoize } from 'underscore';
//import memoize from 'lru-memoize';
//import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?

import { x_ as x$, y_ as y$, block_x_ as block_x$, section_x_ as section_x$, block_y_ as block_y$, color_ as color$, x1_ as x1$, y1_ as y1$, skewness_ as skewness$ } from "./cul_scope_1.mjs"; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!



////////// start x memo-loader code //////////
//const x$m = memoize(999999, isEqual)(x$);
export const x$m = memoize(x$, JSON.stringify);
export const x = (a) => {
  return x$m(a);
  // eslint-disable-next-line no-undef
  x$({ x_in }); // never run, but here to "trick" calculang graph logic
};
////////// end x memo-loader code //////////



////////// start y memo-loader code //////////
//const y$m = memoize(999999, isEqual)(y$);
export const y$m = memoize(y$, JSON.stringify);
export const y = (a) => {
  return y$m(a);
  // eslint-disable-next-line no-undef
  y$({ y_in }); // never run, but here to "trick" calculang graph logic
};
////////// end y memo-loader code //////////



////////// start block_x memo-loader code //////////
//const block_x$m = memoize(999999, isEqual)(block_x$);
export const block_x$m = memoize(block_x$, JSON.stringify);
export const block_x = (a) => {
  return block_x$m(a);
  // eslint-disable-next-line no-undef
  block_x$({ x_in }); // never run, but here to "trick" calculang graph logic
};
////////// end block_x memo-loader code //////////



////////// start section_x memo-loader code //////////
//const section_x$m = memoize(999999, isEqual)(section_x$);
export const section_x$m = memoize(section_x$, JSON.stringify);
export const section_x = (a) => {
  return section_x$m(a);
  // eslint-disable-next-line no-undef
  section_x$({ x_in }); // never run, but here to "trick" calculang graph logic
};
////////// end section_x memo-loader code //////////



////////// start block_y memo-loader code //////////
//const block_y$m = memoize(999999, isEqual)(block_y$);
export const block_y$m = memoize(block_y$, JSON.stringify);
export const block_y = (a) => {
  return block_y$m(a);
  // eslint-disable-next-line no-undef
  block_y$({ x_in, y_in }); // never run, but here to "trick" calculang graph logic
};
////////// end block_y memo-loader code //////////



////////// start color memo-loader code //////////
//const color$m = memoize(999999, isEqual)(color$);
export const color$m = memoize(color$, JSON.stringify);
export const color = (a) => {
  return color$m(a);
  // eslint-disable-next-line no-undef
  color$({ x_in, y_in }); // never run, but here to "trick" calculang graph logic
};
////////// end color memo-loader code //////////



////////// start x1 memo-loader code //////////
//const x1$m = memoize(999999, isEqual)(x1$);
export const x1$m = memoize(x1$, JSON.stringify);
export const x1 = (a) => {
  return x1$m(a);
  // eslint-disable-next-line no-undef
  x1$({ y_in, skewness_in, x_in }); // never run, but here to "trick" calculang graph logic
};
////////// end x1 memo-loader code //////////



////////// start y1 memo-loader code //////////
//const y1$m = memoize(999999, isEqual)(y1$);
export const y1$m = memoize(y1$, JSON.stringify);
export const y1 = (a) => {
  return y1$m(a);
  // eslint-disable-next-line no-undef
  y1$({ y_in }); // never run, but here to "trick" calculang graph logic
};
////////// end y1 memo-loader code //////////



////////// start skewness memo-loader code //////////
//const skewness$m = memoize(999999, isEqual)(skewness$);
export const skewness$m = memoize(skewness$, JSON.stringify);
export const skewness = (a) => {
  return skewness$m(a);
  // eslint-disable-next-line no-undef
  skewness$({ skewness_in }); // never run, but here to "trick" calculang graph logic
};
////////// end skewness memo-loader code //////////