export const x = () => Math.random() * 40 - 20 + p() * 0; // no random seed here, => we need memo on for consistency
export const y = () => Math.random() * 40 - 20 + p() * 0;

export const p = () => p_in; // point

export const waveA = () =>
  (Math.sin(x()) +
    (Math.floor(Math.abs(x()) / Math.PI) % 2 == 1 ? 1 : 1) *
      Math.sin(x()) *
      0.6 *
      (1 - Math.abs(Math.sin(x())))) *
    3 +
  0;
export const waveB = () =>
  (Math.sin(x()) +
    (Math.floor(Math.abs(x()) / Math.PI) % 2 == 1 ? 1 : 1) *
      Math.sin(x()) *
      0.6 *
      (1 - Math.abs(Math.sin(x())))) *
    3 +
  4;

export const color = () => {
  //if (y() > 0 || 1) return y() > waveA() && y() < waveB() ? 1 : 0;
  return Math.floor((y() - waveA()) / (waveB() - waveA()));
};
