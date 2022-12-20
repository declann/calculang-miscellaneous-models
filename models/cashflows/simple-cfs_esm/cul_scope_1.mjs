import { npv_i } from "./cul_scope_0.mjs";import { last_month } from "./cul_scope_0.mjs";import { salary_per_employee } from "./cul_scope_0.mjs";import { new_employees_per_month } from "./cul_scope_0.mjs";import { employees_0 } from "./cul_scope_0.mjs";import { rent } from "./cul_scope_0.mjs";import { vc_2 } from "./cul_scope_0.mjs";import { vc_1 } from "./cul_scope_0.mjs";import { mrr_growth } from "./cul_scope_0.mjs";import { month } from "./cul_scope_0.mjs";import { mrr } from "./cul_scope_0.mjs";import { npv } from "./cul_scope_0.mjs";import { total_cf } from "./cul_scope_0.mjs";import { payroll_cf } from "./cul_scope_0.mjs";import { employees } from "./cul_scope_0.mjs";import { rent_cf } from "./cul_scope_0.mjs";import { vc_cf } from "./cul_scope_0.mjs";import { mrr_cf } from "./cul_scope_0.mjs";export const mrr_cf_ = ({ month_in, mrr_in, mrr_growth_in }) => {
  if (month({ month_in }) == -1) return 0;else
  return mrr({ mrr_in }) * Math.exp(month({ month_in }) * mrr_growth({ mrr_growth_in }));
};

export const vc_cf_ = ({ month_in, vc_1_in, vc_2_in }) => {
  if (month({ month_in }) == 3) return vc_1({ vc_1_in });
  if (month({ month_in }) == 11) return vc_2({ vc_2_in });else
  return 0;
};

export const rent_cf_ = ({ month_in, rent_in }) => {
  if (month({ month_in }) == -1) return 0; // => rent_cf now dept on month
  else return -rent({ rent_in });
};

export const employees_ = ({ month_in, employees_0_in, new_employees_per_month_in }) => {
  if (month({ month_in }) == -1) return 0;
  if (month({ month_in }) == 0) return employees_0({ employees_0_in });else
  return employees({ employees_0_in, new_employees_per_month_in, month_in: month({ month_in }) - 1 }) + new_employees_per_month({ new_employees_per_month_in });
};

export const payroll_cf_ = ({ salary_per_employee_in, month_in, employees_0_in, new_employees_per_month_in }) => -salary_per_employee({ salary_per_employee_in }) * employees({ month_in, employees_0_in, new_employees_per_month_in });

export const total_cf_ = ({ month_in, mrr_in, mrr_growth_in, rent_in, vc_1_in, vc_2_in, salary_per_employee_in, employees_0_in, new_employees_per_month_in }) => mrr_cf({ month_in, mrr_in, mrr_growth_in }) + rent_cf({ month_in, rent_in }) + vc_cf({ month_in, vc_1_in, vc_2_in }) + payroll_cf({ salary_per_employee_in, month_in, employees_0_in, new_employees_per_month_in });

export const npv_ = ({ month_in, last_month_in, mrr_in, mrr_growth_in, rent_in, vc_1_in, vc_2_in, salary_per_employee_in, employees_0_in, new_employees_per_month_in, npv_i_in }) => {
  if (month({ month_in }) >= last_month({ last_month_in })) return 0;
  return (
    (npv({ last_month_in, mrr_in, mrr_growth_in, rent_in, vc_1_in, vc_2_in, salary_per_employee_in, employees_0_in, new_employees_per_month_in, npv_i_in, month_in: month({ month_in }) + 1 }) + total_cf({ mrr_in, mrr_growth_in, rent_in, vc_1_in, vc_2_in, salary_per_employee_in, employees_0_in, new_employees_per_month_in, month_in: month({ month_in }) + 1 })) / (
    1 + npv_i({ npv_i_in })));

};

// inputs
export const mrr_ = ({ mrr_in }) => mrr_in;
export const month_ = ({ month_in }) => month_in;
export const mrr_growth_ = ({ mrr_growth_in }) => mrr_growth_in;
export const vc_1_ = ({ vc_1_in }) => vc_1_in;
export const vc_2_ = ({ vc_2_in }) => vc_2_in;
export const rent_ = ({ rent_in }) => rent_in;
export const employees_0_ = ({ employees_0_in }) => employees_0_in;
export const new_employees_per_month_ = ({ new_employees_per_month_in }) => new_employees_per_month_in;
export const salary_per_employee_ = ({ salary_per_employee_in }) => salary_per_employee_in;
export const last_month_ = ({ last_month_in }) => last_month_in;
export const npv_i_ = ({ npv_i_in }) => npv_i_in;