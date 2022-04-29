// this code reflects math and code listings written by Andy Sloane in:
//  https://www.a1k0n.net/2011/07/20/donut-math.html
// interesting to compare iterative vs. functional style in approach.
// also interesting to compare separation of concerns.
// go to Andys blog (also https://www.a1k0n.net/2021/01/13/optimizing-donut.html)
// to understand the math in this hurried conversion!
// soon I will elaborate specifically on how calculang can be used to understand the math/numbers.

// torus params
export const R1 = () => R1_in;
export const R2 = () => R2_in;
// rotations time params
//export const A = () => A_in;
//export const B = () => B_in;
export const A = () => 1 + 0.07 * frame();
export const B = () => 1 + 0.03 * frame();
export const frame = () => frame_in;

export const K2 = () => K2_in;
export const K1 = () => K1_in; //(screen_width() * K2() * 3) / (8 * (R1() + R2()));
export const screen_width = () => screen_width_in;
export const screen_height = () => screen_height_in;

// around the cross-sectional circle of torus domain 0-2pi
export const theta = () => theta_in;
// around center of revolution of torus domain 0-2pi
export const phi = () => phi_in;

// just for convenience/introspection
export const cosA = () => Math.cos(A());
export const sinA = () => Math.sin(A());
export const cosB = () => Math.cos(B());
export const sinB = () => Math.sin(B());
export const cosTheta = () => Math.cos(theta());
export const sinTheta = () => Math.sin(theta());
export const cosPhi = () => Math.cos(phi());
export const sinPhi = () => Math.sin(phi());

// (x,y) coordinates of circle before revolving:
export const circlex = () => R2() + R1() * cosTheta();
export const circley = () => R1() * sinTheta();

// (x,y,z) coordinates after rotations:
// [for math: https://www.a1k0n.net/2011/07/20/donut-math.html]
export const x = () =>
  circlex() * (cosB() * cosPhi() + sinA() * sinB() * sinPhi());

export const y = () =>
  circlex() * (sinB() * cosPhi() - sinA() * cosB() * sinPhi()) +
  circley() * cosA() * cosB();

export const z = () =>
  K2() + cosA() * circlex() * sinPhi() + circley() * sinA();

// coordinates in 2d projection
export const xp = () => screen_width() / 2 + (K1() * x()) / z();
export const yp = () => screen_height() / 2 - (K1() * y()) / z();

// luminosity
export const L = () =>
  cosPhi() * cosTheta() * sinB() -
  cosA() * cosTheta() * sinPhi() -
  sinA() * sinTheta() +
  cosB() * (cosA() * sinTheta() - cosTheta() * sinA() * sinPhi());
