export const subs_growth_pc = () => subs_growth_pc_in;
export const subs_churn_pc = () => subs_churn_pc_in;
export const subs_0 = () => subs_0_in; // subs at start of year 0
export const year = () => year_in;
export const CAC = () => CAC_in;

export const subs_new = () =>
  // its hard to find the year boundary needed here when I add expenses to model, when it worked without. Table and good error reporting is very important
  year() < 0 ? 0 : subs({ year_in: year() - 1 }) * (subs_growth_pc() / 100);

export const subs_churned = () =>
  ((subs({ year_in: year() - 1 }) + subs_new()) * subs_churn_pc()) / 100; // churn assumption also applies to new subs

// subs at end = prev subs at end + new subs@yr - churned subs@yr
export const subs = () => {
  if (year() < 0) return subs_0();
  else return subs({ year_in: year() - 1 }) + subs_new() - subs_churned();
}; // => can project subs given subs_0, growth and churn rates

export const expenses = () => subs_new() * CAC(); // error?
export const revenue = () => subs() * 100;
export const profit = () => revenue() - expenses();
