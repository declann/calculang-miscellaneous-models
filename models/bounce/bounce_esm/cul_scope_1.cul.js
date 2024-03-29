// the floor is at y=190 so the ball will start falling until it reaches 190, and then bounce.
// dy calculates the change to y in each time step (except where the "floor rule" bites).
// dy is 3 at t_in=0 and is influenced by a dampener input

/////////// model ///////////

// explicit inputs (by convention):
export const t = () => t_in;
export const dx = () => dx_in;
export const dampener = () => dampener_in;

// functions:

// calculang determines x function dependent on inputs t_in, dx_in
export const x = () => {
  if (t() == 0) return 100 + dx();
  else return x({ t_in: t() - 1 }) + dx();
};

// calculang determines y function dependent on inputs t_in, dampener_in
export const y = () => {
  if (t() == 0) return 50;
  else if (y({ t_in: t() - 1 }) + dy({ t_in: t() - 1 }) > 185) return 190; // "floor rule"
  else return y({ t_in: t() - 1 }) + dy({ t_in: t() - 1 });
};

// calculang determines dy function dependent on inputs t_in, dampener_in
export const dy = () => {
  if (t() == 0) return 0 * dampener() + 3;
  else if (y({ t_in: t() }) > 185) return -dy({ t_in: t() - 1 }); // bounce at the floor by negating dy
  else return dy({ t_in: t() - 1 }) * dampener() + 3;
}; // if expressions vs statements would really help make this more concise

// ball gets compressed on the ground before bouncing upwards
export const compressed = () => (y() == 190 ? true : false);
