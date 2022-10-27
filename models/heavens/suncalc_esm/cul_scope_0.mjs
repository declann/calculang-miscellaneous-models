// based on formulae in SunCalc,
// https://github.com/mourner/suncalc
// SunCalc is (c) Vladimir Agafonkin (http://agafonkin.com/en)

// SunCalc readme:
// "Most calculations are based on the formulas given in the excellent Astronomy Answers articles
// about [position of the sun](http://aa.quae.nl/en/reken/zonpositie.html)
// and [the planets](http://aa.quae.nl/en/reken/hemelpositie.html)."

// ideas: compare/rec against Mike Bostock solar-calculator module on npm, and/or NOAA s/s on which solar-calculator based.
// + https://observablehq.com/@mourner/sun-position-in-900-bytes
//   ^ "more precise" "based on formulas from the 2nd edition of [Jean Meeus's "Astronomical Algorithms" book](https://www.willbell.com/math/mc1.htm)" 

export const date = ({ date_in }) => date_in;
export const lat = ({ lat_in }) => lat_in;
export const lng = ({ lng_in }) => lng_in;

// "date/time constants and conversions"
export const dayMs = ({}) => 1000 * 60 * 60 * 24;
export const J1970 = ({}) => 2440588;
export const J2000 = ({}) => 2451545;
export const rad = ({}) => Math.PI / 180;

// bad form?
var PI = Math.PI,
sin = Math.sin,
cos = Math.cos,
tan = Math.tan,
asin = Math.asin,
atan = Math.atan2,
acos = Math.acos;

export const e = ({}) => rad({}) * 23.4397; // obliquity of the Earth

export const lw = ({ lng_in }) => rad({}) * -lng({ lng_in });
export const phi = ({ lat_in }) => rad({}) * lat({ lat_in });

export const julian_1 = ({ date_in }) => date({ date_in }).valueOf() / dayMs({}) - 0.5 + J1970({}) - J2000({}); // fn on date_in

//// right_ascension, declination locked input structure
export const l = ({ l_in }) => l_in;
export const b = ({ b_in }) => b_in;

export const right_ascension = ({ l_in, b_in }) =>
atan(sin(l({ l_in })) * cos(e({})) - tan(b({ b_in })) * sin(e({})), cos(l({ l_in })));
export const declination = ({ b_in, l_in }) =>
asin(sin(b({ b_in })) * cos(e({})) + cos(b({ b_in })) * sin(e({})) * sin(l({ l_in })));

/// azimuth, altitude ~~locked~~ input structure
//export const H = () => H_in;
//export const phi = () => phi_in;
export const dec = ({ dec_in }) => dec_in;

export const azimuth = ({ date_in, lng_in, obj_in, lat_in, dec_in }) =>
atan(sin(H({ date_in, lng_in, obj_in })), cos(H({ date_in, lng_in, obj_in })) * sin(phi({ lat_in })) - tan(dec({ dec_in })) * cos(phi({ lat_in }))); // some refactors to function might help here
export const altitude = ({ lat_in, dec_in, date_in, lng_in, obj_in }) =>
asin(sin(phi({ lat_in })) * sin(dec({ dec_in })) + cos(phi({ lat_in })) * cos(dec({ dec_in })) * cos(H({ date_in, lng_in, obj_in })));

//export const lw = () => lw_in;
export const sidereal_time = ({ date_in, lng_in }) =>
rad({}) * (280.16 + 360.9856235 * julian_1({ date_in })) - lw({ lng_in });

// abstract sun, moon values via obj_in
export const obj = ({ obj_in }) => obj_in;
export const solar_mean_anomaly = ({ obj_in, date_in }) => {
  if (obj({ obj_in }) == 'sun') return rad({}) * (357.5291 + 0.98560028 * julian_1({ date_in }));else
  if (obj({ obj_in }) == 'moon') return rad({}) * (134.963 + 13.064993 * julian_1({ date_in }));else
  console.error('obj not sun or moon');
};

export const equation_of_center = ({ obj_in, date_in }) =>
rad({}) * (
1.9148 * sin(solar_mean_anomaly({ obj_in, date_in })) +
0.02 * sin(2 * solar_mean_anomaly({ obj_in, date_in })) +
0.0003 * sin(3 * solar_mean_anomaly({ obj_in, date_in })));

export const perihelion_of_earth = ({}) => rad({}) * 102.9372;

export const ecliptic_longitude = ({ obj_in, date_in }) =>
Math.PI + solar_mean_anomaly({ obj_in, date_in }) + equation_of_center({ obj_in, date_in }) + perihelion_of_earth({});

// sunCoords outputs (still intermediate)
// naming convention? (L, 0) / _obj?
export const declination_L0 = ({ obj_in, date_in }) =>
declination({ l_in: ecliptic_longitude({ obj_in, date_in }), b_in: 0 });
export const right_ascension_L0 = ({ obj_in, date_in }) =>
right_ascension({ l_in: ecliptic_longitude({ obj_in, date_in }), b_in: 0 });

export const H = ({ date_in, lng_in, obj_in }) => sidereal_time({ date_in, lng_in }) - right_ascension_L0({ obj_in, date_in });

// outputs
export const azimuth_obj = ({ date_in, lng_in, obj_in, lat_in }) => azimuth({ date_in, lng_in, obj_in, lat_in, dec_in: declination_L0({ obj_in, date_in }) });
export const altitude_obj = ({ lat_in, date_in, lng_in, obj_in }) => altitude({ lat_in, date_in, lng_in, obj_in, dec_in: declination_L0({ obj_in, date_in }) });

// moon calcs in suncalc have an astroRefraction param I didn't build?
// also some other error?
// but sun recs closer from a few tests