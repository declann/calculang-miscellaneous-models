import { x, y_ as y0, arcy, trend, wavey} from './beating.cul';
export { arcy, trend, wavey };

export const angle = () => (angle_in);

// I want the x used in pow to be the x_in and not this
export const x1 = () => x() * Math.cos(angle()) - y0() * Math.sin(angle()); // y0 ref here means only working for final y function
export const y = () => y0() * Math.cos(angle()) + x() * Math.sin(angle());


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
