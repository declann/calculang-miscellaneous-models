// -nomemo compiling step necessary first, but I can move to use calculang api here

const introspection = require('./pension-calculator-nomemo.introspection.json');

//let inputs = ['salary_inflation_rate_in', 'empee_contribution_rate_in', 'unit_growth_rate_in'
let inputs = Object.values(introspection.cul_functions).filter(d => d.reason == 'input definition' && d.cul_scope_id == 0).map(d => d.name).filter(d => d != 'age_in'); // _ins
let formulae_not_inputs = Object.values(introspection.cul_functions).filter(d => inputs.indexOf(d.name +'_in') == -1 && inputs.indexOf(d.name) == -1 && d.cul_scope_id == 0).map(d => d.name).filter(d => d!='age_in' && d != 'age')//.join(',');

//console.log(formulae_not_inputs);

debugger;

console.log(`
import {
  //age, // important
  ${formulae_not_inputs.join(',')},
} from "./projected.cul";


// actual data todo add flexibility

export const actuals = () => actuals_in;
export const inputs = () => inputs_in;

// TODO generalise
export const salary_inflation_rate_actual = () => actuals()[age()-30+1].salary_inflation_rate_in;
export const empee_contribution_rate_actual = () => actuals()[age()-30+1].empee_contribution_rate_in;
export const unit_growth_rate_actual = () => actuals()[age()-30+1].unit_growth_rate_in;
export const age_0_actual = () => actuals()[age()-30+1].age_0_in;
export const fund_value_0_actual = () => actuals()[age()-30+1].fund_value_0_in;
export const retirement_age_actual = () => actuals()[age()-30+1].retirement_age_in;
export const salary_0_actual = () => actuals()[age()-30+1].salary_0_in;
export const emper_contribution_rate_actual = () => actuals()[age()-30+1].emper_contribution_rate_in;
export const contribution_charge_actual = () => actuals()[age()-30+1].contribution_charge_in;

export {
  ${formulae_not_inputs.join(',')}
};

// TODO generalise
export const age_opening = () => age_opening_in;
export const age_closing = () => age_closing_in;
export const rec_step = () => rec_step_in; // wrong: 0 = AAA, 1 = E salary inflation, 2 = E empee contribution, 3 = E unit growth rate (=EEE)
export const age = () => age_in;
export const rec_step_inputs = () => rec_step_inputs_in;

${inputs.filter(d => d != 'age_in').map(d => d.slice(0,-3)).map((d,i) => `export const ${d}_projected = () => {
  if (rec_step_inputs() == 0) {
    let c = inputs().findIndex(d => d.age_in < age_opening()); // think about timing // the constraint is on the Next record... (or End)
    if (c == -1) return inputs()[inputs().length-1].${d}_in; // abstract complete object in one todo
    else return inputs()[c].${d}_in
  } else { // lookup inputs using

  }
};`).join('\n\n')};


// neater if I merge these 2 blocks together:

${inputs.filter(d => d != 'age_in').map(d => d.slice(0,-3)).map((d,i) => `export const ${d}_actual_co = () => {
  if (rec_step() >= ${i+1}) return age_opening();
  else return age_closing();
};`).join('\n\n')};

${inputs.filter(d => d != 'age_in').map(d => d.slice(0, -3)).map(d => `export const ${d} = () => {
  if(age() > ${d}_actual_co())
    return ${d}${d == 'retirement_age' ? '_actual({age_in:retirement_age_actual_co()})' : '_projected()'}; // Make it _0 vars?
  else return ${d}_actual();
};`).join('\n\n')};

export const rec_order = ['${inputs.filter(d => d != 'age_in').map(d => d.slice(0,-3)).join("','")}'];

`)