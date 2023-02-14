// some references:
// https://www.google.com/search?q=beating+heart+in+desmos
// https://www.youtube.com/watch?v=4rPUg2jmcOw

// my own desmos build to figure:
// https://www.desmos.com/calculator/hf4pefzsbl

export const x = ({ x_in }) => x_in;
export const waviness = ({ waviness_in }) => waviness_in;
export const tallness = ({ tallness_in }) => tallness_in;
export const arc_size = ({ arc_size_in }) => arc_size_in;
export const pinchiness = ({ pinchiness_in }) => pinchiness_in;

import pow from './pow.mjs';

export const trend = ({ x_in, pinchiness_in }) => pow(x({ x_in }), pinchiness({ pinchiness_in }));

export const wavey = ({ waviness_in, x_in }) => Math.sin(waviness({ waviness_in }) * Math.PI * x({ x_in }));

export const arcy = ({ x_in, arc_size_in }) => {
  if (Math.abs(x({ x_in })) > Math.sqrt(arc_size({ arc_size_in }))) return 0;else
  return pow(arc_size({ arc_size_in }) - x({ x_in }) * x({ x_in }), 0.5);
};

// trend + arcy * wavey
export const y = ({ x_in, pinchiness_in, arc_size_in, waviness_in, tallness_in }) => trend({ x_in, pinchiness_in }) + arcy({ x_in, arc_size_in }) * wavey({ waviness_in, x_in }) * tallness({ tallness_in });