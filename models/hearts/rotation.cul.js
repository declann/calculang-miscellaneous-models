import { x, y_ as y0, arcy, trend, wavey} from './beating.cul';
export { arcy, trend, wavey };

export const angle = () => (angle_in);

// I want the x used in pow to be the x_in and not this
export const x1 = () => x() * Math.cos(angle()) - y0() * Math.sin(angle());
export const y = () => y0() * Math.cos(angle()) + x() * Math.sin(angle());
