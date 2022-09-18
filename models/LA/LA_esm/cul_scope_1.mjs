import { z } from "./cul_scope_0.mjs";import { y } from "./cul_scope_0.mjs";import { x } from "./cul_scope_0.mjs";import { i } from "./cul_scope_0.mjs";import { t } from "./cul_scope_0.mjs";import { c } from "./cul_scope_0.mjs";import { b } from "./cul_scope_0.mjs";import { a } from "./cul_scope_0.mjs";export const a_ = ({ a_in }) => a_in;
export const b_ = ({ b_in }) => b_in;
export const c_ = ({ c_in }) => c_in;

export const t_ = ({}) => 0.01;

export const i_ = ({ i_in }) => i_in;

export const x_ = ({ i_in, a_in, b_in, c_in }) => {
  if (i({ i_in }) == 0) return 0.1;
  return (
    x({ a_in, b_in, c_in, i_in: i({ i_in }) - 1 }) +
    t({}) * a({ a_in }) * (y({ a_in, b_in, c_in, i_in: i({ i_in }) - 1 }) - x({ a_in, b_in, c_in, i_in: i({ i_in }) - 1 })));

};

export const y_ = ({ i_in, a_in, b_in, c_in }) => {
  if (i({ i_in }) == 0) return 0;
  return (
    y({ a_in, b_in, c_in, i_in: i({ i_in }) - 1 }) +
    t({}) * (
    x({ a_in, b_in, c_in, i_in: i({ i_in }) - 1 }) * (b({ b_in }) - z({ a_in, b_in, c_in, i_in: i({ i_in }) - 1 })) -
    y({ a_in, b_in, c_in, i_in: i({ i_in }) - 1 })));

};

export const z_ = ({ i_in, a_in, b_in, c_in }) => {
  if (i({ i_in }) == 0) return 0;
  return (
    z({ a_in, b_in, c_in, i_in: i({ i_in }) - 1 }) +
    t({}) * (
    x({ a_in, b_in, c_in, i_in: i({ i_in }) - 1 }) * y({ a_in, b_in, c_in, i_in: i({ i_in }) - 1 }) - c({ c_in }) * z({ a_in, b_in, c_in, i_in: i({ i_in }) - 1 })));

};