// the starting point here is modelled from the nicely simple/narrated code @ https://www.fractal.garden/barnsley-fern by Rico Trebeljahr

// an array of 4 transformations and associated probabilities
export const barnsley_transforms = () => [
  [
    /* transformation params: */ 0, 0, 0, 0.16, 0, 0,
    /* probability for this transform: */ 0.01,
  ],
  [0.85, 0.04, -0.04, 0.85, 0, 1.6, 0.85],
  [0.2, -0.26, 0.23, 0.22, 0, 1.6, 0.07],
  [-0.15, 0.28, 0.26, 0.24, 0, 0.44, 0.07],
];

export const winning_transform_values = () => barnsley_transforms()[winner()];

export const i = () => i_in;

// a draw determines which transformation to apply in each iteration
export const winner = () => {
  var r = Math.random() + 0 * i();

  // imperative so don't like this so much in calculang.. but its quick and ready, see reference above

  // moving to weighting of probabilities, so easier to allow users to vary weights
  const total_probability = barnsley_transforms().reduce((p, v) => p + v[6], 0);

  const prob1 = barnsley_transforms()[1][6] / total_probability;
  const prob2 = barnsley_transforms()[2][6] / total_probability;
  const prob3 = barnsley_transforms()[3][6] / total_probability;
  const prob4 = barnsley_transforms()[0][6] / total_probability;
  if (r <= prob1) {
    return 1;
  } else if (r <= prob1 + prob2) {
    return 2;
  } else if (r <= prob1 + prob2 + prob3) {
    return 3;
  } else if (r <= prob1 + prob2 + prob3 + prob4) { // next step.. make # transforms variable
    return 0;
  }
};

// also abstract this..
export const barnsley_0 = () => winning_transform_values()[0];
export const barnsley_1 = () => winning_transform_values()[1];
export const barnsley_2 = () => winning_transform_values()[2];
export const barnsley_3 = () => winning_transform_values()[3];
export const barnsley_4 = () => winning_transform_values()[4];
export const barnsley_5 = () => winning_transform_values()[5];

// this is where the magic is brought together::
// the iterated function system

export const x = () => {
  if (i() == 0) return 0;
  else
    return (
      barnsley_0() * x({ i_in: i() - 1 }) +
      barnsley_1() * y({ i_in: i() - 1 }) +
      barnsley_4()
    );
};

export const y = () => {
  if (i() == 0) return 0;
  else
    return (
      barnsley_2() * x({ i_in: i() - 1 }) +
      barnsley_3() * y({ i_in: i() - 1 }) +
      barnsley_5()
    );
};
