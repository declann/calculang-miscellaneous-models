// start simple: inclined plane by theta, no friction

// multiple coordinate systems => an input, though I might get here incrementally

// scale fns in-calculang, like an early view model, this might get me thinking about patterning.
// +will an input control scales to usual fns, rather than making bespoke fns?

// w/o friction the net force on inclined plane is mg*sin(theta) [mg=weight or gravitational force]
// => a = F/m = g*sin(theta) [along the inclined plane]

// todo generalise rotation of (0, mg) force? (think rotation matrix)

export const weight_y = () => {
  if (coords() == 'ground') return m() * g();
  else if (coords() == 'plane')
    return weight_y({ coords_in: 'ground' }) * Math.cos(theta());
};

export const weight_x = () => {
  if (coords() == 'ground') return 0;
  else if (coords() == 'plane')
    return weight_y(/*!*/ { coords_in: 'ground' }) * Math.sin(theta()); // notation development as-in Julia would benefit a lot here
};

// other forces: Normal reaction which offsets weight_y on 'plane'
// friction(out)

// => net force on 'plane' is (?, 0)
// but on 'ground' is (?, ?)
// weight_x is the only force contributing to the net force (weight_y is offset by normal)

// F is net force
// only use weight_x
export const F_x = () => weight_x();
// convert weight_x 'plane' to 'ground', so weight_x works directly?

export const F_y = () => {
  if (coords() == 'plane') return 0;
  // necessary? This is where normal+weight_y would cancel
  else if (coords() == 'ground')
    return weight_x({ coords_in: 'plane' }) * Math.sin(theta()); // ?
};
// convert weight_x 'plane' to 'ground', so weight_x('plane') is manipulated

export const a_x = () => F_x() / m(); // ?

export const a_y = () => F_y() / m(); // ?

//export const a = () => g() * Math.sin(theta()); // relative to inclined plane, no coord stuff happening yet

export const coords = () => coords_in; // 'plane' for inclined plane and 'ground'
export const theta = () => theta_in; // radians, 1 radian ~= 57 degrees, todo configurable
export const g = () => g_in;
export const m = () => m_in; // force depends on mass, but not accelaration
// todo also generalise x,y directions
