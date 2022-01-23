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
    return weight_y(/*!*/ { coords_in: 'ground' }) * Math.sin(theta());
};

// other forces: Normal reaction which offsets weight_y on 'plane'
// friction(out)

// => net force on 'plane' is (?, 0)
// but on 'ground' is (?, ?)

export const F_x = () => 1; // todo

export const F_y = () => 1; // todo

export const a_x = () => F_x() / m(); // ?

export const a_y = () => F_y() / m(); // ?

//export const a = () => g() * Math.sin(theta()); // relative to inclined plane, no coord stuff happening yet

export const coords = () => coords_in; // 'plane' for inclined plane and 'ground'
export const theta = () => theta_in; // radians, 1 radian ~= 57 degrees, todo configurable
export const g = () => g_in;
export const m = () => m_in; // force depends on mass, but not accelaration
// todo also generalise x,y directions
