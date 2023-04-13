// -nomemo compiling step necessary first, but I can move to use calculang api here

const introspection = require('./pension-calculator-nomemo.introspection.json');

//let inputs = ['salary_inflation_rate_in', 'empee_contribution_rate_in', 'unit_growth_rate_in'
let inputs = Object.values(introspection.cul_functions).filter(d => d.reason == 'input definition').map(d => d.name).filter(d => d != 'age_in'); // _ins
let formulae_not_inputs = Object.values(introspection.cul_functions).filter(d => inputs.indexOf(d.name +'_in') == -1 && inputs.indexOf(d.name) == -1).map(d => d.name).filter(d => d!='age_in')//.join(',');

//console.log(formulae_not_inputs);

debugger;

console.log(`
import {
  //age, // important
  ${formulae_not_inputs.join(',')},
  ${inputs.map(d => d.slice(0, -3) + ' as ' + d.slice(0, -3) + '_projected').join(',\n')} // how come I didn't put _ here and it worked?
} from "./projected.cul";


// actual data todo add flexibility

export const actuals = () => actuals_in;

// TODO generalise
export const salary_inflation_rate_actual = () => actuals()[age()-20].salary_inflation_rate;
export const empee_contribution_rate_actual = () => actuals()[age()-20].empee_contribution_rate;
export const unit_growth_rate_actual = () => actuals()[age()-20].unit_growth_rate;
export const age_0_actual = () => actuals()[age()-20].age_0;
export const fund_value_0_actual = () => actuals()[age()-20].fund_value_0;
export const retirement_age_actual = () => actuals()[age()-20].retirement_age;
export const salary_0_actual = () => actuals()[age()-20].salary_0;

export {
  ${formulae_not_inputs.join(',')},
  ${inputs.map(d => d.slice(0, -3) + '_projected').join(',\n')}
};

// TODO generalise
export const age_opening = () => age_opening_in + age_opening_closing_offset(); // todo offset in terms of closing-opening?
export const age_closing = () => age_closing_in + age_opening_closing_offset();
export const age_opening_closing_offset = () => age_opening_closing_offset_in;
export const rec_step = () => rec_step_in; // wrong: 0 = AAA, 1 = E salary inflation, 2 = E empee contribution, 3 = E unit growth rate (=EEE)


// neater if I merge these 2 blocks together:

${inputs.filter(d => d != 'age_in').map(d => d.slice(0,-3)).map((d,i) => `export const ${d}_actual_co = () => {
  if (rec_step() >= ${i+1}) return age_opening();
  else return age_closing();
};`).join('\n\n')};

${inputs.filter(d => d != 'age_in').map(d => d.slice(0, -3)).map(d => `export const ${d} = () => {
  if(age() > ${d}_actual_co())
    return ${d}_projected()
  else return ${d}_actual();
};`).join('\n\n')};

export const rec_order = ['${inputs.filter(d => d != 'age_in').map(d => d.slice(0,-3)).join("','")}'];

`)