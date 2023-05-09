import { color } from "./cul_scope_0.mjs";import { waveB } from "./cul_scope_0.mjs";import { waveA } from "./cul_scope_0.mjs";import { p } from "./cul_scope_0.mjs";import { y } from "./cul_scope_0.mjs";import { y1 } from "./cul_scope_0.mjs";import { x } from "./cul_scope_0.mjs";import { x1 } from "./cul_scope_0.mjs";export const x1_ = ({ p_in }) => Math.random() * 30 - 15 + p({ p_in }) * 0; // no random seed here
export const x_ = ({ p_in }) => x1({ p_in }) / 1.5;
export const y1_ = ({ p_in }) => Math.random() * 30 - 15 + p({ p_in }) * 0;
export const y_ = ({ p_in }) => y1({ p_in }) / 1.5;

export const p_ = ({ p_in }) => p_in; // point

export const waveA_ = ({ p_in }) =>
(Math.sin(x({ p_in })) +
(Math.floor(Math.abs(x({ p_in })) / Math.PI) % 2 == 1 ? 1 : 1) *
Math.sin(x({ p_in })) *
0.6 * (
1 - Math.abs(Math.sin(x({ p_in }))))) *
3 +
0;
export const waveB_ = ({ p_in }) =>
(Math.sin(x({ p_in })) +
(Math.floor(Math.abs(x({ p_in })) / Math.PI) % 2 == 1 ? 1 : 1) *
Math.sin(x({ p_in })) *
0.6 * (
1 - Math.abs(Math.sin(x({ p_in }))))) *
3 +
4;

export const color_ = ({ p_in }) => {
  //if (y() > 0 || 1) return y() > waveA() && y() < waveB() ? 1 : 0;
  return Math.floor((y({ p_in }) - waveA({ p_in })) / (waveB({ p_in }) - waveA({ p_in })));
};