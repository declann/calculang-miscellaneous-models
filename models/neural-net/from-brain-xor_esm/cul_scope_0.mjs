import nn from "./from-brain-xor.json";
import _ from "underscore";

// neurons by layer and id within a layer
export const layer = ({ layer_in }) => layer_in; // e.g. 0 = input layer, 1 = hidden layer, 2 = output layer
export const id = ({ id_in }) => id_in;
export const prev_id = ({ prev_id_in }) => prev_id_in;
export const input = ({ input_in }) => input_in; // e.g. [1,0]

export const layer_size = ({ layer_in }) => nn.json.sizes[layer({ layer_in })];

export const w = ({ layer_in, id_in, prev_id_in }) => {
  // layer, id, prev id
  if (layer({ layer_in }) == 0) {
    return 1;
    /*console.error("layer_in should be > 0");
    console.trace();
    debugger;
    return;*/
  }
  return nn.json.layers[layer({ layer_in })].weights[id({ id_in })][prev_id({ prev_id_in })];
};

export const b = ({ layer_in, id_in }) => {
  if (layer({ layer_in }) == 0) {
    return 0;
    /*console.error("layer_in should be > 0");
    console.trace();
    debugger;
    return;*/
  }
  return nn.json.layers[layer({ layer_in })].biases[id({ id_in })];
};

export const weighted_sum = ({ layer_in, input_in, id_in }) => {
  return _.range(0, layer_size({ layer_in: layer({ layer_in }) - 1 })).reduce(
  (acc, prev_id_in) =>
  acc + n({ input_in, layer_in: layer({ layer_in }) - 1, id_in: prev_id({ prev_id_in }) /* !! */ }) * w({ layer_in, id_in, prev_id_in }),
  0);

};

export const x = ({ x_in }) => x_in;

export const activation = ({ x_in }) => {
  //console.log(x(), JSON.stringify(arguments));
  return 1 / (1 + Math.pow(Math.E, -1 * x({ x_in })));
};

export const n = ({ layer_in, input_in, id_in }) => {
  if (layer({ layer_in }) == 0) return input({ input_in })[id({ id_in })];
  //else return activation({ x_in: weighted_sum() + b() }); // calculang not picking up summarisation of x
  else return 1 / (1 + Math.pow(Math.E, -1 * (weighted_sum({ layer_in, input_in, id_in }) + b({ layer_in, id_in }))));
};