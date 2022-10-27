
    import { memoize } from 'underscore';
    //import memoize from 'lru-memoize';
    //import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?
    
    import { sunset_date_ as sunset_date$, sunset_projection_times_for_sunset_date_ as sunset_projection_times_for_sunset_date$, sunset_projection_for_sunset_date_ as sunset_projection_for_sunset_date$, sunset_time_for_sunset_date_ as sunset_time_for_sunset_date$, date_ as date$, lat_ as lat$, lng_ as lng$, dayMs_ as dayMs$, J1970_ as J1970$, J2000_ as J2000$, rad_ as rad$, e_ as e$, lw_ as lw$, phi_ as phi$, julian_1_ as julian_1$, l_ as l$, b_ as b$, right_ascension_ as right_ascension$, declination_ as declination$, dec_ as dec$, azimuth_ as azimuth$, altitude_ as altitude$, sidereal_time_ as sidereal_time$, obj_ as obj$, solar_mean_anomaly_ as solar_mean_anomaly$, equation_of_center_ as equation_of_center$, perihelion_of_earth_ as perihelion_of_earth$, ecliptic_longitude_ as ecliptic_longitude$, declination_L0_ as declination_L0$, right_ascension_L0_ as right_ascension_L0$, H_ as H$, azimuth_obj_ as azimuth_obj$, altitude_obj_ as altitude_obj$ } from './suncalc-seek-sunsets.cul.js?+memoed'; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!
    
    

////////// start sunset_date memo-loader code //////////
//const sunset_date$m = memoize(999999, isEqual)(sunset_date$);
export const sunset_date$m = memoize(sunset_date$, JSON.stringify);
export const sunset_date = (a) => {
  return sunset_date$m(a);
  // eslint-disable-next-line no-undef
  sunset_date$(); // never run, but here to "trick" calculang graph logic
};
////////// end sunset_date memo-loader code //////////



////////// start sunset_projection_times_for_sunset_date memo-loader code //////////
//const sunset_projection_times_for_sunset_date$m = memoize(999999, isEqual)(sunset_projection_times_for_sunset_date$);
export const sunset_projection_times_for_sunset_date$m = memoize(sunset_projection_times_for_sunset_date$, JSON.stringify);
export const sunset_projection_times_for_sunset_date = (a) => {
  return sunset_projection_times_for_sunset_date$m(a);
  // eslint-disable-next-line no-undef
  sunset_projection_times_for_sunset_date$(); // never run, but here to "trick" calculang graph logic
};
////////// end sunset_projection_times_for_sunset_date memo-loader code //////////



////////// start sunset_projection_for_sunset_date memo-loader code //////////
//const sunset_projection_for_sunset_date$m = memoize(999999, isEqual)(sunset_projection_for_sunset_date$);
export const sunset_projection_for_sunset_date$m = memoize(sunset_projection_for_sunset_date$, JSON.stringify);
export const sunset_projection_for_sunset_date = (a) => {
  return sunset_projection_for_sunset_date$m(a);
  // eslint-disable-next-line no-undef
  sunset_projection_for_sunset_date$(); // never run, but here to "trick" calculang graph logic
};
////////// end sunset_projection_for_sunset_date memo-loader code //////////



////////// start sunset_time_for_sunset_date memo-loader code //////////
//const sunset_time_for_sunset_date$m = memoize(999999, isEqual)(sunset_time_for_sunset_date$);
export const sunset_time_for_sunset_date$m = memoize(sunset_time_for_sunset_date$, JSON.stringify);
export const sunset_time_for_sunset_date = (a) => {
  return sunset_time_for_sunset_date$m(a);
  // eslint-disable-next-line no-undef
  sunset_time_for_sunset_date$(); // never run, but here to "trick" calculang graph logic
};
////////// end sunset_time_for_sunset_date memo-loader code //////////



