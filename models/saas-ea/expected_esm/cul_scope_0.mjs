export const subs_growth_pc = ({ subs_growth_pc_in }) => subs_growth_pc_in;
export const subs_churn_pc = ({ subs_churn_pc_in }) => subs_churn_pc_in;
export const subs_0 = ({ subs_0_in }) => subs_0_in; // subs at start of year 0
export const year = ({ year_in }) => year_in;
export const CAC = ({ CAC_in }) => CAC_in;

export const subs_new = ({ year_in, subs_0_in, subs_churn_pc_in, subs_growth_pc_in }) =>
// its hard to find the year boundary needed here when I add expenses to model, when it worked without. Table and good error reporting is very important
year({ year_in }) < 0 ? 0 : subs({ subs_0_in, subs_growth_pc_in, subs_churn_pc_in, year_in: year({ year_in }) - 1 }) * (subs_growth_pc({ subs_growth_pc_in }) / 100);

export const subs_churned = ({ year_in, subs_0_in, subs_growth_pc_in, subs_churn_pc_in }) =>
(subs({ subs_0_in, subs_growth_pc_in, subs_churn_pc_in, year_in: year({ year_in }) - 1 }) + subs_new({ year_in, subs_0_in, subs_churn_pc_in, subs_growth_pc_in })) * subs_churn_pc({ subs_churn_pc_in }) / 100; // churn assumption also applies to new subs

// subs at end = prev subs at end + new subs@yr - churned subs@yr
export const subs = ({ year_in, subs_0_in, subs_growth_pc_in, subs_churn_pc_in }) => {
  if (year({ year_in }) < 0) return subs_0({ subs_0_in });else
  return subs({ subs_0_in, subs_growth_pc_in, subs_churn_pc_in, year_in: year({ year_in }) - 1 }) + subs_new({ year_in, subs_0_in, subs_churn_pc_in, subs_growth_pc_in }) - subs_churned({ year_in, subs_0_in, subs_growth_pc_in, subs_churn_pc_in });
}; // => can project subs given subs_0, growth and churn rates

export const expenses = ({ year_in, subs_0_in, subs_churn_pc_in, subs_growth_pc_in, CAC_in }) => subs_new({ year_in, subs_0_in, subs_churn_pc_in, subs_growth_pc_in }) * CAC({ CAC_in }); // error?
export const revenue = ({ year_in, subs_0_in, subs_growth_pc_in, subs_churn_pc_in }) => subs({ year_in, subs_0_in, subs_growth_pc_in, subs_churn_pc_in }) * 100;
export const profit = ({ year_in, subs_0_in, subs_growth_pc_in, subs_churn_pc_in, CAC_in }) => revenue({ year_in, subs_0_in, subs_growth_pc_in, subs_churn_pc_in }) - expenses({ year_in, subs_0_in, subs_churn_pc_in, subs_growth_pc_in, CAC_in });