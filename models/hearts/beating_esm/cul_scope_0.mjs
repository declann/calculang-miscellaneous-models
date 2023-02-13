export const x = ({ x_in }) => x_in;
import pow from './pow.mjs';

export const trend = ({ x_in }) => pow(x({ x_in }), 2 / 3);