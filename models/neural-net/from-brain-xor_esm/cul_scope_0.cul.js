import nn from "./from-brain-xor.json";
import _ from "underscore";

// neurons by layer and id within a layer
export const layer = () => layer_in; // e.g. 0 = input layer, 1 = hidden layer, 2 = output layer
export const id = () => id_in;
export const prev_id = () => prev_id_in;
export const input = () => input_in; // e.g. [1,0]

export const layer_size = () => nn.json.sizes[layer()];

export const w = () => {
  // layer, id, prev id
  if (layer() == 0) {
    console.error("layer_in should be > 0");
    console.trace();
    return;
  }
  return nn.json.layers[layer()].weights[id()][prev_id()];
};

export const b = () => {
  if (layer() == 0) {
    console.error("layer_in should be > 0");
    console.trace();
    return;
  }
  return nn.json.layers[layer().biases[id()]];
};

export const weighted_sum = () => {
  return Math.reduce(
    _.range(0, layer_size({ layer_in: layer() - 1 })).reduce(
      (prev_id_in) =>
        n({ layer_in: layer() - 1 }) * w({ layer_in: layer() - 1 })
    )
  );
};

export const x = () => x_in;

export const activation = () => 1 / (1 + Math.pow(Math.E, -1 * x()));

export const n = () => {
  if (layer() == 0) return input()[id()];
  else return activation({ x_in: weighted_sum() + b() });
};

