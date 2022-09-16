// some representative taxpayer data(generates)

export const taxpayer_id = () => taxpayer_id_in;

export const taxpayer_gross_salary = () => 10000 * taxpayer_id();

export const taxpayer_proportion = () =>
  [0, 0.05, 0.05, 0.15, 0.1, 0.2, 0.2, 0.1, 0.1, .05][taxpayer_id()];
