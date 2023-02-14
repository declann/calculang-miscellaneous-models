import { trend, wavey, arcy, y } from './beating_esm/cul_scope_0.mjs';

import { range } from 'underscore';

let ins = { waviness_in: 6, tallness_in: 0.95, arc_size_in: 25, pinchiness_in: 0.8 };

let data = range(-Math.sqrt(ins.arc_size_in)-0.2, Math.sqrt(ins.arc_size_in)+0.2, 0.025).map((x_in) => ({
  ...ins,
  x_in,
  trend: trend({ ...ins, x_in }),
  wavey: wavey({ ...ins, x_in }),
  arcy: arcy({ ...ins, x_in }),
  y: y({ ...ins, x_in }),
}));

//console.table(data);

console.log(JSON.stringify(data, null, 2));

// from spec.model and spec.input_domains generate data

// https://stackoverflow.com/questions/18957972/cartesian-product-of-objects-in-javascript
function copy(obj) {
  var res = {};
  for (var p in obj) res[p] = obj[p];
  return res;
}

// https://stackoverflow.com/questions/18957972/cartesian-product-of-objects-in-javascript
function cartesianProduct(input, current) {
  if (!input || !input.length) {
    return [];
  }

  var head = input[0];
  var tail = input.slice(1);
  var output = [];

  for (var key in head) {
    for (var i = 0; i < head[key].length; i++) {
      var newCurrent = copy(current);
      newCurrent[key] = head[key][i];
      if (tail.length) {
        var productOfTail = cartesianProduct(tail, newCurrent);
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
