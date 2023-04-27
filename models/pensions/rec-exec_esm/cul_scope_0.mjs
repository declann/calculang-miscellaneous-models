
import {
//age, // important
income_tax, fund_value, unit_balance, unit_allocation, unit_price, empee_contribution, accumulated_empee_contributions, pension_tax_relief_ratio, empee_contribution_tax_relief, emper_contribution, salary, projected_fund_value } from
"./cul_scope_1.mjs";


// actual data todo add flexibility

export const actuals = ({ actuals_in }) => actuals_in;
export const inputs = ({ inputs_in }) => inputs_in;

// TODO generalise
export const salary_inflation_rate_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[age({ age_in }) - 30 + 1].salary_inflation_rate_in;
export const empee_contribution_rate_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[age({ age_in }) - 30 + 1].empee_contribution_rate_in;
export const unit_growth_rate_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[age({ age_in }) - 30 + 1].unit_growth_rate_in;
export const age_0_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[age({ age_in }) - 30 + 1].age_0_in;
export const fund_value_0_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[age({ age_in }) - 30 + 1].fund_value_0_in;
export const retirement_age_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[age({ age_in }) - 30 + 1].retirement_age_in;
export const salary_0_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[age({ age_in }) - 30 + 1].salary_0_in;
export const emper_contribution_rate_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[age({ age_in }) - 30 + 1].emper_contribution_rate_in;
export const contribution_charge_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[age({ age_in }) - 30 + 1].contribution_charge_in;

export {
income_tax, fund_value, unit_balance, unit_allocation, unit_price, empee_contribution, accumulated_empee_contributions, pension_tax_relief_ratio, empee_contribution_tax_relief, emper_contribution, salary, projected_fund_value };


// TODO generalise
export const age_opening = ({ age_opening_in }) => age_opening_in;
export const age_closing = ({ age_closing_in }) => age_closing_in;
export const rec_step = ({ rec_step_in }) => rec_step_in; // wrong: 0 = AAA, 1 = E salary inflation, 2 = E empee contribution, 3 = E unit growth rate (=EEE)
export const age = ({ age_in }) => age_in;
export const rec_step_inputs = ({ rec_step_inputs_in }) => rec_step_inputs_in;

export const age_0_projected = ({ rec_step_inputs_in, inputs_in, age_opening_in }) => {
  if (rec_step_inputs({ rec_step_inputs_in }) == 0) {
    let c = inputs({ inputs_in }).findIndex((d) => d.age_in < age_opening({ age_opening_in })); // think about timing // the constraint is on the Next record... (or End)
    if (c == -1) return inputs({ inputs_in })[inputs({ inputs_in }).length - 1].age_0; // abstract complete object in one todo
    else return inputs({ inputs_in })[c].age_0;
  } else {


    // lookup inputs using
  }};
export const retirement_age_projected = ({ rec_step_inputs_in, inputs_in, age_opening_in }) => {
  if (rec_step_inputs({ rec_step_inputs_in }) == 0) {
    let c = inputs({ inputs_in }).findIndex((d) => d.age_in < age_opening({ age_opening_in })); // think about timing // the constraint is on the Next record... (or End)
    if (c == -1) return inputs({ inputs_in })[inputs({ inputs_in }).length - 1].retirement_age; // abstract complete object in one todo
    else return inputs({ inputs_in })[c].retirement_age;
  } else {


    // lookup inputs using
  }};
export const salary_0_projected = ({ rec_step_inputs_in, inputs_in, age_opening_in }) => {
  if (rec_step_inputs({ rec_step_inputs_in }) == 0) {
    let c = inputs({ inputs_in }).findIndex((d) => d.age_in < age_opening({ age_opening_in })); // think about timing // the constraint is on the Next record... (or End)
    if (c == -1) return inputs({ inputs_in })[inputs({ inputs_in }).length - 1].salary_0; // abstract complete object in one todo
    else return inputs({ inputs_in })[c].salary_0;
  } else {


    // lookup inputs using
  }};
export const salary_inflation_rate_projected = ({ rec_step_inputs_in, inputs_in, age_opening_in }) => {
  if (rec_step_inputs({ rec_step_inputs_in }) == 0) {
    let c = inputs({ inputs_in }).findIndex((d) => d.age_in < age_opening({ age_opening_in })); // think about timing // the constraint is on the Next record... (or End)
    if (c == -1) return inputs({ inputs_in })[inputs({ inputs_in }).length - 1].salary_inflation_rate; // abstract complete object in one todo
    else return inputs({ inputs_in })[c].salary_inflation_rate;
  } else {


    // lookup inputs using
  }};
export const empee_contribution_rate_projected = ({ rec_step_inputs_in, inputs_in, age_opening_in }) => {
  if (rec_step_inputs({ rec_step_inputs_in }) == 0) {
    let c = inputs({ inputs_in }).findIndex((d) => d.age_in < age_opening({ age_opening_in })); // think about timing // the constraint is on the Next record... (or End)
    if (c == -1) return inputs({ inputs_in })[inputs({ inputs_in }).length - 1].empee_contribution_rate; // abstract complete object in one todo
    else return inputs({ inputs_in })[c].empee_contribution_rate;
  } else {


    // lookup inputs using
  }};
