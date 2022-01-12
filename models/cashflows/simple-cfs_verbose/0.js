export const mrr_cf = ({ mrr_in, month_in, mrr_growth_in }) => mrr({ mrr_in }) * Math.exp(month({ month_in }) * mrr_growth({ mrr_growth_in }));

export const vc_cf = ({ month_in, vc_1_in, vc_2_in }) => {
  if (month({ month_in }) == 3) return vc_1({ vc_1_in });
  if (month({ month_in }) == 11) return vc_2({ vc_2_in });else
  return 0;
};

export const rent_cf = ({ rent_in }) => -rent({ rent_in });

export const employees = ({ month_in, employees_0_in, new_employees_per_month_in }) => {
  if (month({ month_in }) == 0) return employees_0({ employees_0_in });else
  return employees({ employees_0_in, new_employees_per_month_in, month_in: month({ month_in }) - 1 }) + new_employees_per_month({ new_employees_per_month_in });
};

export const payroll_cf = ({ salary_per_employee_in, month_in, employees_0_in, new_employees_per_month_in }) => -salary_per_employee({ salary_per_employee_in }) * employees({ month_in, employees_0_in, new_employees_per_month_in });

export const total_cf = ({ mrr_in, month_in, mrr_growth_in, rent_in, vc_1_in, vc_2_in, salary_per_employee_in, employees_0_in, new_employees_per_month_in }) => mrr_cf({ mrr_in, month_in, mrr_growth_in }) + rent_cf({ rent_in }) + vc_cf({ month_in, vc_1_in, vc_2_in }) + payroll_cf({ salary_per_employee_in, month_in, employees_0_in, new_employees_per_month_in });

export const npv = ({ month_in, last_month_in, mrr_in, mrr_growth_in, rent_in, vc_1_in, vc_2_in, salary_per_employee_in, employees_0_in, new_employees_per_month_in, npv_i_in }) => {
  if (month({ month_in }) > last_month({ last_month_in })) return 0;
  return (
    (npv({ last_month_in, mrr_in, mrr_growth_in, rent_in, vc_1_in, vc_2_in, salary_per_employee_in, employees_0_in, new_employees_per_month_in, npv_i_in, month_in: month({ month_in }) + 1 }) - total_cf({ mrr_in, mrr_growth_in, rent_in, vc_1_in, vc_2_in, salary_per_employee_in, employees_0_in, new_employees_per_month_in, month_in: month({ month_in }) + 1 })) / (
    1 + npv_i({ npv_i_in })));

};

// inputs
export const mrr = ({ mrr_in }) => mrr_in;
export const month = ({ month_in }) => month_in;
export const mrr_growth = ({ mrr_growth_in }) => mrr_growth_in;
export const vc_1 = ({ vc_1_in }) => vc_1_in;
export const vc_2 = ({ vc_2_in }) => vc_2_in;
export const rent = ({ rent_in }) => rent_in;
export const employees_0 = ({ employees_0_in }) => employees_0_in;
export const new_employees_per_month = ({ new_employees_per_month_in }) => new_employees_per_month_in;
export const salary_per_employee = ({ salary_per_employee_in }) => salary_per_employee_in;
export const last_month = ({ last_month_in }) => last_month_in;
export const npv_i = ({ npv_i_in }) => npv_i_in;