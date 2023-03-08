import { x, y_ as y0, arcy, trend, wavey } from "./cul_scope_1.mjs";
export { arcy, trend, wavey };

export const angle = ({ angle_in }) => angle_in;

// I want the x used in pow to be the x_in and not this
export const x1 = ({ x_in, angle_in, pinchiness_in, arc_size_in, waviness_in, tallness_in }) => x({ x_in }) * Math.cos(angle({ angle_in })) - y0({ x_in, pinchiness_in, arc_size_in, waviness_in, tallness_in }) * Math.sin(angle({ angle_in })); // y0 ref here means only working for final y function
export const y = ({ x_in, pinchiness_in, arc_size_in, waviness_in, tallness_in, angle_in }) => y0({ x_in, pinchiness_in, arc_size_in, waviness_in, tallness_in }) * Math.cos(angle({ angle_in })) + x({ x_in }) * Math.sin(angle({ angle_in }));


// todo approach for transformation of all functions:
// play with this even though its probably has fundamental tradeoffs:

/*
export const heart = () => trend() + arcy() * wavey() * tallness();

export const f = () => (f_in);

export const y = () => {
  switch (f()) {
    case 'heart': return heart();
    case 'trend': return trend();
    //...
  }
}
*/