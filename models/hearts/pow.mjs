
// see https://stackoverflow.com/questions/14575697/math-pow-with-negative-numbers-and-non-integer-powers
const pow = (base, exponent) => {
  if (base > 0) return Math.pow(base, exponent);
  else return -Math.pow(-base, exponent);
};

export default pow;