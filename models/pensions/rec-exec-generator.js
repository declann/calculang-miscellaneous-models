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

export const salary_inflation_rate_actual = () => age() - age_0() < 0 ? 0 : [0.019, 0.01, 0.01][age() - age_0()];
export const empee_contribution_rate_actual = () => age() - age_0() < 0 ? 0 : [0.1, 0.1, 0.08][age() - age_0()];
export const unit_growth_rate_actual = () => age() - age_0() < 0 ? 0 : [0.06, 0.04, 0.04][age() - age_0()];
export const age_0_actual = () => 20;//[20,20,20][age() - age_0()]; // silly?
export const fund_value_0_actual = () => age() - age_0() < 0 ? 0 : [0,0,0][age() - age_0()];
export const retirement_age_actual = () => age() - age_0() < 0 ? 0 : [65,65,65][age() - age_0()];
export const salary_0_actual = () => age() - age_0() < 0 ? 0 : [30000,30000,30000][age() - age_0()];

export {
  ${formulae_not_inputs.join(',')},
  ${inputs.map(d => d.slice(0, -3) + '_projected').join(',\n')}
};

// TODO
export const age_opening = () => age_opening_in;
export const age_closing = () => age_closing_in;
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

`)