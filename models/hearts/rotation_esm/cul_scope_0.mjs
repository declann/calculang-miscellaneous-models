import { x, y_ as y0, arcy, trend, wavey } from "./cul_scope_1.mjs";
export { arcy, trend, wavey };

export const angle = ({ angle_in }) => angle_in;

// I want the x used in pow to be the x_in and not this
export const x1 = ({ x_in, angle_in, pinchiness_in, arc_size_in, waviness_in, tallness_in }) => x({ x_in }) * Math.cos(angle({ angle_in })) - y0({ x_in, pinchiness_in, arc_size_in, waviness_in, tallness_in }) * Math.sin(angle({ angle_in }));
export const y = ({ x_in, pinchiness_in, arc_size_in, waviness_in, tallness_in, angle_in }) => y0({ x_in, pinchiness_in, arc_size_in, waviness_in, tallness_in }) * Math.cos(angle({ angle_in })) + x({ x_in }) * Math.sin(angle({ angle_in }));