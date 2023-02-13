export const x = () => x_in;
export const base = () => base_in;
export const exponent = () => exponent_in;

// see https://stackoverflow.com/questions/14575697/math-pow-with-negative-numbers-and-non-integer-powers
export const pow = () => {
  if (base() > 0) return Math.pow(base(), exponent());
  else return -Math.pow(-base(), exponent());
};

export const trend = () => pow(x(), 2 / 3);
