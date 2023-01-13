import { error } from "./cul_scope_0.mjs";import { bar_height } from "./cul_scope_0.mjs";import { gap } from "./cul_scope_0.mjs";import { bottom_margin } from "./cul_scope_0.mjs";import { top_margin } from "./cul_scope_0.mjs";import { container_height } from "./cul_scope_0.mjs";import { num_bars } from "./cul_scope_0.mjs"; // using constraint equation used by Bret Victor in:
// http://worrydream.com/ScrubbingCalculator/

export const top_margin$ = ({ top_margin$_in }) => top_margin$_in;
export const bottom_margin$ = ({ bottom_margin$_in }) => bottom_margin$_in;
export const num_bars_ = ({ num_bars_in }) => num_bars_in; // not unlockable (fut: possibly, with a remainder?)
export const gap$ = ({ gap$_in }) => gap$_in;
export const bar_height$ = ({ bar_height$_in }) => bar_height$_in;
export const container_height$ = ({ container_height$_in }) => container_height$_in;

// the formula we are interested in (following example Bret Victor uses):
//    top_margin + bottom_margin + (num_bars-1) * gap + num_bars * bar_height = container_height

export const container_height_ = ({ container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, gap$_in, bar_height$_in }) =>
container_height$({ container_height$_in }) != undefined ?
container_height$({ container_height$_in }) // nullish coalescing not working TODO fix
: top_margin({ top_margin$_in, container_height$_in, bottom_margin$_in, num_bars_in, gap$_in, bar_height$_in }) +
bottom_margin({ bottom_margin$_in, container_height$_in, top_margin$_in, num_bars_in, gap$_in, bar_height$_in }) +
(num_bars({ num_bars_in }) - 1) * gap({ gap$_in, container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, bar_height$_in }) +
num_bars({ num_bars_in }) * bar_height({ bar_height$_in, container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, gap$_in });

// I do manual algebraic manipulation below, some tools can do this auto, investigate?

export const top_margin_ = ({ top_margin$_in, container_height$_in, bottom_margin$_in, num_bars_in, gap$_in, bar_height$_in }) =>
top_margin$({ top_margin$_in }) != undefined ?
top_margin$({ top_margin$_in }) :
container_height({ container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, gap$_in, bar_height$_in }) - (
bottom_margin({ bottom_margin$_in, container_height$_in, top_margin$_in, num_bars_in, gap$_in, bar_height$_in }) + (num_bars({ num_bars_in }) - 1) * gap({ gap$_in, container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, bar_height$_in }) + num_bars({ num_bars_in }) * bar_height({ bar_height$_in, container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, gap$_in }));

export const bottom_margin_ = ({ bottom_margin$_in, container_height$_in, top_margin$_in, num_bars_in, gap$_in, bar_height$_in }) =>
bottom_margin$({ bottom_margin$_in }) != undefined ?
bottom_margin$({ bottom_margin$_in }) :
container_height({ container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, gap$_in, bar_height$_in }) - (
top_margin({ top_margin$_in, container_height$_in, bottom_margin$_in, num_bars_in, gap$_in, bar_height$_in }) + (num_bars({ num_bars_in }) - 1) * gap({ gap$_in, container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, bar_height$_in }) + num_bars({ num_bars_in }) * bar_height({ bar_height$_in, container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, gap$_in }));

export const gap_ = ({ gap$_in, container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, bar_height$_in }) =>
gap$({ gap$_in }) != undefined ?
gap$({ gap$_in }) :
(container_height({ container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, gap$_in, bar_height$_in }) -
top_margin({ top_margin$_in, container_height$_in, bottom_margin$_in, num_bars_in, gap$_in, bar_height$_in }) -
bottom_margin({ bottom_margin$_in, container_height$_in, top_margin$_in, num_bars_in, gap$_in, bar_height$_in }) -
num_bars({ num_bars_in }) * bar_height({ bar_height$_in, container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, gap$_in })) / (
num_bars({ num_bars_in }) - 1);

export const bar_height_ = ({ bar_height$_in, container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, gap$_in }) =>
bar_height$({ bar_height$_in }) != undefined ?
bar_height$({ bar_height$_in }) :
(container_height({ container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, gap$_in, bar_height$_in }) -
top_margin({ top_margin$_in, container_height$_in, bottom_margin$_in, num_bars_in, gap$_in, bar_height$_in }) -
bottom_margin({ bottom_margin$_in, container_height$_in, top_margin$_in, num_bars_in, gap$_in, bar_height$_in }) -
gap({ gap$_in, container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, bar_height$_in }) * (num_bars({ num_bars_in }) - 1)) /
num_bars({ num_bars_in });

// error function
export const error_ = ({ container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, gap$_in, bar_height$_in }) =>
container_height({ container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, gap$_in, bar_height$_in }) - (
top_margin({ top_margin$_in, container_height$_in, bottom_margin$_in, num_bars_in, gap$_in, bar_height$_in }) +
bottom_margin({ bottom_margin$_in, container_height$_in, top_margin$_in, num_bars_in, gap$_in, bar_height$_in }) +
(num_bars({ num_bars_in }) - 1) * gap({ gap$_in, container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, bar_height$_in }) +
num_bars({ num_bars_in }) * bar_height({ bar_height$_in, container_height$_in, top_margin$_in, bottom_margin$_in, num_bars_in, gap$_in }));