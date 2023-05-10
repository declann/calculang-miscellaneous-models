import { color } from "./cul_scope_0.mjs";import { waveB } from "./cul_scope_0.mjs";import { waveA } from "./cul_scope_0.mjs";import { p } from "./cul_scope_0.mjs";import { y } from "./cul_scope_0.mjs";import { x } from "./cul_scope_0.mjs";export const x_ = ({ p_in }) => Math.random() * 40 - 20 + p({ p_in }) * 0; // no random seed here, => we need memo on for consistency
export const y_ = ({ p_in }) => Math.random() * 40 - 20 + p({ p_in }) * 0;

export const p_ = ({ p_in }) => p_in; // point

export const waveA_ = ({ p_in }) =>
(Math.sin(x({ p_in })) + Math.sin(x({ p_in })) * 0.6 * (1 - Math.abs(Math.sin(x({ p_in }))))) * 3 + 0;
export const waveB_ = ({ p_in }) =>
(Math.sin(x({ p_in })) + Math.sin(x({ p_in })) * 0.6 * (1 - Math.abs(Math.sin(x({ p_in }))))) * 3 + 4; // same as waveA with a 4 offset.. (this isn't faithful)

export const color_ = ({ p_in }) => {
  //if (y() > 0 || 1) return y() > waveA() && y() < waveB() ? 1 : 0;
  return Math.floor((y({ p_in }) - waveA({ p_in })) / (waveB({ p_in }) - waveA({ p_in })));
};