var m = require('./payroll')

/*


export const pay_period = () => pay_period_in;
export const pay_period_duration = () => pay_period_duration_in; // 'M' or 'W'

// op = opening = pre current pay period, fut = after current pay period to end of year
export const op_gross_salary = () => op_gross_salary_in;
export const pay_period_gross_salary = () => pay_period_gross_salary_in;

*/



console.log(m.usc({pay_period_in:2, pay_period_duration_in:'M', op_gross_salary_in: 1000, pay_period_gross_salary_in:1000}))
