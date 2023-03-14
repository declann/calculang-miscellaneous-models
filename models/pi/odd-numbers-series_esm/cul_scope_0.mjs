// some pi day release prep... leibniz series for pi
// watch: https://youtu.be/HrRMnzANHHs by Matt Parker (@standupmaths)

// 1/1 - 1/3 + 1/5 - 1/7 + ... = pi/4

// starting at 1 i.e. term 1 = 1/1, 2=-1/3, ...
import { range } from 'underscore';


export const term_number = ({ term_number_in }) => term_number_in;

export const sign = ({ term_number_in }) => Math.pow(-1, term_number({ term_number_in }) - 1); // +, -, +, -, ...

export const denominator = ({ term_number_in }) => (term_number({ term_number_in }) - 1) * 2 + 1; // odd number series

export const term = ({ term_number_in }) => sign({ term_number_in }) * (1 / denominator({ term_number_in }));

// abstract this ...
export const series_sum_of_first_10_terms = ({}) =>
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(
(acc, term_number_in) => acc + term({ term_number_in }),
0);


export const series_sum_of_first_9_terms = ({}) =>
[1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(
(acc, term_number_in) => acc + term({ term_number_in }),
0);


export const terms = ({ terms_in }) => terms_in;

export const sum_of_terms = ({ terms_in }) => range(1, terms({ terms_in })).reduce(
(acc, term_number_in) => acc + term({ term_number_in }),
0);

export const sum_of_terms_times_4 = ({ terms_in }) => sum_of_terms({ terms_in }) * 4;


// 0.76045990473235055278398931649706