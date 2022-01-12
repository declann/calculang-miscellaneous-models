
export const mrr_cf = () => (mrr() * Math.exp(month() * mrr_growth()));

export const vc_cf = () => {
  if (month() == 3) return vc_1();
  if (month() == 11) return vc_2();
  else return 0;
};

export const rent_cf = () => (-rent());

export const employees = () => {
  if (month() == 0) return employees_0();
  else return employees({ month_in: month() - 1 }) + new_employees_per_month();
}

export const payroll_cf = () => (-salary_per_employee() * employees())

export const total_cf = () => (mrr_cf() + rent_cf() + vc_cf() + payroll_cf())

// inputs
export const mrr = () => (mrr_in)
export const month = () => (month_in);
export const mrr_growth = () => (mrr_growth_in);
export const vc_1 = () => (vc_1_in)
export const vc_2 = () => (vc_2_in)
export const rent = () => (rent_in)
export const employees_0 = () => (employees_0_in)
export const new_employees_per_month = () => (new_employees_per_month_in)
export const salary_per_employee = () => (salary_per_employee_in)