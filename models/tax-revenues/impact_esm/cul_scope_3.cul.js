// a simple one

export const net_salary = () => gross_salary() - income_tax();

export const gross_salary = () => gross_salary_in;


export const income_tax = () =>
  Math.max(paye() + prsi() - tax_credit(), 0);

export const tax_credit = () => 1000;

export const effective_rate = () => 1 - net_salary() / gross_salary();

export const prsi = () => gross_salary() * 0.04;

export const band = () => 30000;

export const paye = () => {
  return 0.2 * gross_salary() + 0.2 * Math.min(gross_salary() - band(), 0);
};
