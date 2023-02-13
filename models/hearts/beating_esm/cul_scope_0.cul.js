// some references:
// https://www.google.com/search?q=beating+heart+in+desmos
// https://www.youtube.com/watch?v=4rPUg2jmcOw

// my own desmos build to figure:
// https://www.desmos.com/calculator/hf4pefzsbl

export const x = () => x_in;
export const waviness = () => waviness_in;
export const tallness = () => tallness_in;

import pow from './pow.mjs';

export const trend = () => pow(x(), 2 / 3);

export const wavey = () => Math.sin(waviness() * Math.PI * x());

export const arcy = () => pow(3.3 /* todo param this */ - x() * x(), 0.5);

// trend + arcy * wavey
export const y = () => trend() + arcy() * wavey() * tallness();

