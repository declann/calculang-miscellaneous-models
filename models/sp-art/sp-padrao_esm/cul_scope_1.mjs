import { skewness } from "./cul_scope_0.mjs";import { y1 } from "./cul_scope_0.mjs";import { x1 } from "./cul_scope_0.mjs";import { color } from "./cul_scope_0.mjs";import { block_y } from "./cul_scope_0.mjs";import { section_x } from "./cul_scope_0.mjs";import { block_x } from "./cul_scope_0.mjs";import { y } from "./cul_scope_0.mjs";import { x } from "./cul_scope_0.mjs"; // use e.g. lodash inRange
// +use modules, which is how I thought about implementing this in my head (only for tooling/demo reasons I didn't)

export const x_ = ({ x_in }) => x_in;

export const y_ = ({ y_in }) => y_in;

export const block_x_ = ({ x_in }) => Math.floor(x({ x_in }) / 4);

export const section_x_ = ({ x_in }) => Math.floor(x({ x_in })) % 4; // 0,1,2,3

export const block_y_ = ({ x_in, y_in }) => {
  if (section_x({ x_in }) == 0) return Math.floor(y({ y_in }));
  if (section_x({ x_in }) == 1 || section_x({ x_in }) == 2)
  return Math.floor(y({ y_in }) - (0.5 - (0.5 * x({ x_in }) - 0.5 * block_x({ x_in }) * 4)));
  if (section_x({ x_in }) == 3) return Math.floor(y({ y_in })) + 1;
  return NaN; // shouldn't occur
};

export const color_ = ({ x_in, y_in }) => -block_x({ x_in }) - block_x({ x_in }) % 2 - block_y({ x_in, y_in });

export const x1_ = ({ y_in, skewness_in, x_in }) => y({ y_in }) * skewness({ skewness_in }) + x({ x_in });
export const y1_ = ({ y_in }) => y({ y_in });

export const skewness_ = ({ skewness_in }) => skewness_in;