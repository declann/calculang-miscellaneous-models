// https://dev.to/liashchynskyi/creating-of-neural-network-using-javascript-in-7minutes-o21

// xor refresh:
//  00 => 0
//  01 => 1
//  10 => 1
//  11 => 0

export const sigmoid = () => 1 / (1 + Math.exp(-x()));
export const sigmoid_deriv = () => sigmoid() * (1 - sigmoid());

export const activation = () => sigmoid();
export const activation_prime = () => sigmoid_prime();

// layers:
//  input | hidden | output

export const weight = () => {
  // connections b/w layers have weights.
  // on layer_from/to, and neuron_from/to
  if (epoch() == 0) return Math.random() * 2 - 1; // start as random # between -1 and +1
  else {
    // train
    // bah
  }
};

// inputs
export const input_nodes = () => input_nodes_in; // 2-3-1 ?
export const hidden_nodes = () => hidden_nodes_in;
export const output_nodes = () => output_nodes_in;
export const epoch = () => epoch_in; // 50000
export const learning_rate = () => learning_rate_in; // 0.5

//export const layer = () => layer_in; // 0=input, 1=hidden, 2=output
export const layer_from = () => layer_from_in;
export const layer_to = () => layer_to_in;
export const neuron_from = () => neurnon_from_in;
export const neuron_to = () => neuron_to_in;
