export const p = () => p_in;

import { prng_alea } from './esm-seedrandom.mjs'; // only the beginning of the shadiness..

const random = prng_alea('seed123456');

export const x = () => random() + p() * 0;

export const y = () => random() + p() * 0;

export const f = () => (x() * x() + y() * y());

export const inside = () => (f() < 1) // = case shouldn't happen

export const inside_count = () => {
    if (p() == 0) return 0;
    else return inside_count({ p_in: p() - 1 }) + inside()
}

export const ratio = () => (inside_count() / p())

export const pi_approximation = () => (ratio() * 4)