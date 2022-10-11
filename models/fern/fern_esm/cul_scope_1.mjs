import { y } from "./cul_scope_0.mjs";import { x } from "./cul_scope_0.mjs";import { barnsley_5 } from "./cul_scope_0.mjs";import { barnsley_4 } from "./cul_scope_0.mjs";import { barnsley_3 } from "./cul_scope_0.mjs";import { barnsley_2 } from "./cul_scope_0.mjs";import { barnsley_1 } from "./cul_scope_0.mjs";import { barnsley_0 } from "./cul_scope_0.mjs";import { winner } from "./cul_scope_0.mjs";import { i } from "./cul_scope_0.mjs";import { winning_transform_values } from "./cul_scope_0.mjs";import { barnsley_transforms } from "./cul_scope_0.mjs"; // the starting point here is modelled from the nicely simple/narrated code @ https://www.fractal.garden/barnsley-fern by Rico Trebeljahr

// an array of 4 transformations and associated probabilities
export const barnsley_transforms_ = ({}) => [
[
/* transformation params: */0, 0, 0, 0.16, 0, 0,
/* probability for this transform: */0.01],

[0.85, 0.04, -0.04, 0.85, 0, 1.6, 0.85],
[0.2, -0.26, 0.23, 0.22, 0, 1.6, 0.07],
[-0.15, 0.28, 0.26, 0.24, 0, 0.44, 0.07]];


export const winning_transform_values_ = ({ i_in }) => barnsley_transforms({})[winner({ i_in })];

export const i_ = ({ i_in }) => i_in;

// a draw determines which transformation to apply in each iteration
export const winner_ = ({ i_in }) => {
  var r = Math.random() + 0 * i({ i_in });

  // imperative so don't like this so much in calculang.. but its quick and ready, see reference above

  // moving to weighting of probabilities, so easier to allow users to vary weights
  const total_probability = barnsley_transforms({}).reduce((p, v) => p + v[6], 0);

  const prob1 = barnsley_transforms({})[1][6] / total_probability;
  const prob2 = barnsley_transforms({})[2][6] / total_probability;
  const prob3 = barnsley_transforms({})[3][6] / total_probability;
  const prob4 = barnsley_transforms({})[0][6] / total_probability;
  if (r <= prob1) {
    return 1;
  } else if (r <= prob1 + prob2) {
    return 2;
  } else if (r <= prob1 + prob2 + prob3) {
    return 3;
  } else if (r <= prob1 + prob2 + prob3 + prob4) {// next step.. make # transforms variable
    return 0;
  }
};

// also abstract this..
export const barnsley_0_ = ({ i_in }) => winning_transform_values({ i_in })[0];
export const barnsley_1_ = ({ i_in }) => winning_transform_values({ i_in })[1];
export const barnsley_2_ = ({ i_in }) => winning_transform_values({ i_in })[2];
export const barnsley_3_ = ({ i_in }) => winning_transform_values({ i_in })[3];
export const barnsley_4_ = ({ i_in }) => winning_transform_values({ i_in })[4];
export const barnsley_5_ = ({ i_in }) => winning_transform_values({ i_in })[5];

// this is where the magic is brought together::
// the iterated function system

export const x_ = ({ i_in }) => {
  if (i({ i_in }) == 0) return 0;else

  return (
    barnsley_0({ i_in }) * x({ i_in: i({ i_in }) - 1 }) +
    barnsley_1({ i_in }) * y({ i_in: i({ i_in }) - 1 }) +
    barnsley_4({ i_in }));

};

export const y_ = ({ i_in }) => {
  if (i({ i_in }) == 0) return 0;else

  return (
    barnsley_2({ i_in }) * x({ i_in: i({ i_in }) - 1 }) +
    barnsley_3({ i_in }) * y({ i_in: i({ i_in }) - 1 }) +
    barnsley_5({ i_in }));

};