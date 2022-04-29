
    import { memoize } from 'underscore';
    //import memoize from 'lru-memoize';
    //import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?
    
    import { R1_ as R1$, R2_ as R2$, A_ as A$, B_ as B$, frame_ as frame$, K2_ as K2$, K1_ as K1$, screen_width_ as screen_width$, screen_height_ as screen_height$, theta_ as theta$, phi_ as phi$, cosA_ as cosA$, sinA_ as sinA$, cosB_ as cosB$, sinB_ as sinB$, cosTheta_ as cosTheta$, sinTheta_ as sinTheta$, cosPhi_ as cosPhi$, sinPhi_ as sinPhi$, circlex_ as circlex$, circley_ as circley$, x_ as x$, y_ as y$, z_ as z$, xp_ as xp$, yp_ as yp$, L_ as L$ } from './donut.cul.js?+memoed'; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!
    
    

////////// start R1 memo-loader code //////////
//const R1$m = memoize(999999, isEqual)(R1$);
export const R1$m = memoize(R1$, JSON.stringify);
export const R1 = (a) => {
  return R1$m(a);
  // eslint-disable-next-line no-undef
  R1$(); // never run, but here to "trick" calculang graph logic
};
////////// end R1 memo-loader code //////////



////////// start R2 memo-loader code //////////
//const R2$m = memoize(999999, isEqual)(R2$);
export const R2$m = memoize(R2$, JSON.stringify);
export const R2 = (a) => {
  return R2$m(a);
  // eslint-disable-next-line no-undef
  R2$(); // never run, but here to "trick" calculang graph logic
};
////////// end R2 memo-loader code //////////



////////// start A memo-loader code //////////
//const A$m = memoize(999999, isEqual)(A$);
export const A$m = memoize(A$, JSON.stringify);
export const A = (a) => {
  return A$m(a);
  // eslint-disable-next-line no-undef
  A$(); // never run, but here to "trick" calculang graph logic
};
////////// end A memo-loader code //////////



////////// start B memo-loader code //////////
//const B$m = memoize(999999, isEqual)(B$);
export const B$m = memoize(B$, JSON.stringify);
export const B = (a) => {
  return B$m(a);
  // eslint-disable-next-line no-undef
  B$(); // never run, but here to "trick" calculang graph logic
};
////////// end B memo-loader code //////////



////////// start frame memo-loader code //////////
//const frame$m = memoize(999999, isEqual)(frame$);
export const frame$m = memoize(frame$, JSON.stringify);
export const frame = (a) => {
  return frame$m(a);
  // eslint-disable-next-line no-undef
  frame$(); // never run, but here to "trick" calculang graph logic
};
////////// end frame memo-loader code //////////



////////// start K2 memo-loader code //////////
//const K2$m = memoize(999999, isEqual)(K2$);
export const K2$m = memoize(K2$, JSON.stringify);
export const K2 = (a) => {
  return K2$m(a);
  // eslint-disable-next-line no-undef
  K2$(); // never run, but here to "trick" calculang graph logic
};
////////// end K2 memo-loader code //////////



////////// start K1 memo-loader code //////////
//const K1$m = memoize(999999, isEqual)(K1$);
export const K1$m = memoize(K1$, JSON.stringify);
export const K1 = (a) => {
  return K1$m(a);
  // eslint-disable-next-line no-undef
  K1$(); // never run, but here to "trick" calculang graph logic
};
////////// end K1 memo-loader code //////////



////////// start screen_width memo-loader code //////////
//const screen_width$m = memoize(999999, isEqual)(screen_width$);
export const screen_width$m = memoize(screen_width$, JSON.stringify);
export const screen_width = (a) => {
  return screen_width$m(a);
  // eslint-disable-next-line no-undef
  screen_width$(); // never run, but here to "trick" calculang graph logic
};
////////// end screen_width memo-loader code //////////



////////// start screen_height memo-loader code //////////
//const screen_height$m = memoize(999999, isEqual)(screen_height$);
export const screen_height$m = memoize(screen_height$, JSON.stringify);
export const screen_height = (a) => {
  return screen_height$m(a);
  // eslint-disable-next-line no-undef
  screen_height$(); // never run, but here to "trick" calculang graph logic
};
////////// end screen_height memo-loader code //////////



////////// start theta memo-loader code //////////
//const theta$m = memoize(999999, isEqual)(theta$);
export const theta$m = memoize(theta$, JSON.stringify);
export const theta = (a) => {
  return theta$m(a);
  // eslint-disable-next-line no-undef
  theta$(); // never run, but here to "trick" calculang graph logic
};
////////// end theta memo-loader code //////////



////////// start phi memo-loader code //////////
//const phi$m = memoize(999999, isEqual)(phi$);
export const phi$m = memoize(phi$, JSON.stringify);
export const phi = (a) => {
  return phi$m(a);
  // eslint-disable-next-line no-undef
  phi$(); // never run, but here to "trick" calculang graph logic
};
////////// end phi memo-loader code //////////



////////// start cosA memo-loader code //////////
//const cosA$m = memoize(999999, isEqual)(cosA$);
export const cosA$m = memoize(cosA$, JSON.stringify);
export const cosA = (a) => {
  return cosA$m(a);
  // eslint-disable-next-line no-undef
  cosA$(); // never run, but here to "trick" calculang graph logic
};
////////// end cosA memo-loader code //////////



