
export const v0 = () => (v0_in); // value at start
export const t = () => (t_in);

export const v = () => {
  if (t() == 0) return v0();
  else return v({ t_in: t() - 1 }) * 3;
}