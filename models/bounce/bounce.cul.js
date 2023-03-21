// at time 0 (when t_in=0) values for x and dy are 0, while value for y is 50 (values hardcoded below).
// the floor is at y=190 so the ball will start falling until it reaches 190, and then bounce.
// dy calculates the change to y in each time step (except where the "floor rule" bites).
// dy is 3 at t_in=1 and is influenced by a dampener input

/////////// model ///////////

// explicit inputs (by convention):
export const t = () => t_in;
export const dx = () => dx_in;
export const dampener = () => dampener_in;

// functions:

// calculang determines x function dependent on inputs t_in, dx_in
export const x = () => {
  if (t() == 0) return 0;
  else return x({ t_in: t() - 1 }) + dx();
};

// calculang determines y function dependent on inputs t_in, dampener_in
export const y = () => {
  if (t() == 0) return 50;
  else if (y({ t_in: t() - 1 }) + dy() > 185) return 190; // "floor rule"
  else return y({ t_in: t() - 1 }) + dy();
};

// calculang determines dy function dependent on inputs t_in, dampener_in
export const dy = () => {
  if (t() == 0) return 0;
  else if (y({ t_in: t() - 1 }) + dy({ t_in: t() - 1 }) * dampener() + 3 > 185)
    return -dy({ t_in: t() - 1 }); // bounce at the floor by negating dy
  else return dy({ t_in: t() - 1 }) * dampener() + 3;
};