////////// start sinA memo-loader code //////////
//const sinA$m = memoize(999999, isEqual)(sinA$);
export const sinA$m = memoize(sinA$, JSON.stringify);
export const sinA = (a) => {
  return sinA$m(a);
  // eslint-disable-next-line no-undef
  sinA$(); // never run, but here to "trick" calculang graph logic
};
////////// end sinA memo-loader code //////////



////////// start cosB memo-loader code //////////
//const cosB$m = memoize(999999, isEqual)(cosB$);
export const cosB$m = memoize(cosB$, JSON.stringify);
export const cosB = (a) => {
  return cosB$m(a);
  // eslint-disable-next-line no-undef
  cosB$(); // never run, but here to "trick" calculang graph logic
};
////////// end cosB memo-loader code //////////



////////// start sinB memo-loader code //////////
//const sinB$m = memoize(999999, isEqual)(sinB$);
export const sinB$m = memoize(sinB$, JSON.stringify);
export const sinB = (a) => {
  return sinB$m(a);
  // eslint-disable-next-line no-undef
  sinB$(); // never run, but here to "trick" calculang graph logic
};
////////// end sinB memo-loader code //////////



////////// start cosTheta memo-loader code //////////
//const cosTheta$m = memoize(999999, isEqual)(cosTheta$);
export const cosTheta$m = memoize(cosTheta$, JSON.stringify);
export const cosTheta = (a) => {
  return cosTheta$m(a);
  // eslint-disable-next-line no-undef
  cosTheta$(); // never run, but here to "trick" calculang graph logic
};
////////// end cosTheta memo-loader code //////////



////////// start sinTheta memo-loader code //////////
//const sinTheta$m = memoize(999999, isEqual)(sinTheta$);
export const sinTheta$m = memoize(sinTheta$, JSON.stringify);
export const sinTheta = (a) => {
  return sinTheta$m(a);
  // eslint-disable-next-line no-undef
  sinTheta$(); // never run, but here to "trick" calculang graph logic
};
////////// end sinTheta memo-loader code //////////



////////// start cosPhi memo-loader code //////////
//const cosPhi$m = memoize(999999, isEqual)(cosPhi$);
export const cosPhi$m = memoize(cosPhi$, JSON.stringify);
export const cosPhi = (a) => {
  return cosPhi$m(a);
  // eslint-disable-next-line no-undef
  cosPhi$(); // never run, but here to "trick" calculang graph logic
};
////////// end cosPhi memo-loader code //////////



////////// start sinPhi memo-loader code //////////
//const sinPhi$m = memoize(999999, isEqual)(sinPhi$);
export const sinPhi$m = memoize(sinPhi$, JSON.stringify);
export const sinPhi = (a) => {
  return sinPhi$m(a);
  // eslint-disable-next-line no-undef
  sinPhi$(); // never run, but here to "trick" calculang graph logic
};
////////// end sinPhi memo-loader code //////////



////////// start circlex memo-loader code //////////
//const circlex$m = memoize(999999, isEqual)(circlex$);
export const circlex$m = memoize(circlex$, JSON.stringify);
export const circlex = (a) => {
  return circlex$m(a);
  // eslint-disable-next-line no-undef
  circlex$(); // never run, but here to "trick" calculang graph logic
};
////////// end circlex memo-loader code //////////



////////// start circley memo-loader code //////////
//const circley$m = memoize(999999, isEqual)(circley$);
export const circley$m = memoize(circley$, JSON.stringify);
export const circley = (a) => {
  return circley$m(a);
  // eslint-disable-next-line no-undef
  circley$(); // never run, but here to "trick" calculang graph logic
};
////////// end circley memo-loader code //////////



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



////////// start z memo-loader code //////////
//const z$m = memoize(999999, isEqual)(z$);
export const z$m = memoize(z$, JSON.stringify);
export const z = (a) => {
  return z$m(a);
  // eslint-disable-next-line no-undef
  z$(); // never run, but here to "trick" calculang graph logic
};
////////// end z memo-loader code //////////



////////// start xp memo-loader code //////////
//const xp$m = memoize(999999, isEqual)(xp$);
export const xp$m = memoize(xp$, JSON.stringify);
export const xp = (a) => {
  return xp$m(a);
  // eslint-disable-next-line no-undef
  xp$(); // never run, but here to "trick" calculang graph logic
};
////////// end xp memo-loader code //////////



////////// start yp memo-loader code //////////
//const yp$m = memoize(999999, isEqual)(yp$);
export const yp$m = memoize(yp$, JSON.stringify);
export const yp = (a) => {
  return yp$m(a);
  // eslint-disable-next-line no-undef
  yp$(); // never run, but here to "trick" calculang graph logic
};
////////// end yp memo-loader code //////////



////////// start L memo-loader code //////////
//const L$m = memoize(999999, isEqual)(L$);
export const L$m = memoize(L$, JSON.stringify);
export const L = (a) => {
  return L$m(a);
  // eslint-disable-next-line no-undef
  L$(); // never run, but here to "trick" calculang graph logic
};
////////// end L memo-loader code //////////


    