var cfs = require('./simple-cfs.js');
var _ = require('underscore')

console.log(
  cfs.mrr_cf({ month_in:4, mrr_in: 300000, mrr_growth_in: 0.05 })
)

console.log(
  cfs.employees({ month_in: 4, employees_0_in:10, new_employees_per_month_in:2 })
)

console.log(
  cfs.employees({ month_in: 4, employees_0_in:10, new_employees_per_month_in:2 })
)



var mrr_in = 30000;
var mrr_growth_in = 0.05;
var rent_in = 15000;
var vc_1_in = 2e6;
var vc_2_in = 2.5e6;
var salary_per_employee_in = 9000;
var employees_0_in = 10;
var new_employees_per_month_in = 2;


console.log(
  _.range(12).map(month_in => (
    cfs.total_cf({ mrr_in, month_in, mrr_growth_in, rent_in, vc_1_in, vc_2_in, salary_per_employee_in, employees_0_in, new_employees_per_month_in })
  ))
)

console.log(cfs.npv({ mrr_in, month_in:-1, mrr_growth_in, rent_in, vc_1_in, vc_2_in, salary_per_employee_in, employees_0_in, new_employees_per_month_in, npv_i_in:0.1, last_month_in:11 }))