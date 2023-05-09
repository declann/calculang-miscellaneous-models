export const x1 = ({ p_in }) => Math.random() * 30 - 15 + p({ p_in }) * 0; // no random seed here
export const x = ({ p_in }) => x1({ p_in }) / 1.5;
export const y1 = ({ p_in }) => Math.random() * 30 - 15 + p({ p_in }) * 0;
export const y = ({ p_in }) => y1({ p_in }) / 1.5;

export const p = ({ p_in }) => p_in; // point

export const waveA = ({ p_in }) =>
(Math.sin(x({ p_in })) +
(Math.floor(Math.abs(x({ p_in })) / Math.PI) % 2 == 1 ? 1 : 1) *
Math.sin(x({ p_in })) *
0.6 * (
1 - Math.abs(Math.sin(x({ p_in }))))) *
3 +
0;
export const waveB = ({ p_in }) =>
(Math.sin(x({ p_in })) +
(Math.floor(Math.abs(x({ p_in })) / Math.PI) % 2 == 1 ? 1 : 1) *
Math.sin(x({ p_in })) *
0.6 * (
1 - Math.abs(Math.sin(x({ p_in }))))) *
3 +
4;

export const color = ({ p_in }) => {
  //if (y() > 0 || 1) return y() > waveA() && y() < waveB() ? 1 : 0;
  return Math.floor((y({ p_in }) - waveA({ p_in })) / (waveB({ p_in }) - waveA({ p_in })));
};