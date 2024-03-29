import { contribution_charge } from "./cul_scope_0.mjs";import { fund_value_0 } from "./cul_scope_0.mjs";import { unit_growth_rate } from "./cul_scope_0.mjs";import { emper_contribution_rate } from "./cul_scope_0.mjs";import { empee_contribution_rate } from "./cul_scope_0.mjs";import { salary_inflation_rate } from "./cul_scope_0.mjs";import { salary_0 } from "./cul_scope_0.mjs";import { retirement_age } from "./cul_scope_0.mjs";import { age_0 } from "./cul_scope_0.mjs";import { contribution_charge_actual_co } from "./cul_scope_0.mjs";import { fund_value_0_actual_co } from "./cul_scope_0.mjs";import { unit_growth_rate_actual_co } from "./cul_scope_0.mjs";import { emper_contribution_rate_actual_co } from "./cul_scope_0.mjs";import { empee_contribution_rate_actual_co } from "./cul_scope_0.mjs";import { salary_inflation_rate_actual_co } from "./cul_scope_0.mjs";import { salary_0_actual_co } from "./cul_scope_0.mjs";import { retirement_age_actual_co } from "./cul_scope_0.mjs";import { age_0_actual_co } from "./cul_scope_0.mjs";import { contribution_charge_projected } from "./cul_scope_0.mjs";import { fund_value_0_projected } from "./cul_scope_0.mjs";import { unit_growth_rate_projected } from "./cul_scope_0.mjs";import { emper_contribution_rate_projected } from "./cul_scope_0.mjs";import { empee_contribution_rate_projected } from "./cul_scope_0.mjs";import { salary_inflation_rate_projected } from "./cul_scope_0.mjs";import { salary_0_projected } from "./cul_scope_0.mjs";import { retirement_age_projected } from "./cul_scope_0.mjs";import { age_0_projected } from "./cul_scope_0.mjs";import { rec_step_inputs } from "./cul_scope_0.mjs";import { age } from "./cul_scope_0.mjs";import { rec_step } from "./cul_scope_0.mjs";import { age_closing } from "./cul_scope_0.mjs";import { age_opening } from "./cul_scope_0.mjs";import { contribution_charge_actual } from "./cul_scope_0.mjs";import { emper_contribution_rate_actual } from "./cul_scope_0.mjs";import { salary_0_actual } from "./cul_scope_0.mjs";import { retirement_age_actual } from "./cul_scope_0.mjs";import { fund_value_0_actual } from "./cul_scope_0.mjs";import { age_0_actual } from "./cul_scope_0.mjs";import { unit_growth_rate_actual } from "./cul_scope_0.mjs";import { empee_contribution_rate_actual } from "./cul_scope_0.mjs";import { salary_inflation_rate_actual } from "./cul_scope_0.mjs";import { inputs } from "./cul_scope_0.mjs";import { actuals } from "./cul_scope_0.mjs"; // disclaimer: This is a work-in-progress model released for some calculang/tooling demonstration purposes and numbers shouldn't be relied upon; there are known model issues.

// this model should prob. be broken into some modular pieces, but it isn't because it definitely needs memoisation, which is currently only working for non-modular models

// todo add timing comments

import { income_tax } from "./cul_scope_2.mjs";
export { income_tax };

export const fund_value = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) => unit_balance({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) * unit_price({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }); // not allowing for multiple funds now

export const unit_balance = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) => {
  if (age({ age_in }) <= age_0({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) - 1) return fund_value_0({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) / unit_price({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in });else
  return unit_balance({ rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in, age_in: age({ age_in }) - 1 }) + unit_allocation({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in });
  // timing = premium received at start of year and allocated immediately
};

export const unit_allocation = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) =>
(empee_contribution({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) + emper_contribution({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in })) * (
1 - contribution_charge({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in })) /
unit_price({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }); // todo, AVCs?

export const unit_price = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) => {
  if (age({ age_in }) <= age_0({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in })) return 1;else
  return unit_price({ rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in, age_in: age({ age_in }) - 1 }) * (1 + unit_growth_rate({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }));
};

export const empee_contribution = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) => {
  if (age({ age_in }) <= age_0({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) - 1 || age({ age_in }) == retirement_age({ age_in, rec_step_in, age_opening_in, age_closing_in, actuals_in })) return 0;else
  return salary({ rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in, age_in: age({ age_in }) - 1 }) * empee_contribution_rate({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in });
};

export const accumulated_empee_contributions = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) => {
  if (age({ age_in }) == age_0({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) - 1) return 0;else

  return (
    accumulated_empee_contributions({ rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in, age_in: age({ age_in }) - 1 }) +
    empee_contribution({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }));

};

export const pension_tax_relief_ratio = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) =>
empee_contribution_tax_relief({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) / empee_contribution({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in });

export const empee_contribution_tax_relief = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) =>
income_tax({ age_in,
  gross_salary_in: salary({ rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in, age_in: age({ age_in }) - 1 }),
  tax_credits_in: 3000,
  pension_contribution_in: 0 }) -

income_tax({ age_in,
  gross_salary_in: salary({ rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in, age_in: age({ age_in }) - 1 }),
  tax_credits_in: 3000,
  pension_contribution_in: empee_contribution({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) });


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

export const emper_contribution = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) => {
  if (age({ age_in }) <= age_0({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) - 1 || age({ age_in }) == retirement_age({ age_in, rec_step_in, age_opening_in, age_closing_in, actuals_in })) return 0;else
  return salary({ rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in, age_in: age({ age_in }) - 1 }) * emper_contribution_rate({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in });
};

export const salary = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) => {
  // at end of year
  if (age({ age_in }) <= age_0({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) - 1) return salary_0({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in });else
  if (age({ age_in }) >= retirement_age({ age_in, rec_step_in, age_opening_in, age_closing_in, actuals_in })) return 0;else
  return salary({ rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in, age_in: age({ age_in }) - 1 }) * (1 + salary_inflation_rate({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in })); // < age_0 = undefined, any way/use to capture this statically?
};

export const projected_fund_value = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) =>
// at retirement:
fund_value({ rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in, age_in: retirement_age({ age_in, rec_step_in, age_opening_in, age_closing_in, actuals_in }) });

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

export const contribution_charge_ = ({ contribution_charge_in }) => contribution_charge_in;