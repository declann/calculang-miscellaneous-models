var pensions = require('./pension-calculator.js');

console.log(pensions.projected_fund_value({age_0_in:21,retirement_age_in:65,annual_salary_0_in:20000,empee_contribution_rate_in:0.1,unit_growth_rate_in:0.06, salary_inflation_rate_in:0.02,fund_value_0_in:5000}))

//age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, annual_salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in