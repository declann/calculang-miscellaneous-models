// start simple: inclined plane by theta, no friction

// multiple coordinate systems => an input, though I might get here incrementally

// scale fns in-calculang, like an early view model, this might get me thinking about patterning.
// +will an input control scales to usual fns, rather than making bespoke fns?

// w/o friction the net force on inclined plane is mg*sin(theta) [mg=weight or gravitational force]
// => a = F/m = g*sin(theta) [along the inclined plane]

//export const weight = () => (m() * g());
// ...

export const a = () => g() * Math.sin(theta()); // relative to inclined plane, no coord stuff happening yet

export const coords = () => coords_in; // 'plane' for inclined plane and 'ground'
export const theta = () => theta_in; // radians, 1 radian ~= 57 degrees, todo configurable
export const g = () => g_in;
export const m = () => m_in; // force depends on mass, but not accelaration
