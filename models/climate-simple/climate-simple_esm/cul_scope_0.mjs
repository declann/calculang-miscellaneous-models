
import { memoize } from 'underscore';
//import memoize from 'lru-memoize';
//import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?

import { emissions_rate_ as emissions_rate$, year_0_ as year_0$, temperature_0_ as temperature_0$, CO2_concentration_0_ as CO2_concentration_0$, climate_change_sensitivity_ as climate_change_sensitivity$, year_ as year$, absorption_ as absorption$, drawdown_ as drawdown$, CO2_concentration_ as CO2_concentration$, net_carbon_ as net_carbon$, CO2_concentration_delta_ as CO2_concentration_delta$, temperature_ as temperature$, concentration_factor_ as concentration_factor$, temperature_delta_ as temperature_delta$ } from "./cul_scope_1.mjs"; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!



////////// start emissions_rate memo-loader code //////////
//const emissions_rate$m = memoize(999999, isEqual)(emissions_rate$);
export const emissions_rate$m = memoize(emissions_rate$, JSON.stringify);
export const emissions_rate = (a) => {
  return emissions_rate$m(a);
  // eslint-disable-next-line no-undef
  emissions_rate$({ emissions_rate_in }); // never run, but here to "trick" calculang graph logic
};
////////// end emissions_rate memo-loader code //////////



////////// start year_0 memo-loader code //////////
//const year_0$m = memoize(999999, isEqual)(year_0$);
export const year_0$m = memoize(year_0$, JSON.stringify);
export const year_0 = (a) => {
  return year_0$m(a);
  // eslint-disable-next-line no-undef
  year_0$({}); // never run, but here to "trick" calculang graph logic
};
////////// end year_0 memo-loader code //////////



////////// start temperature_0 memo-loader code //////////
//const temperature_0$m = memoize(999999, isEqual)(temperature_0$);
export const temperature_0$m = memoize(temperature_0$, JSON.stringify);
export const temperature_0 = (a) => {
  return temperature_0$m(a);
  // eslint-disable-next-line no-undef
  temperature_0$({}); // never run, but here to "trick" calculang graph logic
};
////////// end temperature_0 memo-loader code //////////



////////// start CO2_concentration_0 memo-loader code //////////
//const CO2_concentration_0$m = memoize(999999, isEqual)(CO2_concentration_0$);
export const CO2_concentration_0$m = memoize(CO2_concentration_0$, JSON.stringify);
export const CO2_concentration_0 = (a) => {
  return CO2_concentration_0$m(a);
  // eslint-disable-next-line no-undef
  CO2_concentration_0$({}); // never run, but here to "trick" calculang graph logic
};
////////// end CO2_concentration_0 memo-loader code //////////



////////// start climate_change_sensitivity memo-loader code //////////
//const climate_change_sensitivity$m = memoize(999999, isEqual)(climate_change_sensitivity$);
export const climate_change_sensitivity$m = memoize(climate_change_sensitivity$, JSON.stringify);
export const climate_change_sensitivity = (a) => {
  return climate_change_sensitivity$m(a);
  // eslint-disable-next-line no-undef
  climate_change_sensitivity$({ climate_change_sensitivity_in }); // never run, but here to "trick" calculang graph logic
};
////////// end climate_change_sensitivity memo-loader code //////////



////////// start year memo-loader code //////////
//const year$m = memoize(999999, isEqual)(year$);
export const year$m = memoize(year$, JSON.stringify);
export const year = (a) => {
  return year$m(a);
  // eslint-disable-next-line no-undef
  year$({ year_in }); // never run, but here to "trick" calculang graph logic
};
////////// end year memo-loader code //////////



////////// start absorption memo-loader code //////////
//const absorption$m = memoize(999999, isEqual)(absorption$);
export const absorption$m = memoize(absorption$, JSON.stringify);
export const absorption = (a) => {
  return absorption$m(a);
  // eslint-disable-next-line no-undef
  absorption$({ emissions_rate_in }); // never run, but here to "trick" calculang graph logic
};
////////// end absorption memo-loader code //////////



////////// start drawdown memo-loader code //////////
//const drawdown$m = memoize(999999, isEqual)(drawdown$);
export const drawdown$m = memoize(drawdown$, JSON.stringify);
export const drawdown = (a) => {
  return drawdown$m(a);
  // eslint-disable-next-line no-undef
  drawdown$({ year_in, emissions_rate_in }); // never run, but here to "trick" calculang graph logic
};
////////// end drawdown memo-loader code //////////



////////// start CO2_concentration memo-loader code //////////
//const CO2_concentration$m = memoize(999999, isEqual)(CO2_concentration$);
export const CO2_concentration$m = memoize(CO2_concentration$, JSON.stringify);
export const CO2_concentration = (a) => {
  return CO2_concentration$m(a);
  // eslint-disable-next-line no-undef
  CO2_concentration$({ year_in, emissions_rate_in }); // never run, but here to "trick" calculang graph logic
};
////////// end CO2_concentration memo-loader code //////////



////////// start net_carbon memo-loader code //////////
//const net_carbon$m = memoize(999999, isEqual)(net_carbon$);
export const net_carbon$m = memoize(net_carbon$, JSON.stringify);
export const net_carbon = (a) => {
  return net_carbon$m(a);
  // eslint-disable-next-line no-undef
  net_carbon$({ emissions_rate_in, year_in }); // never run, but here to "trick" calculang graph logic
};
////////// end net_carbon memo-loader code //////////



////////// start CO2_concentration_delta memo-loader code //////////
//const CO2_concentration_delta$m = memoize(999999, isEqual)(CO2_concentration_delta$);
export const CO2_concentration_delta$m = memoize(CO2_concentration_delta$, JSON.stringify);
export const CO2_concentration_delta = (a) => {
  return CO2_concentration_delta$m(a);
  // eslint-disable-next-line no-undef
  CO2_concentration_delta$({ emissions_rate_in, year_in }); // never run, but here to "trick" calculang graph logic
};
////////// end CO2_concentration_delta memo-loader code //////////



////////// start temperature memo-loader code //////////
//const temperature$m = memoize(999999, isEqual)(temperature$);
export const temperature$m = memoize(temperature$, JSON.stringify);
export const temperature = (a) => {
  return temperature$m(a);
  // eslint-disable-next-line no-undef
  temperature$({ year_in, emissions_rate_in, climate_change_sensitivity_in }); // never run, but here to "trick" calculang graph logic
};
////////// end temperature memo-loader code //////////



////////// start concentration_factor memo-loader code //////////
//const concentration_factor$m = memoize(999999, isEqual)(concentration_factor$);
export const concentration_factor$m = memoize(concentration_factor$, JSON.stringify);
export const concentration_factor = (a) => {
  return concentration_factor$m(a);
  // eslint-disable-next-line no-undef
  concentration_factor$({ year_in, emissions_rate_in }); // never run, but here to "trick" calculang graph logic
};
////////// end concentration_factor memo-loader code //////////



////////// start temperature_delta memo-loader code //////////
//const temperature_delta$m = memoize(999999, isEqual)(temperature_delta$);
export const temperature_delta$m = memoize(temperature_delta$, JSON.stringify);
export const temperature_delta = (a) => {
  return temperature_delta$m(a);
  // eslint-disable-next-line no-undef
  temperature_delta$({ year_in, emissions_rate_in, climate_change_sensitivity_in }); // never run, but here to "trick" calculang graph logic
};
////////// end temperature_delta memo-loader code //////////