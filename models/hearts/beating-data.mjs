import { trend } from './beating_esm/cul_scope_0.mjs'

import { range } from 'underscore';

console.table(range(-3, 3, 0.1).map(x_in => ({ x_in, trend: trend({ x_in }) })));

// from spec.model and spec.input_domains generate data

// https://stackoverflow.com/questions/18957972/cartesian-product-of-objects-in-javascript
function copy(obj) {
  var res = {};
  for (var p in obj) res[p] = obj[p];
  return res;
}

// https://stackoverflow.com/questions/18957972/cartesian-product-of-objects-in-javascript
function cartesianProduct(input, current) {
  if (!input || !input.length) { return []; }

  var head = input[0];
  var tail = input.slice(1);
  var output = [];

   for (var key in head) {
     for (var i = 0; i < head[key].length; i++) {
           var newCurrent = copy(current);         
           newCurrent[key] = head[key][i];
           if (tail.length) {
                var productOfTail = 
                        cartesianProduct(tail, newCurrent);
                output = output.concat(productOfTail);
           } else output.push(newCurrent);
      }
    }    
   return output;
}


// I still need z.cursor.... now values in input_domains
// I also need to process the encoding-mapped fields

/*
input_domains_A_projection = {
  var o = {}
  Object.entries(z.cursor).forEach(([k,v]) => {
    o[k] = [v]
  })
  Object.entries(input_domains_A_overrides).forEach(([k,v]) => {
    o[k] = v
  })
  //o.formula = Object.values(model)
  return o
}*/
  


//////input_combos_A_projection = cartesianProduct(Object.entries(input_domains_A_projection).map(([k,v]) => ({[k]: v})))



// age_in bit here not done programmatically ! just use all combos?
//////projection = formulae_info.filter(d => formulae_info_inputs.indexOf(d.name+'_in') == -1).map(({name}) => input_combos_A_projection.map(combos => ({...combos,/*[pvt_y]: combos[pvt_y],*/ formula:name, /*[name]*/value: +model[name](combos)/*.toFixed(2)*/}))).flat()
// pre-folded!


