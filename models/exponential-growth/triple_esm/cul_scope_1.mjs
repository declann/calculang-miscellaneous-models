import { v } from "./cul_scope_0.mjs";import { t } from "./cul_scope_0.mjs";import { v0 } from "./cul_scope_0.mjs";
export const v0_ = ({ v0_in }) => v0_in; // value at start
export const t_ = ({ t_in }) => t_in;

export const v_ = ({ t_in, v0_in }) => {
  if (t({ t_in }) == 0) return v0({ v0_in });else
  return v({ v0_in, t_in: t({ t_in }) - 1 }) * 3;
};