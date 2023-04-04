export const n = () => n_in;

export const fib = () => {
  if (n() == 1 || n() == 2) return 1;
  else return fib({ n_in: n() - 2 }) + fib({ n_in: n() - 1 });
};
