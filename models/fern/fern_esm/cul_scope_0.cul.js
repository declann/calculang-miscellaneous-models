
    import { memoize } from 'underscore';
    //import memoize from 'lru-memoize';
    //import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?
    
    import { barnsley_transforms_ as barnsley_transforms$, winning_transform_values_ as winning_transform_values$, i_ as i$, winner_ as winner$, barnsley_0_ as barnsley_0$, barnsley_1_ as barnsley_1$, barnsley_2_ as barnsley_2$, barnsley_3_ as barnsley_3$, barnsley_4_ as barnsley_4$, barnsley_5_ as barnsley_5$, x_ as x$, y_ as y$ } from './fern.cul.js?+memoed'; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!
    
    

////////// start barnsley_transforms memo-loader code //////////
//const barnsley_transforms$m = memoize(999999, isEqual)(barnsley_transforms$);
export const barnsley_transforms$m = memoize(barnsley_transforms$, JSON.stringify);
export const barnsley_transforms = (a) => {
  return barnsley_transforms$m(a);
  // eslint-disable-next-line no-undef
  barnsley_transforms$(); // never run, but here to "trick" calculang graph logic
};
////////// end barnsley_transforms memo-loader code //////////



////////// start winning_transform_values memo-loader code //////////
//const winning_transform_values$m = memoize(999999, isEqual)(winning_transform_values$);
export const winning_transform_values$m = memoize(winning_transform_values$, JSON.stringify);
export const winning_transform_values = (a) => {
  return winning_transform_values$m(a);
  // eslint-disable-next-line no-undef
  winning_transform_values$(); // never run, but here to "trick" calculang graph logic
};
////////// end winning_transform_values memo-loader code //////////



////////// start i memo-loader code //////////
//const i$m = memoize(999999, isEqual)(i$);
export const i$m = memoize(i$, JSON.stringify);
export const i = (a) => {
  return i$m(a);
  // eslint-disable-next-line no-undef
  i$(); // never run, but here to "trick" calculang graph logic
};
////////// end i memo-loader code //////////



////////// start winner memo-loader code //////////
//const winner$m = memoize(999999, isEqual)(winner$);
export const winner$m = memoize(winner$, JSON.stringify);
export const winner = (a) => {
  return winner$m(a);
  // eslint-disable-next-line no-undef
  winner$(); // never run, but here to "trick" calculang graph logic
};
////////// end winner memo-loader code //////////



////////// start barnsley_0 memo-loader code //////////
//const barnsley_0$m = memoize(999999, isEqual)(barnsley_0$);
export const barnsley_0$m = memoize(barnsley_0$, JSON.stringify);
export const barnsley_0 = (a) => {
  return barnsley_0$m(a);
  // eslint-disable-next-line no-undef
  barnsley_0$(); // never run, but here to "trick" calculang graph logic
};
////////// end barnsley_0 memo-loader code //////////



////////// start barnsley_1 memo-loader code //////////
//const barnsley_1$m = memoize(999999, isEqual)(barnsley_1$);
export const barnsley_1$m = memoize(barnsley_1$, JSON.stringify);
export const barnsley_1 = (a) => {
  return barnsley_1$m(a);
  // eslint-disable-next-line no-undef
  barnsley_1$(); // never run, but here to "trick" calculang graph logic
};
////////// end barnsley_1 memo-loader code //////////



////////// start barnsley_2 memo-loader code //////////
//const barnsley_2$m = memoize(999999, isEqual)(barnsley_2$);
export const barnsley_2$m = memoize(barnsley_2$, JSON.stringify);
export const barnsley_2 = (a) => {
  return barnsley_2$m(a);
  // eslint-disable-next-line no-undef
  barnsley_2$(); // never run, but here to "trick" calculang graph logic
};
////////// end barnsley_2 memo-loader code //////////



////////// start barnsley_3 memo-loader code //////////
//const barnsley_3$m = memoize(999999, isEqual)(barnsley_3$);
export const barnsley_3$m = memoize(barnsley_3$, JSON.stringify);
export const barnsley_3 = (a) => {
  return barnsley_3$m(a);
  // eslint-disable-next-line no-undef
  barnsley_3$(); // never run, but here to "trick" calculang graph logic
};
////////// end barnsley_3 memo-loader code //////////



////////// start barnsley_4 memo-loader code //////////
//const barnsley_4$m = memoize(999999, isEqual)(barnsley_4$);
export const barnsley_4$m = memoize(barnsley_4$, JSON.stringify);
export const barnsley_4 = (a) => {
  return barnsley_4$m(a);
  // eslint-disable-next-line no-undef
  barnsley_4$(); // never run, but here to "trick" calculang graph logic
};
////////// end barnsley_4 memo-loader code //////////



////////// start barnsley_5 memo-loader code //////////
//const barnsley_5$m = memoize(999999, isEqual)(barnsley_5$);
export const barnsley_5$m = memoize(barnsley_5$, JSON.stringify);
export const barnsley_5 = (a) => {
  return barnsley_5$m(a);
  // eslint-disable-next-line no-undef
  barnsley_5$(); // never run, but here to "trick" calculang graph logic
};
////////// end barnsley_5 memo-loader code //////////



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


    