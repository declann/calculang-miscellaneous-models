import { income_tax } from "./cul_scope_1.mjs";

import { taxpayer_gross_salary, taxpayer_proportion } from "./cul_scope_2.mjs";

import { range } from 'underscore';

export const zero = ({ zero_in }) => zero_in;

export const revenue = ({ zero_in }) =>
zero({ zero_in }) +
range(0, 9).reduce(
(p, c) =>
income_tax({
  gross_salary_in: taxpayer_gross_salary({ taxpayer_id_in: c }) }) *

taxpayer_proportion({ taxpayer_id_in: c }) +
p,
0);