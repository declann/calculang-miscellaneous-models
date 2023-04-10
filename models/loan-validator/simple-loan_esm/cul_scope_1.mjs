import { d_i } from "./cul_scope_0.mjs";import { d_i_year } from "./cul_scope_0.mjs";import { skip_interest } from "./cul_scope_0.mjs";import { missed_repayment_year } from "./cul_scope_0.mjs";import { year } from "./cul_scope_0.mjs";import { term } from "./cul_scope_0.mjs";import { i } from "./cul_scope_0.mjs";import { principal } from "./cul_scope_0.mjs";import { interest_rate } from "./cul_scope_0.mjs";import { balance } from "./cul_scope_0.mjs";import { repayment } from "./cul_scope_0.mjs";import { repayment_due } from "./cul_scope_0.mjs";import { interest_repayment } from "./cul_scope_0.mjs";import { capital_repayment } from "./cul_scope_0.mjs";import { interest } from "./cul_scope_0.mjs";import { repayment_amount } from "./cul_scope_0.mjs";import { v_pow_term_left } from "./cul_scope_0.mjs";import { v } from "./cul_scope_0.mjs";export const v_ = ({ year_in, d_i_year_in, i_in, d_i_in }) => 1 / (1 + interest_rate({ year_in, d_i_year_in, i_in, d_i_in }));

export const v_pow_term_left_ = ({ year_in, d_i_year_in, i_in, d_i_in, term_in }) => Math.pow(v({ year_in, d_i_year_in, i_in, d_i_in }), term({ term_in }) - year({ year_in }));

// this models automatic refinancing because there is no restriction to last financing, an updated calc is applied every year
export const repayment_amount_ = ({ year_in, principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in }) => {
  if (Math.abs(balance({ principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in, year_in: year({ year_in }) - 1 })) < 0.01) return 0;
  //if (term() == year()) edge case?
  if (interest_rate({ year_in, d_i_year_in, i_in, d_i_in }) == 0)
  return balance({ principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in, year_in: year({ year_in }) - 1 }) / (term({ term_in }) - year({ year_in }));else

  return (
    balance({ principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in, year_in: year({ year_in }) - 1 }) * interest_rate({ year_in, d_i_year_in, i_in, d_i_in }) / (
    1 - v_pow_term_left({ year_in, d_i_year_in, i_in, d_i_in, term_in })));

};

// interest charged to balance:
export const interest_ = ({ year_in, principal_in, missed_repayment_year_in, skip_interest_in, term_in, d_i_year_in, i_in, d_i_in }) =>
balance({ principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in, year_in: year({ year_in }) - 1 }) * interest_rate({ year_in, d_i_year_in, i_in, d_i_in });

// restrict cap repayment to repayment made.. (no, implied?)
export const capital_repayment_ = ({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in }) => {
  return Math.max(0, repayment({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in }) - interest_repayment({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in }));
};
export const interest_repayment_ = ({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in }) => Math.min(repayment({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in }), interest({ year_in, principal_in, missed_repayment_year_in, skip_interest_in, term_in, d_i_year_in, i_in, d_i_in }));

// year 0 the principal is received, first repayment is due year=1
export const repayment_due_ = ({ year_in, term_in }) => year({ year_in }) <= term({ term_in }) && year({ year_in }) != 0;

export const repayment_ = ({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in }) => {
  // I'm modelling a "missed repayment" as being either 0 (skip_interest is set) or =interest (an interest-only payment: capital part is 'missed')
  if (year({ year_in }) == missed_repayment_year({ missed_repayment_year_in })) {
    if (skip_interest({ skip_interest_in })) return 0;else
    return interest({ year_in, principal_in, missed_repayment_year_in, skip_interest_in, term_in, d_i_year_in, i_in, d_i_in });
  } else return repayment_due({ year_in, term_in }) * repayment_amount({ year_in, principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in });
};

export const balance_ = ({ year_in, principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in }) => {
  if (year({ year_in }) < 0) return 0;
  if (year({ year_in }) == 0) return principal({ principal_in });else
  return balance({ principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in, year_in: year({ year_in }) - 1 }) + interest({ year_in, principal_in, missed_repayment_year_in, skip_interest_in, term_in, d_i_year_in, i_in, d_i_in }) - repayment({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in });
};

// changing interest rates are a modelling option, blend here and use above:
export const interest_rate_ = ({ year_in, d_i_year_in, i_in, d_i_in }) => year({ year_in }) >= d_i_year({ d_i_year_in }) ? i({ i_in }) + d_i({ d_i_in }) : i({ i_in });

// inputs:
export const principal_ = ({ principal_in }) => principal_in;
export const i_ = ({ i_in }) => i_in; // interest rate
export const term_ = ({ term_in }) => term_in;
export const year_ = ({ year_in }) => year_in;

// inputs for missed repayment option:
export const missed_repayment_year_ = ({ missed_repayment_year_in }) => missed_repayment_year_in;
export const skip_interest_ = ({ skip_interest_in }) => skip_interest_in;

// inputs for delta/changing interest rates:
export const d_i_year_ = ({ d_i_year_in }) => d_i_year_in; // year the delta interest rate happens
export const d_i_ = ({ d_i_in }) => d_i_in; // delta interest rate