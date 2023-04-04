import { fib } from "./cul_scope_0.mjs";import { n } from "./cul_scope_0.mjs";export const n_ = ({ n_in }) => n_in;

export const fib_ = ({ n_in }) => {
  if (n({ n_in }) == 1 || n({ n_in }) == 2) return 1;else
  return fib({ n_in: n({ n_in }) - 2 }) + fib({ n_in: n({ n_in }) - 1 });
};