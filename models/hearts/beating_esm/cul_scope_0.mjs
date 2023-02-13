export const x = ({ x_in }) => x_in;
export const waviness = ({ waviness_in }) => waviness_in;
export const tallness = ({ tallness_in }) => tallness_in;

import pow from './pow.mjs';

export const trend = ({ x_in }) => pow(x({ x_in }), 2 / 3);

export const wavey = ({ waviness_in, x_in }) => Math.sin(waviness({ waviness_in }) * Math.PI * x({ x_in }));

export const arcy = ({ x_in }) => pow(3.3 - x({ x_in }) * x({ x_in }), 0.5);

// trend + arcy * wavey
export const y = ({ x_in, waviness_in, tallness_in }) => trend({ x_in }) + arcy({ x_in }) * wavey({ waviness_in, x_in }) * tallness({ tallness_in });