////////// start date memo-loader code //////////
//const date$m = memoize(999999, isEqual)(date$);
export const date$m = memoize(date$, JSON.stringify);
export const date = (a) => {
  return date$m(a);
  // eslint-disable-next-line no-undef
  date$(); // never run, but here to "trick" calculang graph logic
};
////////// end date memo-loader code //////////



////////// start lat memo-loader code //////////
//const lat$m = memoize(999999, isEqual)(lat$);
export const lat$m = memoize(lat$, JSON.stringify);
export const lat = (a) => {
  return lat$m(a);
  // eslint-disable-next-line no-undef
  lat$(); // never run, but here to "trick" calculang graph logic
};
////////// end lat memo-loader code //////////



////////// start lng memo-loader code //////////
//const lng$m = memoize(999999, isEqual)(lng$);
export const lng$m = memoize(lng$, JSON.stringify);
export const lng = (a) => {
  return lng$m(a);
  // eslint-disable-next-line no-undef
  lng$(); // never run, but here to "trick" calculang graph logic
};
////////// end lng memo-loader code //////////



////////// start dayMs memo-loader code //////////
//const dayMs$m = memoize(999999, isEqual)(dayMs$);
export const dayMs$m = memoize(dayMs$, JSON.stringify);
export const dayMs = (a) => {
  return dayMs$m(a);
  // eslint-disable-next-line no-undef
  dayMs$(); // never run, but here to "trick" calculang graph logic
};
////////// end dayMs memo-loader code //////////



////////// start J1970 memo-loader code //////////
//const J1970$m = memoize(999999, isEqual)(J1970$);
export const J1970$m = memoize(J1970$, JSON.stringify);
export const J1970 = (a) => {
  return J1970$m(a);
  // eslint-disable-next-line no-undef
  J1970$(); // never run, but here to "trick" calculang graph logic
};
////////// end J1970 memo-loader code //////////



////////// start J2000 memo-loader code //////////
//const J2000$m = memoize(999999, isEqual)(J2000$);
export const J2000$m = memoize(J2000$, JSON.stringify);
export const J2000 = (a) => {
  return J2000$m(a);
  // eslint-disable-next-line no-undef
  J2000$(); // never run, but here to "trick" calculang graph logic
};
////////// end J2000 memo-loader code //////////



////////// start rad memo-loader code //////////
//const rad$m = memoize(999999, isEqual)(rad$);
export const rad$m = memoize(rad$, JSON.stringify);
export const rad = (a) => {
  return rad$m(a);
  // eslint-disable-next-line no-undef
  rad$(); // never run, but here to "trick" calculang graph logic
};
////////// end rad memo-loader code //////////



////////// start e memo-loader code //////////
//const e$m = memoize(999999, isEqual)(e$);
export const e$m = memoize(e$, JSON.stringify);
export const e = (a) => {
  return e$m(a);
  // eslint-disable-next-line no-undef
  e$(); // never run, but here to "trick" calculang graph logic
};
////////// end e memo-loader code //////////



////////// start lw memo-loader code //////////
//const lw$m = memoize(999999, isEqual)(lw$);
export const lw$m = memoize(lw$, JSON.stringify);
export const lw = (a) => {
  return lw$m(a);
  // eslint-disable-next-line no-undef
  lw$(); // never run, but here to "trick" calculang graph logic
};
////////// end lw memo-loader code //////////



////////// start phi memo-loader code //////////
//const phi$m = memoize(999999, isEqual)(phi$);
export const phi$m = memoize(phi$, JSON.stringify);
export const phi = (a) => {
  return phi$m(a);
  // eslint-disable-next-line no-undef
  phi$(); // never run, but here to "trick" calculang graph logic
};
////////// end phi memo-loader code //////////



////////// start julian_1 memo-loader code //////////
//const julian_1$m = memoize(999999, isEqual)(julian_1$);
export const julian_1$m = memoize(julian_1$, JSON.stringify);
export const julian_1 = (a) => {
  return julian_1$m(a);
  // eslint-disable-next-line no-undef
  julian_1$(); // never run, but here to "trick" calculang graph logic
};
////////// end julian_1 memo-loader code //////////



