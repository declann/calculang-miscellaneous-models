// this code reflects math and code listings written by Andy Sloane in:
//  https://www.a1k0n.net/2011/07/20/donut-math.html
// interesting to compare iterative vs. functional style in approach.
// also interesting to compare separation of concerns.
// go to Andys blog (also https://www.a1k0n.net/2021/01/13/optimizing-donut.html)
// to understand the math in this hurried conversion!
// soon I will elaborate specifically on how calculang can be used to understand the math/numbers.

// torus params
export const R1 = ({ R1_in }) => R1_in;
export const R2 = ({ R2_in }) => R2_in;
// rotations time params
//export const A = () => A_in;
//export const B = () => B_in;
export const A = ({ frame_in }) => 1 + 0.07 * frame({ frame_in }); // todo make rotation params out of 0.07, 0.03
export const B = ({ frame_in }) => 1 + 0.03 * frame({ frame_in });
export const frame = ({ frame_in }) => frame_in;

export const K2 = ({ K2_in }) => K2_in;
export const K1 = ({ K1_in }) => K1_in; //(screen_width() * K2() * 3) / (8 * (R1() + R2()));
export const screen_width = ({ screen_width_in }) => screen_width_in;
export const screen_height = ({ screen_height_in }) => screen_height_in;

// around the cross-sectional circle of torus domain 0-2pi
export const theta = ({ theta_in }) => theta_in;
// around center of revolution of torus domain 0-2pi
export const phi = ({ phi_in }) => phi_in;

// just for convenience/introspection
export const cosA = ({ frame_in }) => Math.cos(A({ frame_in }));
export const sinA = ({ frame_in }) => Math.sin(A({ frame_in }));
export const cosB = ({ frame_in }) => Math.cos(B({ frame_in }));
export const sinB = ({ frame_in }) => Math.sin(B({ frame_in }));
export const cosTheta = ({ theta_in }) => Math.cos(theta({ theta_in }));
export const sinTheta = ({ theta_in }) => Math.sin(theta({ theta_in }));
export const cosPhi = ({ phi_in }) => Math.cos(phi({ phi_in }));
export const sinPhi = ({ phi_in }) => Math.sin(phi({ phi_in }));

// (x,y) coordinates of circle before revolving:
export const circlex = ({ R2_in, R1_in, theta_in }) => R2({ R2_in }) + R1({ R1_in }) * cosTheta({ theta_in });
export const circley = ({ R1_in, theta_in }) => R1({ R1_in }) * sinTheta({ theta_in });

// (x,y,z) coordinates after rotations:
// [for math: https://www.a1k0n.net/2011/07/20/donut-math.html]
export const x = ({ R2_in, R1_in, theta_in, frame_in, phi_in }) =>
circlex({ R2_in, R1_in, theta_in }) * (cosB({ frame_in }) * cosPhi({ phi_in }) + sinA({ frame_in }) * sinB({ frame_in }) * sinPhi({ phi_in }));

export const y = ({ R2_in, R1_in, theta_in, frame_in, phi_in }) =>
circlex({ R2_in, R1_in, theta_in }) * (sinB({ frame_in }) * cosPhi({ phi_in }) - sinA({ frame_in }) * cosB({ frame_in }) * sinPhi({ phi_in })) +
circley({ R1_in, theta_in }) * cosA({ frame_in }) * cosB({ frame_in });

export const z = ({ K2_in, frame_in, R2_in, R1_in, theta_in, phi_in }) =>
K2({ K2_in }) + cosA({ frame_in }) * circlex({ R2_in, R1_in, theta_in }) * sinPhi({ phi_in }) + circley({ R1_in, theta_in }) * sinA({ frame_in });

// coordinates in 2d projection
export const xp = ({ screen_width_in, K1_in, R2_in, R1_in, theta_in, frame_in, phi_in, K2_in }) => screen_width({ screen_width_in }) / 2 + K1({ K1_in }) * x({ R2_in, R1_in, theta_in, frame_in, phi_in }) / z({ K2_in, frame_in, R2_in, R1_in, theta_in, phi_in });
export const yp = ({ screen_height_in, K1_in, R2_in, R1_in, theta_in, frame_in, phi_in, K2_in }) => screen_height({ screen_height_in }) / 2 - K1({ K1_in }) * y({ R2_in, R1_in, theta_in, frame_in, phi_in }) / z({ K2_in, frame_in, R2_in, R1_in, theta_in, phi_in });

// luminosity
export const L = ({ phi_in, theta_in, frame_in }) =>
cosPhi({ phi_in }) * cosTheta({ theta_in }) * sinB({ frame_in }) -
cosA({ frame_in }) * cosTheta({ theta_in }) * sinPhi({ phi_in }) -
sinA({ frame_in }) * sinTheta({ theta_in }) +
cosB({ frame_in }) * (cosA({ frame_in }) * sinTheta({ theta_in }) - cosTheta({ theta_in }) * sinA({ frame_in }) * sinPhi({ phi_in }));