import { z } from "./cul_scope_0.mjs";import { y } from "./cul_scope_0.mjs";import { x } from "./cul_scope_0.mjs";import { i } from "./cul_scope_0.mjs";import { t } from "./cul_scope_0.mjs";import { c } from "./cul_scope_0.mjs";import { b } from "./cul_scope_0.mjs";import { a } from "./cul_scope_0.mjs";export const a_ = ({}) => 10.0;
export const b_ = ({}) => 28.0;
export const c_ = ({}) => 8.0 / 3.0;

export const t_ = ({}) => 0.01;

export const i_ = ({ i_in }) => i_in;

export const x_ = ({ i_in }) => {
  if (i({ i_in }) == 0) return 0.1;
  return (
    x({ i_in: i({ i_in }) - 1 }) +
    t({}) * a({}) * (y({ i_in: i({ i_in }) - 1 }) - x({ i_in: i({ i_in }) - 1 })));

};

export const y_ = ({ i_in }) => {
  if (i({ i_in }) == 0) return 0;
  return (
    y({ i_in: i({ i_in }) - 1 }) +
    t({}) * (
    x({ i_in: i({ i_in }) - 1 }) * (b({}) - z({ i_in: i({ i_in }) - 1 })) -
    y({ i_in: i({ i_in }) - 1 })));

};

export const z_ = ({ i_in }) => {
  if (i({ i_in }) == 0) return 0;
  return (
    z({ i_in: i({ i_in }) - 1 }) +
    t({}) * (
    x({ i_in: i({ i_in }) - 1 }) * y({ i_in: i({ i_in }) - 1 }) - c({}) * z({ i_in: i({ i_in }) - 1 })));

};