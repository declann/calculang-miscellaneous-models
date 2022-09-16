// a simple one

export const net_salary = () => gross_salary() - income_tax();

export const gross_salary = () => gross_salary_in;

export const income_tax = () => Math.max(0.1 * gross_salary() - tax_credit(), 0);

export const tax_credit = () => (1000);
