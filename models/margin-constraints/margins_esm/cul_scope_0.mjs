
import { memoize } from 'underscore';
//import memoize from 'lru-memoize';
//import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?

import { num_bars_ as num_bars$, container_height_ as container_height$, top_margin_ as top_margin$, bottom_margin_ as bottom_margin$, gap_ as gap$, bar_height_ as bar_height$, error_ as error$ } from "./cul_scope_1.mjs"; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!



////////// start num_bars memo-loader code //////////
//const num_bars$m = memoize(999999, isEqual)(num_bars$);
export const num_bars$m = memoize(num_bars$, JSON.stringify);
export const num_bars = (a) => {
  return num_bars$m(a);
  // eslint-disable-next-line no-undef
  num_bars$({ num_bars_in }); // never run, but here to "trick" calculang graph logic
};
////////// end num_bars memo-loader code //////////



////////// start container_height memo-loader code //////////
//const container_height$m = memoize(999999, isEqual)(container_height$);
export const container_height$m = memoize(container_height$, JSON.stringify);
export const container_height = (a) => {
  return container_height$m(a);
  // eslint-disable-next-line no-undef
  container_height$({ container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, gap$_in, bar_height$_in }); // never run, but here to "trick" calculang graph logic
};
////////// end container_height memo-loader code //////////



////////// start top_margin memo-loader code //////////
//const top_margin$m = memoize(999999, isEqual)(top_margin$);
export const top_margin$m = memoize(top_margin$, JSON.stringify);
export const top_margin = (a) => {
  return top_margin$m(a);
  // eslint-disable-next-line no-undef
  top_margin$({ top_margin$_in, container_height$_in, bottom_margin$_in, num_bars_in, gap$_in, bar_height$_in }); // never run, but here to "trick" calculang graph logic
};
////////// end top_margin memo-loader code //////////



////////// start bottom_margin memo-loader code //////////
//const bottom_margin$m = memoize(999999, isEqual)(bottom_margin$);
export const bottom_margin$m = memoize(bottom_margin$, JSON.stringify);
export const bottom_margin = (a) => {
  return bottom_margin$m(a);
  // eslint-disable-next-line no-undef
  bottom_margin$({ bottom_margin$_in, container_height$_in, top_margin$_in, num_bars_in, gap$_in, bar_height$_in }); // never run, but here to "trick" calculang graph logic
};
////////// end bottom_margin memo-loader code //////////



////////// start gap memo-loader code //////////
//const gap$m = memoize(999999, isEqual)(gap$);
export const gap$m = memoize(gap$, JSON.stringify);
export const gap = (a) => {
  return gap$m(a);
  // eslint-disable-next-line no-undef
  gap$({ gap$_in, container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, bar_height$_in }); // never run, but here to "trick" calculang graph logic
};
////////// end gap memo-loader code //////////



////////// start bar_height memo-loader code //////////
//const bar_height$m = memoize(999999, isEqual)(bar_height$);
export const bar_height$m = memoize(bar_height$, JSON.stringify);
export const bar_height = (a) => {
  return bar_height$m(a);
  // eslint-disable-next-line no-undef
  bar_height$({ bar_height$_in, container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, gap$_in }); // never run, but here to "trick" calculang graph logic
};
////////// end bar_height memo-loader code //////////



////////// start error memo-loader code //////////
//const error$m = memoize(999999, isEqual)(error$);
export const error$m = memoize(error$, JSON.stringify);
export const error = (a) => {
  return error$m(a);
  // eslint-disable-next-line no-undef
  error$({ container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, gap$_in, bar_height$_in }); // never run, but here to "trick" calculang graph logic
};
////////// end error memo-loader code //////////