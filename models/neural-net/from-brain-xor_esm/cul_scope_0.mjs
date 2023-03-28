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
    console.error("layer_in should be > 0");
    console.trace();
    return;
  }
  return nn.json.layers[layer({ layer_in })].weights[id({ id_in })][prev_id({ prev_id_in })];
};

export const b = ({ layer_in, id_in }) => {
  if (layer({ layer_in }) == 0) {
    console.error("layer_in should be > 0");
    console.trace();
    return;
  }
  return nn.json.layers[layer({ layer_in }).biases[id({ id_in })]];
};

export const weighted_sum = ({ layer_in, input_in, id_in, x_in }) => {
  return Math.reduce(
  _.range(0, layer_size({ layer_in: layer({ layer_in }) - 1 })).reduce(
  (prev_id_in) =>
  n({ input_in, id_in, x_in, layer_in: layer({ layer_in }) - 1 }) * w({ id_in, prev_id_in, layer_in: layer({ layer_in }) - 1 })));


};

export const x = ({ x_in }) => x_in;

export const activation = ({ x_in }) => 1 / (1 + Math.pow(Math.E, -1 * x({ x_in })));

export const n = ({ layer_in, input_in, id_in, x_in }) => {
  if (layer({ layer_in }) == 0) return input({ input_in })[id({ id_in })];else
  return activation({ x_in: weighted_sum({ layer_in, input_in, id_in, x_in }) + b({ layer_in, id_in }) });
};