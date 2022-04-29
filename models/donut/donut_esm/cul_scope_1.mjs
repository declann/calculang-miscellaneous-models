import { L } from "./cul_scope_0.mjs";import { yp } from "./cul_scope_0.mjs";import { xp } from "./cul_scope_0.mjs";import { z } from "./cul_scope_0.mjs";import { y } from "./cul_scope_0.mjs";import { x } from "./cul_scope_0.mjs";import { circley } from "./cul_scope_0.mjs";import { circlex } from "./cul_scope_0.mjs";import { sinPhi } from "./cul_scope_0.mjs";import { cosPhi } from "./cul_scope_0.mjs";import { sinTheta } from "./cul_scope_0.mjs";import { cosTheta } from "./cul_scope_0.mjs";import { sinB } from "./cul_scope_0.mjs";import { cosB } from "./cul_scope_0.mjs";import { sinA } from "./cul_scope_0.mjs";import { cosA } from "./cul_scope_0.mjs";import { phi } from "./cul_scope_0.mjs";import { theta } from "./cul_scope_0.mjs";import { screen_height } from "./cul_scope_0.mjs";import { screen_width } from "./cul_scope_0.mjs";import { K1 } from "./cul_scope_0.mjs";import { K2 } from "./cul_scope_0.mjs";import { frame } from "./cul_scope_0.mjs";import { B } from "./cul_scope_0.mjs";import { A } from "./cul_scope_0.mjs";import { R2 } from "./cul_scope_0.mjs";import { R1 } from "./cul_scope_0.mjs"; // this code reflects math and code listings written by Andy Sloane in:
//  https://www.a1k0n.net/2011/07/20/donut-math.html
// interesting to compare iterative vs. functional style in approach.
// also interesting to compare separation of concerns.
// go to Andys blog (also https://www.a1k0n.net/2021/01/13/optimizing-donut.html)
// to understand the math in this hurried conversion!
// soon I will elaborate specifically on how calculang can be used to understand the math/numbers.

// torus params
export const R1_ = ({ R1_in }) => R1_in;
export const R2_ = ({ R2_in }) => R2_in;
// rotations time params
//export const A = () => A_in;
//export const B = () => B_in;
export const A_ = ({ frame_in }) => 1 + 0.07 * frame({ frame_in });
export const B_ = ({ frame_in }) => 1 + 0.03 * frame({ frame_in });
export const frame_ = ({ frame_in }) => frame_in;

export const K2_ = ({ K2_in }) => K2_in;
export const K1_ = ({ K1_in }) => K1_in; //(screen_width() * K2() * 3) / (8 * (R1() + R2()));
export const screen_width_ = ({ screen_width_in }) => screen_width_in;
export const screen_height_ = ({ screen_height_in }) => screen_height_in;

// around the cross-sectional circle of torus domain 0-2pi
export const theta_ = ({ theta_in }) => theta_in;
// around center of revolution of torus domain 0-2pi
export const phi_ = ({ phi_in }) => phi_in;

// just for convenience/introspection
export const cosA_ = ({ frame_in }) => Math.cos(A({ frame_in }));
export const sinA_ = ({ frame_in }) => Math.sin(A({ frame_in }));
export const cosB_ = ({ frame_in }) => Math.cos(B({ frame_in }));
export const sinB_ = ({ frame_in }) => Math.sin(B({ frame_in }));
export const cosTheta_ = ({ theta_in }) => Math.cos(theta({ theta_in }));
export const sinTheta_ = ({ theta_in }) => Math.sin(theta({ theta_in }));
export const cosPhi_ = ({ phi_in }) => Math.cos(phi({ phi_in }));
export const sinPhi_ = ({ phi_in }) => Math.sin(phi({ phi_in }));

// (x,y) coordinates of circle before revolving:
export const circlex_ = ({ R2_in, R1_in, theta_in }) => R2({ R2_in }) + R1({ R1_in }) * cosTheta({ theta_in });
export const circley_ = ({ R1_in, theta_in }) => R1({ R1_in }) * sinTheta({ theta_in });

// (x,y,z) coordinates after rotations:
// [for math: https://www.a1k0n.net/2011/07/20/donut-math.html]
export const x_ = ({ R2_in, R1_in, theta_in, frame_in, phi_in }) =>
circlex({ R2_in, R1_in, theta_in }) * (cosB({ frame_in }) * cosPhi({ phi_in }) + sinA({ frame_in }) * sinB({ frame_in }) * sinPhi({ phi_in }));

export const y_ = ({ R2_in, R1_in, theta_in, frame_in, phi_in }) =>
circlex({ R2_in, R1_in, theta_in }) * (sinB({ frame_in }) * cosPhi({ phi_in }) - sinA({ frame_in }) * cosB({ frame_in }) * sinPhi({ phi_in })) +
circley({ R1_in, theta_in }) * cosA({ frame_in }) * cosB({ frame_in });

export const z_ = ({ K2_in, frame_in, R2_in, R1_in, theta_in, phi_in }) =>
K2({ K2_in }) + cosA({ frame_in }) * circlex({ R2_in, R1_in, theta_in }) * sinPhi({ phi_in }) + circley({ R1_in, theta_in }) * sinA({ frame_in });

// coordinates in 2d projection
export const xp_ = ({ screen_width_in, K1_in, R2_in, R1_in, theta_in, frame_in, phi_in, K2_in }) => screen_width({ screen_width_in }) / 2 + K1({ K1_in }) * x({ R2_in, R1_in, theta_in, frame_in, phi_in }) / z({ K2_in, frame_in, R2_in, R1_in, theta_in, phi_in });
export const yp_ = ({ screen_height_in, K1_in, R2_in, R1_in, theta_in, frame_in, phi_in, K2_in }) => screen_height({ screen_height_in }) / 2 - K1({ K1_in }) * y({ R2_in, R1_in, theta_in, frame_in, phi_in }) / z({ K2_in, frame_in, R2_in, R1_in, theta_in, phi_in });

// luminosity
export const L_ = ({ phi_in, theta_in, frame_in }) =>
cosPhi({ phi_in }) * cosTheta({ theta_in }) * sinB({ frame_in }) -
cosA({ frame_in }) * cosTheta({ theta_in }) * sinPhi({ phi_in }) -
sinA({ frame_in }) * sinTheta({ theta_in }) +
cosB({ frame_in }) * (cosA({ frame_in }) * sinTheta({ theta_in }) - cosTheta({ theta_in }) * sinA({ frame_in }) * sinPhi({ phi_in }));