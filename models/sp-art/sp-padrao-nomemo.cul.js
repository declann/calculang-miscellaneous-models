// use e.g. lodash inRange
// +use modules, which is how I thought about implementing this in my head (only for tooling/demo reasons I didn't)

export const x = () => x_in;

export const y = () => y_in;

export const block_x = () => Math.floor(x() / 4);

export const section_x = () => Math.floor(x()) % 4; // 0,1,2,3

export const block_y = () => {
  if (section_x() == 0) return Math.floor(y());
  if (section_x() == 1 || section_x() == 2)
    return Math.floor(y() - (0.5 - (0.5 * x() - 0.5 * block_x() * 4)));
  if (section_x() == 3) return Math.floor(y()) + 1;
  return NaN; // shouldn't occur
};

export const color = () => -block_x() - (block_x() % 2) - block_y();

export const x1 = () => y() * skewness() + x();
export const y1 = () => y();

export const skewness = () => skewness_in;
