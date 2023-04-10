export const age = () => age_in;
export const age_0 = () => 20;
export const retirement_age = () => 65;
export const salary_0 = () => 30000;
export const salary_inflation_rate = () => 0.02;
export const empee_contribution_rate = () => 0.1;
export const unit_growth_rate = () => 0.05;
export const fund_value_0 = () => 0;

// disclaimer: This is a work-in-progress model released for some calculang/tooling demonstration purposes and numbers shouldn't be relied upon; there are known model issues.

// this model should prob. be broken into some modular pieces, but it isn't because it definitely needs memoisation, which is currently only working for non-modular models

// todo add timing comments

export const fund_value = () => unit_balance() * unit_price(); // not allowing for multiple funds now

export const unit_balance = () => {
  if (age() <= age_0() - 1) return fund_value_0() / unit_price();
  else return unit_balance({ age_in: age() - 1 }) + unit_allocation();
  // timing = premium received at start of year and allocated immediately
};

export const unit_allocation = () => empee_contribution() / unit_price(); // todo emper contribution, AVCs?

export const unit_price = () => {
  if (age() <= age_0()) return 1;
  else return unit_price({ age_in: age() - 1 }) * (1 + unit_growth_rate());
};

export const empee_contribution = () => {
  if (age() <= age_0() - 1 || age() == retirement_age()) return 0;
  else return salary({ age_in: age() - 1 }) * empee_contribution_rate();
};

export const salary = () => {
  // at end of year
  if (age() <= age_0() - 1) return salary_0();
  else if (age() >= retirement_age()) return 0;
  else return salary({ age_in: age() - 1 }) * (1 + salary_inflation_rate()); // < age_0 = undefined, any way/use to capture this statically?
};

export const projected_fund_value = () =>
  // at retirement:
  fund_value({ age_in: retirement_age() });

// explicit inputs ::