////////// start l memo-loader code //////////
//const l$m = memoize(999999, isEqual)(l$);
export const l$m = memoize(l$, JSON.stringify);
export const l = (a) => {
  return l$m(a);
  // eslint-disable-next-line no-undef
  l$(); // never run, but here to "trick" calculang graph logic
};
////////// end l memo-loader code //////////



////////// start b memo-loader code //////////
//const b$m = memoize(999999, isEqual)(b$);
export const b$m = memoize(b$, JSON.stringify);
export const b = (a) => {
  return b$m(a);
  // eslint-disable-next-line no-undef
  b$(); // never run, but here to "trick" calculang graph logic
};
////////// end b memo-loader code //////////



////////// start right_ascension memo-loader code //////////
//const right_ascension$m = memoize(999999, isEqual)(right_ascension$);
export const right_ascension$m = memoize(right_ascension$, JSON.stringify);
export const right_ascension = (a) => {
  return right_ascension$m(a);
  // eslint-disable-next-line no-undef
  right_ascension$(); // never run, but here to "trick" calculang graph logic
};
////////// end right_ascension memo-loader code //////////



////////// start declination memo-loader code //////////
//const declination$m = memoize(999999, isEqual)(declination$);
export const declination$m = memoize(declination$, JSON.stringify);
export const declination = (a) => {
  return declination$m(a);
  // eslint-disable-next-line no-undef
  declination$(); // never run, but here to "trick" calculang graph logic
};
////////// end declination memo-loader code //////////



////////// start dec memo-loader code //////////
//const dec$m = memoize(999999, isEqual)(dec$);
export const dec$m = memoize(dec$, JSON.stringify);
export const dec = (a) => {
  return dec$m(a);
  // eslint-disable-next-line no-undef
  dec$(); // never run, but here to "trick" calculang graph logic
};
////////// end dec memo-loader code //////////



////////// start azimuth memo-loader code //////////
//const azimuth$m = memoize(999999, isEqual)(azimuth$);
export const azimuth$m = memoize(azimuth$, JSON.stringify);
export const azimuth = (a) => {
  return azimuth$m(a);
  // eslint-disable-next-line no-undef
  azimuth$(); // never run, but here to "trick" calculang graph logic
};
////////// end azimuth memo-loader code //////////



////////// start altitude memo-loader code //////////
//const altitude$m = memoize(999999, isEqual)(altitude$);
export const altitude$m = memoize(altitude$, JSON.stringify);
export const altitude = (a) => {
  return altitude$m(a);
  // eslint-disable-next-line no-undef
  altitude$(); // never run, but here to "trick" calculang graph logic
};
////////// end altitude memo-loader code //////////



////////// start sidereal_time memo-loader code //////////
//const sidereal_time$m = memoize(999999, isEqual)(sidereal_time$);
export const sidereal_time$m = memoize(sidereal_time$, JSON.stringify);
export const sidereal_time = (a) => {
  return sidereal_time$m(a);
  // eslint-disable-next-line no-undef
  sidereal_time$(); // never run, but here to "trick" calculang graph logic
};
////////// end sidereal_time memo-loader code //////////



////////// start obj memo-loader code //////////
//const obj$m = memoize(999999, isEqual)(obj$);
export const obj$m = memoize(obj$, JSON.stringify);
export const obj = (a) => {
  return obj$m(a);
  // eslint-disable-next-line no-undef
  obj$(); // never run, but here to "trick" calculang graph logic
};
////////// end obj memo-loader code //////////



////////// start solar_mean_anomaly memo-loader code //////////
//const solar_mean_anomaly$m = memoize(999999, isEqual)(solar_mean_anomaly$);
export const solar_mean_anomaly$m = memoize(solar_mean_anomaly$, JSON.stringify);
export const solar_mean_anomaly = (a) => {
  return solar_mean_anomaly$m(a);
  // eslint-disable-next-line no-undef
  solar_mean_anomaly$(); // never run, but here to "trick" calculang graph logic
};
////////// end solar_mean_anomaly memo-loader code //////////