export const emper_contribution_rate_projected = ({ rec_step_inputs_in, inputs_in, age_opening_in }) => {
  if (rec_step_inputs({ rec_step_inputs_in }) == 0) {
    let c = inputs({ inputs_in }).findIndex((d) => d.age_in < age_opening({ age_opening_in })); // think about timing // the constraint is on the Next record... (or End)
    if (c == -1) return inputs({ inputs_in })[inputs({ inputs_in }).length - 1].emper_contribution_rate; // abstract complete object in one todo
    else return inputs({ inputs_in })[c].emper_contribution_rate;
  } else {


    // lookup inputs using
  }};
export const unit_growth_rate_projected = ({ rec_step_inputs_in, inputs_in, age_opening_in }) => {
  if (rec_step_inputs({ rec_step_inputs_in }) == 0) {
    let c = inputs({ inputs_in }).findIndex((d) => d.age_in < age_opening({ age_opening_in })); // think about timing // the constraint is on the Next record... (or End)
    if (c == -1) return inputs({ inputs_in })[inputs({ inputs_in }).length - 1].unit_growth_rate; // abstract complete object in one todo
    else return inputs({ inputs_in })[c].unit_growth_rate;
  } else {


    // lookup inputs using
  }};
export const fund_value_0_projected = ({ rec_step_inputs_in, inputs_in, age_opening_in }) => {
  if (rec_step_inputs({ rec_step_inputs_in }) == 0) {
    let c = inputs({ inputs_in }).findIndex((d) => d.age_in < age_opening({ age_opening_in })); // think about timing // the constraint is on the Next record... (or End)
    if (c == -1) return inputs({ inputs_in })[inputs({ inputs_in }).length - 1].fund_value_0; // abstract complete object in one todo
    else return inputs({ inputs_in })[c].fund_value_0;
  } else {


    // lookup inputs using
  }};
export const contribution_charge_projected = ({ rec_step_inputs_in, inputs_in, age_opening_in }) => {
  if (rec_step_inputs({ rec_step_inputs_in }) == 0) {
    let c = inputs({ inputs_in }).findIndex((d) => d.age_in < age_opening({ age_opening_in })); // think about timing // the constraint is on the Next record... (or End)
    if (c == -1) return inputs({ inputs_in })[inputs({ inputs_in }).length - 1].contribution_charge; // abstract complete object in one todo
    else return inputs({ inputs_in })[c].contribution_charge;
  } else {


    // lookup inputs using
  }};;

// neater if I merge these 2 blocks together:

export const age_0_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 1) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const retirement_age_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 2) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const salary_0_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 3) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const salary_inflation_rate_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 4) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const empee_contribution_rate_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 5) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const emper_contribution_rate_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 6) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const unit_growth_rate_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 7) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const fund_value_0_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 8) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const contribution_charge_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 9) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};;

export const age_0 = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) => {
  if (age({ age_in }) > age_0_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return age_0_projected({ rec_step_inputs_in, inputs_in, age_opening_in }); // Make it _0 vars?
  else return age_0_actual({ actuals_in, age_in });
};

export const retirement_age = ({ age_in, rec_step_in, age_opening_in, age_closing_in, actuals_in }) => {
  if (age({ age_in }) > retirement_age_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return retirement_age_actual({ actuals_in, age_in: retirement_age_actual_co({ rec_step_in, age_opening_in, age_closing_in }) }); // Make it _0 vars?
  else return retirement_age_actual({ actuals_in, age_in });
};

export const salary_0 = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) => {
  if (age({ age_in }) > salary_0_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return salary_0_projected({ rec_step_inputs_in, inputs_in, age_opening_in }); // Make it _0 vars?
  else return salary_0_actual({ actuals_in, age_in });
};

export const salary_inflation_rate = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) => {
  if (age({ age_in }) > salary_inflation_rate_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return salary_inflation_rate_projected({ rec_step_inputs_in, inputs_in, age_opening_in }); // Make it _0 vars?
  else return salary_inflation_rate_actual({ actuals_in, age_in });
};

export const empee_contribution_rate = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) => {
  if (age({ age_in }) > empee_contribution_rate_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return empee_contribution_rate_projected({ rec_step_inputs_in, inputs_in, age_opening_in }); // Make it _0 vars?
  else return empee_contribution_rate_actual({ actuals_in, age_in });
};

export const emper_contribution_rate = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) => {
  if (age({ age_in }) > emper_contribution_rate_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return emper_contribution_rate_projected({ rec_step_inputs_in, inputs_in, age_opening_in }); // Make it _0 vars?
  else return emper_contribution_rate_actual({ actuals_in, age_in });
};

export const unit_growth_rate = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) => {
  if (age({ age_in }) > unit_growth_rate_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return unit_growth_rate_projected({ rec_step_inputs_in, inputs_in, age_opening_in }); // Make it _0 vars?
  else return unit_growth_rate_actual({ actuals_in, age_in });
};

export const fund_value_0 = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) => {
  if (age({ age_in }) > fund_value_0_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return fund_value_0_projected({ rec_step_inputs_in, inputs_in, age_opening_in }); // Make it _0 vars?
  else return fund_value_0_actual({ actuals_in, age_in });
};

export const contribution_charge = ({ age_in, rec_step_in, age_opening_in, age_closing_in, rec_step_inputs_in, inputs_in, actuals_in }) => {
  if (age({ age_in }) > contribution_charge_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return contribution_charge_projected({ rec_step_inputs_in, inputs_in, age_opening_in }); // Make it _0 vars?
  else return contribution_charge_actual({ actuals_in, age_in });
};;

export const rec_order = ['age_0', 'retirement_age', 'salary_0', 'salary_inflation_rate', 'empee_contribution_rate', 'emper_contribution_rate', 'unit_growth_rate', 'fund_value_0', 'contribution_charge'];