// disclaimer: This is a work-in-progress model released for some calculang/tooling demonstration purposes and numbers shouldn't be relied upon; there are known model issues.

// this model should prob. be broken into some modular pieces, but it isn't because it definitely needs memoisation, which is currently only working for non-modular models

// todo add timing comments

import {
income_tax,
pension_contribution_tax_relief } from
"./cul_scope_1.mjs";
export { income_tax, pension_contribution_tax_relief };

export const fund_value = ({ age_in, age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in }) => unit_balance({ age_in, age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in }) * unit_price({ age_in, age_0_in, unit_growth_rate_in }); // not allowing for multiple funds now

export const unit_balance = ({ age_in, age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in }) => {
  if (age({ age_in }) <= age_0({ age_0_in }) - 1) return fund_value_0({ fund_value_0_in }) / unit_price({ age_in, age_0_in, unit_growth_rate_in });else
  return unit_balance({ age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in, age_in: age({ age_in }) - 1 }) + unit_allocation({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in, unit_growth_rate_in });
  // timing = premium received at start of year and allocated immediately
};

export const unit_allocation = ({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in, unit_growth_rate_in }) =>
(empee_contribution({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }) + emper_contribution({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, emper_contribution_rate_in })) / unit_price({ age_in, age_0_in, unit_growth_rate_in }); // todo, AVCs?

export const unit_price = ({ age_in, age_0_in, unit_growth_rate_in }) => {
  if (age({ age_in }) <= age_0({ age_0_in })) return 1;else
  return unit_price({ age_0_in, unit_growth_rate_in, age_in: age({ age_in }) - 1 }) * (1 + unit_growth_rate({ unit_growth_rate_in }));
};

export const empee_contribution = ({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }) => {
  if (age({ age_in }) <= age_0({ age_0_in }) - 1 || age({ age_in }) == retirement_age({ retirement_age_in })) return 0;else
  return salary({ age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, age_in: age({ age_in }) - 1 }) * empee_contribution_rate({ empee_contribution_rate_in });
};

export const accumulated_empee_contributions = ({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }) => {
  if (age({ age_in }) == age_0({ age_0_in }) - 1) return 0;else

  return (
    accumulated_empee_contributions({ age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, age_in: age({ age_in }) - 1 }) +
    empee_contribution({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }));

};
//_.range(age_0(), retirement_age()).reduce((acc, val) => acc + val);

export const empee_contribution_tax_relief = ({ age_in, age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, empee_contribution_rate_in }) =>
// or pension_contribution_tax_relief
pension_contribution_tax_relief({ age_in,
  gross_salary_in: salary({ age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, age_in: age({ age_in }) - 1 }),
  tax_credits_in: 3000,
  pension_contribution_in: empee_contribution({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }) });

/*income_tax({
    gross_salary_in: salary({ age_in: age() - 1 }),
    tax_credits_in: 3000,
    pension_contribution_in: 0,
  }) -
  income_tax({
    gross_salary_in: salary({ age_in: age() - 1 }),
    tax_credits_in: 3000,
    pension_contribution_in: empee_contribution(),
  });*/

// affected by bug: depends on gross_salary_in, for some reason
// issue #102
/*export const accumulated_empee_contribution_tax_relief = () => {
  if (age() == age_0() - 1) return 0;
  else
    return (
      accumulated_empee_contribution_tax_relief({ age_in: age() - 1 }) +
      empee_contribution_tax_relief()
    );
};*/

export const emper_contribution = ({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, emper_contribution_rate_in }) => {
  if (age({ age_in }) <= age_0({ age_0_in }) - 1 || age({ age_in }) == retirement_age({ retirement_age_in })) return 0;else
  return salary({ age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, age_in: age({ age_in }) - 1 }) * emper_contribution_rate({ emper_contribution_rate_in });
};

export const salary = ({ age_in, age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in }) => {
  // at end of year
  if (age({ age_in }) <= age_0({ age_0_in }) - 1) return salary_0({ salary_0_in });else
  if (age({ age_in }) >= retirement_age({ retirement_age_in })) return 0;else
  return salary({ age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, age_in: age({ age_in }) - 1 }) * (1 + salary_inflation_rate({ salary_inflation_rate_in })); // < age_0 = undefined, any way/use to capture this statically?
};

export const projected_fund_value = ({ age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in }) =>
// at retirement:
fund_value({ age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in, age_in: retirement_age({ retirement_age_in }) });

// explicit inputs ::

// using age and age_0 (starting age) as inputs, rather than year/time and age_0.
export const age = ({ age_in }) => age_in; // input
export const age_0 = ({ age_0_in }) => age_0_in;

export const retirement_age = ({ retirement_age_in }) => retirement_age_in;
export const salary_0 = ({ salary_0_in }) => salary_0_in;
export const salary_inflation_rate = ({ salary_inflation_rate_in }) => salary_inflation_rate_in;
export const empee_contribution_rate = ({ empee_contribution_rate_in }) => empee_contribution_rate_in;
export const emper_contribution_rate = ({ emper_contribution_rate_in }) => emper_contribution_rate_in;

export const unit_growth_rate = ({ unit_growth_rate_in }) => unit_growth_rate_in;

export const fund_value_0 = ({ fund_value_0_in }) => fund_value_0_in;