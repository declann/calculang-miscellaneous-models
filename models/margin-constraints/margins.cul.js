// using constraint equation used by Bret Victor in:
// http://worrydream.com/ScrubbingCalculator/

export const top_margin$ = () => top_margin$_in;
export const bottom_margin$ = () => bottom_margin$_in;
export const num_bars = () => num_bars_in; // not unlockable (fut: possibly, with a remainder?)
export const gap$ = () => gap$_in;
export const bar_height$ = () => bar_height$_in;
export const container_height$ = () => container_height$_in;

// the formula we are interested in (following example Bret Victor uses):
//    top_margin + bottom_margin + (num_bars-1) * gap + num_bars * bar_height = container_height

export const container_height = () =>
  container_height$() != undefined
    ? container_height$() // nullish coalescing not working TODO fix
    : top_margin() +
      bottom_margin() +
      (num_bars() - 1) * gap() +
      num_bars() * bar_height();

// I do manual algebraic manipulation below, some tools can do this auto, investigate?

export const top_margin = () =>
  top_margin$() != undefined
    ? top_margin$()
    : container_height() -
      (bottom_margin() + (num_bars() - 1) * gap() + num_bars() * bar_height());

export const bottom_margin = () =>
  bottom_margin$() != undefined
    ? bottom_margin$()
    : container_height() -
      (top_margin() + (num_bars() - 1) * gap() + num_bars() * bar_height());

export const gap = () =>
  gap$() != undefined
    ? gap$()
    : (container_height() -
        top_margin() -
        bottom_margin() -
        num_bars() * bar_height()) /
      (num_bars() - 1);

export const bar_height = () =>
  bar_height$() != undefined
    ? bar_height$()
    : (container_height() -
        top_margin() -
        bottom_margin() -
        gap() * (num_bars() - 1)) /
      num_bars();
