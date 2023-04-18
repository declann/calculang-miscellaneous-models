import { fund_value_0 } from "./cul_scope_0.mjs";import { unit_growth_rate } from "./cul_scope_0.mjs";import { emper_contribution_rate } from "./cul_scope_0.mjs";import { empee_contribution_rate } from "./cul_scope_0.mjs";import { salary_inflation_rate } from "./cul_scope_0.mjs";import { salary_0 } from "./cul_scope_0.mjs";import { retirement_age } from "./cul_scope_0.mjs";import { age_0 } from "./cul_scope_0.mjs";import { age } from "./cul_scope_0.mjs";import { projected_fund_value } from "./cul_scope_0.mjs";import { salary } from "./cul_scope_0.mjs";import { emper_contribution } from "./cul_scope_0.mjs";import { acc_empee_contributions } from "./cul_scope_0.mjs";import { empee_contribution } from "./cul_scope_0.mjs";import { unit_price } from "./cul_scope_0.mjs";import { unit_allocation } from "./cul_scope_0.mjs";import { unit_balance } from "./cul_scope_0.mjs";import { fund_value } from "./cul_scope_0.mjs"; // disclaimer: This is a work-in-progress model released for some calculang/tooling demonstration purposes and numbers shouldn't be relied upon; there are known model issues.

// this model should prob. be broken into some modular pieces, but it isn't because it definitely needs memoisation, which is currently only working for non-modular models

// todo add timing comments

export const fund_value_ = ({ age_in, age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in }) => unit_balance({ age_in, age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in }) * unit_price({ age_in, age_0_in, unit_growth_rate_in }); // not allowing for multiple funds now

export const unit_balance_ = ({ age_in, age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in }) => {
  if (age({ age_in }) <= age_0({ age_0_in }) - 1) return fund_value_0({ fund_value_0_in }) / unit_price({ age_in, age_0_in, unit_growth_rate_in });else
  return unit_balance({ age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in, age_in: age({ age_in }) - 1 }) + unit_allocation({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in, unit_growth_rate_in });
  // timing = premium received at start of year and allocated immediately
};

export const unit_allocation_ = ({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in, unit_growth_rate_in }) =>
(empee_contribution({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }) + emper_contribution({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, emper_contribution_rate_in })) / unit_price({ age_in, age_0_in, unit_growth_rate_in }); // todo, AVCs?

export const unit_price_ = ({ age_in, age_0_in, unit_growth_rate_in }) => {
  if (age({ age_in }) <= age_0({ age_0_in })) return 1;else
  return unit_price({ age_0_in, unit_growth_rate_in, age_in: age({ age_in }) - 1 }) * (1 + unit_growth_rate({ unit_growth_rate_in }));
};

export const empee_contribution_ = ({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }) => {
  if (age({ age_in }) <= age_0({ age_0_in }) - 1 || age({ age_in }) == retirement_age({ retirement_age_in })) return 0;else
  return salary({ age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, age_in: age({ age_in }) - 1 }) * empee_contribution_rate({ empee_contribution_rate_in });
};

export const acc_empee_contributions_ = ({ age_0_in, retirement_age_in }) =>
_.range(age_0({ age_0_in }), retirement_age({ retirement_age_in })).reduce((acc, val) => acc + val);

export const emper_contribution_ = ({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, emper_contribution_rate_in }) => {
  if (age({ age_in }) <= age_0({ age_0_in }) - 1 || age({ age_in }) == retirement_age({ retirement_age_in })) return 0;else
  return salary({ age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, age_in: age({ age_in }) - 1 }) * emper_contribution_rate({ emper_contribution_rate_in });
};

export const salary_ = ({ age_in, age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in }) => {
  // at end of year
  if (age({ age_in }) <= age_0({ age_0_in }) - 1) return salary_0({ salary_0_in });else
  if (age({ age_in }) >= retirement_age({ retirement_age_in })) return 0;else
  return salary({ age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, age_in: age({ age_in }) - 1 }) * (1 + salary_inflation_rate({ salary_inflation_rate_in })); // < age_0 = undefined, any way/use to capture this statically?
};

export const projected_fund_value_ = ({ age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in }) =>
// at retirement:
fund_value({ age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in, age_in: retirement_age({ retirement_age_in }) });

// explicit inputs ::

// using age and age_0 (starting age) as inputs, rather than year/time and age_0.
export const age_ = ({ age_in }) => age_in; // input
export const age_0_ = ({ age_0_in }) => age_0_in;

export const retirement_age_ = ({ retirement_age_in }) => retirement_age_in;
export const salary_0_ = ({ salary_0_in }) => salary_0_in;
export const salary_inflation_rate_ = ({ salary_inflation_rate_in }) => salary_inflation_rate_in;
export const empee_contribution_rate_ = ({ empee_contribution_rate_in }) => empee_contribution_rate_in;
export const emper_contribution_rate_ = ({ emper_contribution_rate_in }) => emper_contribution_rate_in;

export const unit_growth_rate_ = ({ unit_growth_rate_in }) => unit_growth_rate_in;

export const fund_value_0_ = ({ fund_value_0_in }) => fund_value_0_in;