////////// start equation_of_center memo-loader code //////////
//const equation_of_center$m = memoize(999999, isEqual)(equation_of_center$);
export const equation_of_center$m = memoize(equation_of_center$, JSON.stringify);
export const equation_of_center = (a) => {
  return equation_of_center$m(a);
  // eslint-disable-next-line no-undef
  equation_of_center$(); // never run, but here to "trick" calculang graph logic
};
////////// end equation_of_center memo-loader code //////////



////////// start perihelion_of_earth memo-loader code //////////
//const perihelion_of_earth$m = memoize(999999, isEqual)(perihelion_of_earth$);
export const perihelion_of_earth$m = memoize(perihelion_of_earth$, JSON.stringify);
export const perihelion_of_earth = (a) => {
  return perihelion_of_earth$m(a);
  // eslint-disable-next-line no-undef
  perihelion_of_earth$(); // never run, but here to "trick" calculang graph logic
};
////////// end perihelion_of_earth memo-loader code //////////



////////// start ecliptic_longitude memo-loader code //////////
//const ecliptic_longitude$m = memoize(999999, isEqual)(ecliptic_longitude$);
export const ecliptic_longitude$m = memoize(ecliptic_longitude$, JSON.stringify);
export const ecliptic_longitude = (a) => {
  return ecliptic_longitude$m(a);
  // eslint-disable-next-line no-undef
  ecliptic_longitude$(); // never run, but here to "trick" calculang graph logic
};
////////// end ecliptic_longitude memo-loader code //////////



////////// start declination_L0 memo-loader code //////////
//const declination_L0$m = memoize(999999, isEqual)(declination_L0$);
export const declination_L0$m = memoize(declination_L0$, JSON.stringify);
export const declination_L0 = (a) => {
  return declination_L0$m(a);
  // eslint-disable-next-line no-undef
  declination_L0$(); // never run, but here to "trick" calculang graph logic
};
////////// end declination_L0 memo-loader code //////////



////////// start right_ascension_L0 memo-loader code //////////
//const right_ascension_L0$m = memoize(999999, isEqual)(right_ascension_L0$);
export const right_ascension_L0$m = memoize(right_ascension_L0$, JSON.stringify);
export const right_ascension_L0 = (a) => {
  return right_ascension_L0$m(a);
  // eslint-disable-next-line no-undef
  right_ascension_L0$(); // never run, but here to "trick" calculang graph logic
};
////////// end right_ascension_L0 memo-loader code //////////



////////// start H memo-loader code //////////
//const H$m = memoize(999999, isEqual)(H$);
export const H$m = memoize(H$, JSON.stringify);
export const H = (a) => {
  return H$m(a);
  // eslint-disable-next-line no-undef
  H$(); // never run, but here to "trick" calculang graph logic
};
////////// end H memo-loader code //////////



////////// start azimuth_obj memo-loader code //////////
//const azimuth_obj$m = memoize(999999, isEqual)(azimuth_obj$);
export const azimuth_obj$m = memoize(azimuth_obj$, JSON.stringify);
export const azimuth_obj = (a) => {
  return azimuth_obj$m(a);
  // eslint-disable-next-line no-undef
  azimuth_obj$(); // never run, but here to "trick" calculang graph logic
};
////////// end azimuth_obj memo-loader code //////////



////////// start altitude_obj memo-loader code //////////
//const altitude_obj$m = memoize(999999, isEqual)(altitude_obj$);
export const altitude_obj$m = memoize(altitude_obj$, JSON.stringify);
export const altitude_obj = (a) => {
  return altitude_obj$m(a);
  // eslint-disable-next-line no-undef
  altitude_obj$(); // never run, but here to "trick" calculang graph logic
};
////////// end altitude_obj memo-loader code //////////


    