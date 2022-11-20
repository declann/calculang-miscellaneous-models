import {
subs,
subs_new_ as subs_new_expected,
subs_churned_ as subs_churned_expected,
year,
revenue,
expenses,
profit,
CAC } from
"./cul_scope_1.mjs";
export { subs, year };
export { revenue, expenses, profit, CAC }; // necessary

export const actuals_table = ({ actuals_table_in }) => actuals_table_in;

// actuals
export const subs_0 = ({ subs_0_in }) => subs_0_in; // start at 100 subs (this line now redundant!)
export const subs_new_actual = ({ actuals_table_in, year_in }) =>
actuals_table({ actuals_table_in })[year({ year_in }) + 1].subs_new_actual;
export const subs_churned_actual = ({ actuals_table_in, year_in }) =>
actuals_table({ actuals_table_in })[year({ year_in }) + 1].subs_churned_actual;

// year up to which actual data should be used, -1=use only expecteds
export const subs_new_actual_to = ({ subs_new_actual_to_in }) => subs_new_actual_to_in;
export const subs_churned_actual_to = ({ subs_churned_actual_to_in }) => subs_churned_actual_to_in;

// interleave actuals into projections: this rebases expd using actuals?
export const subs_new = ({ year_in, subs_new_actual_to_in, actuals_table_in, subs_0_in, subs_churned_actual_to_in, subs_churn_pc_in, subs_growth_pc_in }) => {
  if (year({ year_in }) <= subs_new_actual_to({ subs_new_actual_to_in })) return subs_new_actual({ actuals_table_in, year_in });else
  return subs_new_expected({ year_in, subs_0_in, subs_new_actual_to_in, actuals_table_in, subs_churned_actual_to_in, subs_churn_pc_in, subs_growth_pc_in }); // this is an override which uses itself: but it doesn't compile correctly, check memo-loader version?
};
export const subs_churned = ({ year_in, subs_churned_actual_to_in, actuals_table_in, subs_0_in, subs_new_actual_to_in, subs_growth_pc_in, subs_churn_pc_in }) => {
  if (year({ year_in }) <= subs_churned_actual_to({ subs_churned_actual_to_in })) return subs_churned_actual({ actuals_table_in, year_in });else
  return subs_churned_expected({ year_in, subs_0_in, subs_new_actual_to_in, actuals_table_in, subs_growth_pc_in, subs_churned_actual_to_in, subs_churn_pc_in });
};

// move away from experience.
// just look at projections
// => subs({year:x,actuals:x})

export const ea_start = ({ ea_start_in }) => ea_start_in;
export const ea_end = ({ ea_end_in }) => ea_end_in;

export const subs_ea = ({ subs_0_in, actuals_table_in, subs_growth_pc_in, subs_churn_pc_in, ea_end_in, ea_start_in }) => [
{
  type: 'Expected',
  function: 'subs',
  value: subs({ subs_0_in, actuals_table_in, subs_growth_pc_in, subs_churn_pc_in,
    year_in: ea_end({ ea_end_in }),
    subs_new_actual_to_in: ea_start({ ea_start_in }),
    subs_churned_actual_to_in: ea_start({ ea_start_in }) }) },


{
  type: '-> Actual Sales', // this impact will include expd churn on sales impact, alt. split could use 0 decrements and create a balancing 'confounding' amount
  function: 'subs',
  value: subs({ subs_0_in, actuals_table_in, subs_growth_pc_in, subs_churn_pc_in,
    year_in: ea_end({ ea_end_in }),
    subs_new_actual_to_in: ea_end({ ea_end_in }),
    subs_churned_actual_to_in: ea_start({ ea_start_in }) }) },


{
  type: '-> Actual Churn (=Actual)',
  function: 'subs',
  value: subs({ subs_0_in, actuals_table_in, subs_growth_pc_in, subs_churn_pc_in,
    year_in: ea_end({ ea_end_in }),
    subs_new_actual_to_in: ea_end({ ea_end_in }),
    subs_churned_actual_to_in: ea_end({ ea_end_in }) }) }];



// todo use an impacts abstraction or move subtraction to VL

// reconcile actual to expected, experience=A-E
// in year
// this should be abstracted using a table for clarity
export const subs_new_experience = ({ year_in, actuals_table_in, subs_0_in, subs_churn_pc_in, subs_growth_pc_in }) => {
  // now a fn on year
  const subs_churned_actual_to_in = year({ year_in }) - 1;
  return (
    subs_new({ year_in, actuals_table_in, subs_0_in, subs_churned_actual_to_in, subs_churn_pc_in, subs_growth_pc_in, subs_new_actual_to_in: year({ year_in }) }) -
    subs_new({ year_in, actuals_table_in, subs_0_in, subs_churned_actual_to_in, subs_churn_pc_in, subs_growth_pc_in, subs_new_actual_to_in: year({ year_in }) - 1 }));

};

export const subs_churned_experience = ({ year_in, actuals_table_in, subs_0_in, subs_growth_pc_in, subs_churn_pc_in }) => {
  // now a fn on year
  const subs_new_actual_to_in = year({ year_in });
  return (
    subs_churned({ year_in, actuals_table_in, subs_0_in, subs_new_actual_to_in, subs_growth_pc_in, subs_churn_pc_in, subs_churned_actual_to_in: year({ year_in }) }) -
    subs_churned({ year_in, actuals_table_in, subs_0_in, subs_new_actual_to_in, subs_growth_pc_in, subs_churn_pc_in, subs_churned_actual_to_in: year({ year_in }) - 1 }));
  // todo project, constrain rec ordering somewhere
};

// re introspection: devtools can probably do this? But messy at that stage, so might not be an option
// export to excel with hacked formulae (=7+0*E8) for relationships is probably a nice short-term feature until I get the experience outside
// hacked formulae can easily be replaced by proper conversions if I convert JS to Excel in fut
// maybe this is important for explanation phase, more impt than technical/memo-loader?