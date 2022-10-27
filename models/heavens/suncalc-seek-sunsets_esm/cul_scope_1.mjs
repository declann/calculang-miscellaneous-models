import { altitude_obj } from "./cul_scope_0.mjs";import { azimuth_obj } from "./cul_scope_0.mjs";import { H } from "./cul_scope_0.mjs";import { right_ascension_L0 } from "./cul_scope_0.mjs";import { declination_L0 } from "./cul_scope_0.mjs";import { ecliptic_longitude } from "./cul_scope_0.mjs";import { perihelion_of_earth } from "./cul_scope_0.mjs";import { equation_of_center } from "./cul_scope_0.mjs";import { solar_mean_anomaly } from "./cul_scope_0.mjs";import { obj } from "./cul_scope_0.mjs";import { sidereal_time } from "./cul_scope_0.mjs";import { altitude } from "./cul_scope_0.mjs";import { azimuth } from "./cul_scope_0.mjs";import { dec } from "./cul_scope_0.mjs";import { declination } from "./cul_scope_0.mjs";import { right_ascension } from "./cul_scope_0.mjs";import { b } from "./cul_scope_0.mjs";import { l } from "./cul_scope_0.mjs";import { julian_1 } from "./cul_scope_0.mjs";import { phi } from "./cul_scope_0.mjs";import { lw } from "./cul_scope_0.mjs";import { e } from "./cul_scope_0.mjs";import { rad } from "./cul_scope_0.mjs";import { J2000 } from "./cul_scope_0.mjs";import { J1970 } from "./cul_scope_0.mjs";import { dayMs } from "./cul_scope_0.mjs";import { lng } from "./cul_scope_0.mjs";import { lat } from "./cul_scope_0.mjs";import { date } from "./cul_scope_0.mjs";import { sunset_time_for_sunset_date } from "./cul_scope_0.mjs";import { sunset_projection_for_sunset_date } from "./cul_scope_0.mjs";import { sunset_projection_times_for_sunset_date } from "./cul_scope_0.mjs";import { sunset_date } from "./cul_scope_0.mjs"; // TERRIBLE
// Seeking approach (note recursion) will be hopeless without memo
// Until [issue #72](https://github.com/calculang/calculang/issues/72) is fixed,
// this means I can't use modularity.
// Therefore I copy the suncalc.cul code below.

// other terrible things: This exposed some other bugs in calculang.
// So this seeking part is **not** a good example of clean, recyclable, model code, which is what calculang models should be.

import { addMinutes, isSameDay, addDays } from 'date-fns';
import _ from 'underscore';

export const sunset_date_ = ({ sunset_date_in }) => sunset_date_in;

// seeking: we can use the sunset time in previous day to give us a rough idea of the sunset time in the following day.
// This just about works for my viz purposes.

export const sunset_projection_times_for_sunset_date_ = ({ lat_in, lng_in, l_in, b_in, sunset_date_in }) => {
  //date(); obj_in();
  //sunset_time_for_sunset_date({ sunset_date_in: new Date(2021, 9, 29) });
  lat({ lat_in });
  lng({ lng_in });
  l({ l_in });
  b({ b_in }); //very bad hack around calculang bugs in this fn
  if (isSameDay(sunset_date({ sunset_date_in }), new Date(2021, 9, 29))) // start date is calculang release date
    return _.range(0, 100) // 500 mins => over 8 hours
    .map((i) => addMinutes(new Date(2021, 9, 29, 17 /* 5pm? */), i * 5)); // these are very limiting paramaters for other locations ! Maybe move to check all 5 min intervals?
    // assuming after 10/29/21
  else
  return _.range(-15, 15) // ~75mins. Wide to capture time changes? +I could use the solsticies to avoid seeking both ways
  .map((i) =>
  addDays(
  addMinutes(
  sunset_time_for_sunset_date({ lat_in, lng_in, l_in, b_in,
    sunset_date_in: addDays(sunset_date({ sunset_date_in }), -1) }),


  i * 5),
  1));


  //.map((datezz) => (
  /*altitude:*/6; //altitude_obj({ obj_in: 'sun', X: date()*0+obj() }) // compiler doesn't like this
  //,azimuth: 2//azimuth_obj({ /* obj_in: 'sun', date_in, X: date()*0+obj() */ }),
  //));
};

export const sunset_projection_for_sunset_date_ = ({ lat_in, lng_in, l_in, b_in, sunset_date_in }) =>
sunset_projection_times_for_sunset_date({ lat_in, lng_in, l_in, b_in, sunset_date_in }).map((date_in) => ({
  date_in,
  sunset_date_in: sunset_date({ sunset_date_in }),
  altitude: altitude_obj({ lat_in, date_in, lng_in, obj_in: 'sun' }),
  azimuth: azimuth_obj({ date_in, lng_in, lat_in, obj_in: 'sun' }) }));


export const sunset_time_for_sunset_date_ = ({ lat_in, lng_in, l_in, b_in, sunset_date_in }) =>
sunset_projection_for_sunset_date({ lat_in, lng_in, l_in, b_in, sunset_date_in }).find((d) => d.altitude < 0).date_in;


