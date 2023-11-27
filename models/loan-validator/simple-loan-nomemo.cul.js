export const v = () => 1 / (1 + interest_rate());

export const v_pow_term_left = () => Math.pow(v(), term() - year());

// this models automatic refinancing because there is no restriction to last financing, an updated calc is applied every year
export const repayment_amount = () => {
  if (Math.abs(balance({ year_in: year() - 1 })) < 0.01) return 0;
  //if (term() == year()) edge case?
  if (interest_rate() == 0)
    return balance({ year_in: year() - 1 }) / (term() - year());
  else
    return (
      (balance({ year_in: year() - 1 }) * interest_rate()) /
      (1 - v_pow_term_left())
    );
};

// interest charged to balance:
export const interest = () =>
  balance({ year_in: year() - 1 }) * interest_rate();

// restrict cap repayment to repayment made.. (no, implied?)
export const capital_repayment = () => {
  return Math.max(0, repayment() - interest_repayment());
};
export const interest_repayment = () => Math.min(repayment(), interest());

// year 0 the principal is received, first repayment is due year=1
export const repayment_due = () => year() <= term() && year() != 0;

export const repayment = () => {
  // I'm modelling a "missed repayment" as being either 0 (skip_interest is set) or =interest (an interest-only payment: capital part is 'missed')
  if (year() == missed_repayment_year()) {
    if (skip_interest()) return 0;
    else return interest();
  } else return repayment_due() * repayment_amount();
};

export const balance = () => {
  if (year() < 0) return 0;
  if (year() == 0) return principal();
  else return balance({ year_in: year() - 1 }) + interest() - repayment();
};

// changing interest rates are a modelling option, blend here and use above:
export const interest_rate = () => (year() >= d_i_year() ? i() + d_i() : i());

// inputs:
export const principal = () => principal_in;
export const i = () => i_in; // interest rate
export const term = () => term_in;
export const year = () => year_in;

// inputs for missed repayment option:
export const missed_repayment_year = () => missed_repayment_year_in;
export const skip_interest = () => skip_interest_in;

// inputs for delta/changing interest rates:
export const d_i_year = () => d_i_year_in; // year the delta interest rate happens
export const d_i = () => d_i_in; // delta interest rate
