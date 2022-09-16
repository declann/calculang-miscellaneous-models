import { income_tax } from './incometax.cul';

import { taxpayer_gross_salary, taxpayer_proportion } from './taxpayers.cul';

import { range } from 'underscore';

export const zero = () => zero_in;

export const revenue = () =>
  zero() +
  range(0, 9).reduce(
    (p, c) =>
      income_tax({
        gross_salary_in: taxpayer_gross_salary({ taxpayer_id_in: c }),
      }) *
        taxpayer_proportion({ taxpayer_id_in: c }) +
      p,
    0
  );
