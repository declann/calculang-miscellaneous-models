import { compressed } from "./cul_scope_0.mjs";import { dy } from "./cul_scope_0.mjs";import { y } from "./cul_scope_0.mjs";import { x } from "./cul_scope_0.mjs";import { dampener } from "./cul_scope_0.mjs";import { dx } from "./cul_scope_0.mjs";import { t } from "./cul_scope_0.mjs"; // at time 0 (when t_in=0) values for x and dy are 0, while value for y is 50 (values hardcoded below).
// the floor is at y=190 so the ball will start falling until it reaches 190, and then bounce.
// dy calculates the change to y in each time step (except where the "floor rule" bites).
// dy is 3 at t_in=1 and is influenced by a dampener input

/////////// model ///////////

// explicit inputs (by convention):
export const t_ = ({ t_in }) => t_in;
export const dx_ = ({ dx_in }) => dx_in;
export const dampener_ = ({ dampener_in }) => dampener_in;

// functions:

// calculang determines x function dependent on inputs t_in, dx_in
export const x_ = ({ t_in, dx_in }) => {
  if (t({ t_in }) == 0) return 0;else
  return x({ dx_in, t_in: t({ t_in }) - 1 }) + dx({ dx_in });
};

// calculang determines y function dependent on inputs t_in, dampener_in
export const y_ = ({ t_in, dampener_in }) => {
  if (t({ t_in }) == 0) return 50;else
  if (y({ dampener_in, t_in: t({ t_in }) - 1 }) + dy({ dampener_in, t_in: t({ t_in }) - 1 }) > 185) return 190; // "floor rule"
  else return y({ dampener_in, t_in: t({ t_in }) - 1 }) + dy({ dampener_in, t_in: t({ t_in }) - 1 }); // chk timing
};

// calculang determines dy function dependent on inputs t_in, dampener_in
export const dy_ = ({ t_in, dampener_in }) => {
  if (t({ t_in }) == 0) return 0 * dampener({ dampener_in }) + 3;else
  if (y({ dampener_in, t_in: t({ t_in }) }) > 185) return -dy({ dampener_in, t_in: t({ t_in }) - 1 }); // bounce at the floor by negating dy
  else return dy({ dampener_in, t_in: t({ t_in }) - 1 }) * dampener({ dampener_in }) + 3;
}; // if expressions vs statements would really help make this more concise

// ball gets compressed on the ground before bouncing upwards
export const compressed_ = ({ t_in, dampener_in }) => y({ t_in, dampener_in }) == 190 ? true : false;