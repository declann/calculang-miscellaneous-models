import { pi_approximation } from "./cul_scope_0.mjs";import { ratio } from "./cul_scope_0.mjs";import { inside_count } from "./cul_scope_0.mjs";import { inside } from "./cul_scope_0.mjs";import { f } from "./cul_scope_0.mjs";import { y } from "./cul_scope_0.mjs";import { x } from "./cul_scope_0.mjs";import { p } from "./cul_scope_0.mjs";export const p_ = ({ p_in }) => p_in;

import { prng_alea } from './esm-seedrandom.mjs'; // only the beginning of the shadiness..

const random = prng_alea('seed123456');

export const x_ = ({ p_in }) => random() + p({ p_in }) * 0;

export const y_ = ({ p_in }) => random() + p({ p_in }) * 0;

export const f_ = ({ p_in }) => x({ p_in }) * x({ p_in }) + y({ p_in }) * y({ p_in });

export const inside_ = ({ p_in }) => f({ p_in }) < 1; // = case shouldn't happen

export const inside_count_ = ({ p_in }) => {
  if (p({ p_in }) == 0) return 0;else
  return inside_count({ p_in: p({ p_in }) - 1 }) + inside({ p_in });
};

export const ratio_ = ({ p_in }) => inside_count({ p_in }) / p({ p_in });

export const pi_approximation_ = ({ p_in }) => ratio({ p_in }) * 4;