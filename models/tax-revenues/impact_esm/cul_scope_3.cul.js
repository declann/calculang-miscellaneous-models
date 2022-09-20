// a simple one

export const net_salary = () => gross_salary() - income_tax();

export const gross_salary = () => gross_salary_in;

export const tax_rate = () => 0.15;

export const income_tax = () =>
  Math.max(tax_rate() * gross_salary() - tax_credit(), 0);

export const tax_credit = () => 1000;

export const effective_rate = () => 1 - net_salary() / gross_salary();
