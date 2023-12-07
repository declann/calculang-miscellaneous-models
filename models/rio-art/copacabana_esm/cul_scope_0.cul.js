
    import { memoize } from 'underscore';
    //import memoize from 'lru-memoize';
    //import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?
    
    // import/export non-to memo?

    import { x_ as x$, y_ as y$, p_ as p$, waveA_ as waveA$, waveB_ as waveB$, color_ as color$ } from './copacabana.cul.js?+memoed'; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!

    
    
    

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



////////// start p memo-loader code //////////
//const p$m = memoize(999999, isEqual)(p$);
export const p$m = memoize(p$, JSON.stringify);
export const p = (a) => {
  return p$m(a);
  // eslint-disable-next-line no-undef
  p$(); // never run, but here to "trick" calculang graph logic
};
////////// end p memo-loader code //////////



////////// start waveA memo-loader code //////////
//const waveA$m = memoize(999999, isEqual)(waveA$);
export const waveA$m = memoize(waveA$, JSON.stringify);
export const waveA = (a) => {
  return waveA$m(a);
  // eslint-disable-next-line no-undef
  waveA$(); // never run, but here to "trick" calculang graph logic
};
////////// end waveA memo-loader code //////////



////////// start waveB memo-loader code //////////
//const waveB$m = memoize(999999, isEqual)(waveB$);
export const waveB$m = memoize(waveB$, JSON.stringify);
export const waveB = (a) => {
  return waveB$m(a);
  // eslint-disable-next-line no-undef
  waveB$(); // never run, but here to "trick" calculang graph logic
};
////////// end waveB memo-loader code //////////



////////// start color memo-loader code //////////
//const color$m = memoize(999999, isEqual)(color$);
export const color$m = memoize(color$, JSON.stringify);
export const color = (a) => {
  return color$m(a);
  // eslint-disable-next-line no-undef
  color$(); // never run, but here to "trick" calculang graph logic
};
////////// end color memo-loader code //////////


    