////// suncalc.cul.js begin:

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

// + https://observablehq.com/@mourner/sun-position-in-900-bytes
// "based on formulas from the 2nd edition of [Jean Meeus's "Astronomical Algorithms" book](https://www.willbell.com/math/mc1.htm)" "more precise"

export const date_ = ({ date_in }) => date_in;
export const lat_ = ({ lat_in }) => lat_in;
export const lng_ = ({ lng_in }) => lng_in;

// "date/time constants and conversions"
export const dayMs_ = ({}) => 1000 * 60 * 60 * 24;
export const J1970_ = ({}) => 2440588;
export const J2000_ = ({}) => 2451545;
export const rad_ = ({}) => Math.PI / 180;

// bad form?
var PI = Math.PI,
sin = Math.sin,
cos = Math.cos,
tan = Math.tan,
asin = Math.asin,
atan = Math.atan2,
acos = Math.acos;

export const e_ = ({}) => rad({}) * 23.4397; // obliquity of the Earth

export const lw_ = ({ lng_in }) => rad({}) * -lng({ lng_in });
export const phi_ = ({ lat_in }) => rad({}) * lat({ lat_in });

export const julian_1_ = ({ date_in }) => date({ date_in }).valueOf() / dayMs({}) - 0.5 + J1970({}) - J2000({}); // fn on date_in

//// right_ascension, declination locked input structure
export const l_ = ({ l_in }) => l_in;
export const b_ = ({ b_in }) => b_in;

export const right_ascension_ = ({ l_in, b_in }) =>
atan(sin(l({ l_in })) * cos(e({})) - tan(b({ b_in })) * sin(e({})), cos(l({ l_in })));
export const declination_ = ({ b_in, l_in }) =>
asin(sin(b({ b_in })) * cos(e({})) + cos(b({ b_in })) * sin(e({})) * sin(l({ l_in })));

/// azimuth, altitude ~~locked~~ input structure
//export const H = () => H_in;
//export const phi = () => phi_in;
export const dec_ = ({ dec_in }) => dec_in;

export const azimuth_ = ({ date_in, lng_in, obj_in, lat_in, dec_in }) =>
atan(sin(H({ date_in, lng_in, obj_in })), cos(H({ date_in, lng_in, obj_in })) * sin(phi({ lat_in })) - tan(dec({ dec_in })) * cos(phi({ lat_in }))); // some refactors to function might help here
export const altitude_ = ({ lat_in, dec_in, date_in, lng_in, obj_in }) =>
asin(sin(phi({ lat_in })) * sin(dec({ dec_in })) + cos(phi({ lat_in })) * cos(dec({ dec_in })) * cos(H({ date_in, lng_in, obj_in })));

//export const lw = () => lw_in;
export const sidereal_time_ = ({ date_in, lng_in }) =>
rad({}) * (280.16 + 360.9856235 * julian_1({ date_in })) - lw({ lng_in });

// abstract sun, moon values via obj_in
export const obj_ = ({ obj_in }) => obj_in;
export const solar_mean_anomaly_ = ({ obj_in, date_in }) => {
  if (obj({ obj_in }) == 'sun') return rad({}) * (357.5291 + 0.98560028 * julian_1({ date_in }));else
  if (obj({ obj_in }) == 'moon') return rad({}) * (134.963 + 13.064993 * julian_1({ date_in }));else
  console.error('obj not sun or moon');
};

export const equation_of_center_ = ({ obj_in, date_in }) =>
rad({}) * (
1.9148 * sin(solar_mean_anomaly({ obj_in, date_in })) +
0.02 * sin(2 * solar_mean_anomaly({ obj_in, date_in })) +
0.0003 * sin(3 * solar_mean_anomaly({ obj_in, date_in })));

export const perihelion_of_earth_ = ({}) => rad({}) * 102.9372;

export const ecliptic_longitude_ = ({ obj_in, date_in }) =>
Math.PI + solar_mean_anomaly({ obj_in, date_in }) + equation_of_center({ obj_in, date_in }) + perihelion_of_earth({});

// sunCoords outputs (still intermediate)
// naming convention? (L, 0) / _obj?
export const declination_L0_ = ({ obj_in, date_in }) =>
declination({ l_in: ecliptic_longitude({ obj_in, date_in }), b_in: 0 });
export const right_ascension_L0_ = ({ obj_in, date_in }) =>
right_ascension({ l_in: ecliptic_longitude({ obj_in, date_in }), b_in: 0 });

export const H_ = ({ date_in, lng_in, obj_in }) => sidereal_time({ date_in, lng_in }) - right_ascension_L0({ obj_in, date_in });

// outputs
export const azimuth_obj_ = ({ date_in, lng_in, obj_in, lat_in }) => azimuth({ date_in, lng_in, obj_in, lat_in, dec_in: declination_L0({ obj_in, date_in }) });
export const altitude_obj_ = ({ lat_in, date_in, lng_in, obj_in }) => altitude({ lat_in, date_in, lng_in, obj_in, dec_in: declination_L0({ obj_in, date_in }) });

// moon calcs in suncalc have an astroRefraction param I didn't build?
// also some other error?
// but sun recs closer from a few tests