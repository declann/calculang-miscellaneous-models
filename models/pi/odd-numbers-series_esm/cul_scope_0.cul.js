// 1/1 - 1/3 + 1/5 - 1/7 + ... = pi/4

// starting at 1
export const term_number = () => term_number_in;

export const sign = () => Math.pow(-1, term_number() - 1); // +, -, +, -, ...

export const denominator = () => {
  /*if (term() == 1) return 1;
  else return 2 * term() + 1;*/ // 2+1, 4+1, 6+1, ... odd number series

  // odd number series, term_number starts at 1
  return (term_number() - 1) * 2 + 1;
};

export const term = () => sign() * (1 / denominator());

export const series_sum_of_first_10_terms = () =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(
    (acc, term_number_in) => acc + term({ term_number_in }),
    0
  );

  export const series_sum_of_first_9_terms = () =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(
    (acc, term_number_in) => acc + term({ term_number_in }),
    0
  );

