// a simple one

export const net_salary = ({ gross_salary_in }) => gross_salary({ gross_salary_in }) - income_tax({ gross_salary_in });

export const gross_salary = ({ gross_salary_in }) => gross_salary_in;

export const income_tax = ({ gross_salary_in }) => Math.min(0.1 * gross_salary({ gross_salary_in }) - tax_credit({}), 0);

export const tax_credit = ({}) => 5000;