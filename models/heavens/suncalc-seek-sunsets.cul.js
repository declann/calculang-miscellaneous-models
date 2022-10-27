// TERRIBLE
// Seeking approach (note recursion) will be hopeless without memo
// Until [issue #72](https://github.com/calculang/calculang/issues/72) is fixed,
// this means I can't use modularity.
// Therefore I copy the suncalc.cul code below.

// other terrible things: This exposed some other bugs in calculang.
// So this seeking part is **not** a good example of clean, recyclable, model code, which is what calculang models should be.

import { addMinutes, isSameDay, addDays } from 'date-fns';
import _ from 'underscore';

export const sunset_date = () => sunset_date_in;

// seeking: we can use the sunset time in previous day to give us a rough idea of the sunset time in the following day.
// This just about works for my viz purposes.

export const duration_factor = () => (duration_factor_in);

export const sunset_projection_times_for_sunset_date = () => {
  //date(); obj_in();
  //sunset_time_for_sunset_date({ sunset_date_in: new Date(2021, 9, 29) });
  lat();
  lng();
  l();
  b(); //very bad hack around calculang bugs in this fn
  if (isSameDay(sunset_date(), new Date(2021, 9, 29))) // start date is calculang release date
    return _.range(0, 200) // ~~500 mins => over 8 hours~~
      .map((i) => addMinutes(new Date(2021, 9, 29, 12 /* 5pm? */), i * 5)); // these are very limiting paramaters for other locations ! Maybe move to check all 5 min intervals?
  // assuming after 10/29/21
  else
    return _.range(-15, duration_factor()) // ~75mins. Wide to capture time changes? +I could use the solsticies to avoid seeking both ways
      .map((i) =>
        addDays(
        addMinutes(
          sunset_time_for_sunset_date(
            { sunset_date_in: addDays(sunset_date(), -1) },
            0 // hack somehow?
          ),
          i * 5
        ), 1)
      );

  //.map((datezz) => (
  /*altitude:*/ 6; //altitude_obj({ obj_in: 'sun', X: date()*0+obj() }) // compiler doesn't like this
  //,azimuth: 2//azimuth_obj({ /* obj_in: 'sun', date_in, X: date()*0+obj() */ }),
  //));
};

export const sunset_projection_for_sunset_date = () =>
  sunset_projection_times_for_sunset_date().map((date_in) => ({
    date_in,
    sunset_date_in: sunset_date(),
    altitude: altitude_obj({ obj_in: 'sun' }),
    azimuth: azimuth_obj({ obj_in: 'sun' }),
  }));

export const sunset_time_for_sunset_date = () =>
  sunset_projection_for_sunset_date().find((d) => d.altitude < 0).date_in;


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

export const date = () => date_in;
export const lat = () => lat_in;
export const lng = () => lng_in;

// "date/time constants and conversions"
export const dayMs = () => 1000 * 60 * 60 * 24;
export const J1970 = () => 2440588;
export const J2000 = () => 2451545;
export const rad = () => Math.PI / 180;

// bad form?
var PI = Math.PI,
  sin = Math.sin,
  cos = Math.cos,
  tan = Math.tan,
  asin = Math.asin,
  atan = Math.atan2,
  acos = Math.acos;

export const e = () => rad() * 23.4397; // obliquity of the Earth

export const lw = () => rad() * -lng();
export const phi = () => rad() * lat();

export const julian_1 = () => date().valueOf() / dayMs() - 0.5 + J1970() - J2000(); // fn on date_in

//// right_ascension, declination locked input structure
export const l = () => l_in;
export const b = () => b_in;

export const right_ascension = () =>
  atan(sin(l()) * cos(e()) - tan(b()) * sin(e()), cos(l()));
export const declination = () =>
  asin(sin(b()) * cos(e()) + cos(b()) * sin(e()) * sin(l()));

/// azimuth, altitude ~~locked~~ input structure
//export const H = () => H_in;
//export const phi = () => phi_in;
export const dec = () => dec_in;

export const azimuth = () =>
  atan(sin(H()), cos(H()) * sin(phi()) - tan(dec()) * cos(phi())); // some refactors to function might help here
export const altitude = () =>
  asin(sin(phi()) * sin(dec()) + cos(phi()) * cos(dec()) * cos(H()));

//export const lw = () => lw_in;
export const sidereal_time = () =>
  rad() * (280.16 + 360.9856235 * julian_1()) - lw();

// abstract sun, moon values via obj_in
export const obj = () => obj_in;
export const solar_mean_anomaly = () => {
  if (obj() == 'sun') return rad() * (357.5291 + 0.98560028 * julian_1());
  else if (obj() == 'moon') return rad() * (134.963 + 13.064993 * julian_1());
  else console.error('obj not sun or moon');
};

export const equation_of_center = () =>
  rad() *
  (1.9148 * sin(solar_mean_anomaly()) +
    0.02 * sin(2 * solar_mean_anomaly()) +
    0.0003 * sin(3 * solar_mean_anomaly()));

export const perihelion_of_earth = () => rad() * 102.9372;

export const ecliptic_longitude = () =>
  Math.PI + solar_mean_anomaly() + equation_of_center() + perihelion_of_earth();

// sunCoords outputs (still intermediate)
// naming convention? (L, 0) / _obj?
export const declination_L0 = () =>
  declination({ l_in: ecliptic_longitude(), b_in: 0 });
export const right_ascension_L0 = () =>
  right_ascension({ l_in: ecliptic_longitude(), b_in: 0 });

export const H = () => sidereal_time() - right_ascension_L0();

// outputs
export const azimuth_obj = () => azimuth({ dec_in: declination_L0() });
export const altitude_obj = () => altitude({ dec_in: declination_L0() });

// moon calcs in suncalc have an astroRefraction param I didn't build?
// also some other error?
// but sun recs closer from a few tests
