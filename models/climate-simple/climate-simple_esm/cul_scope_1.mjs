import { temperature_delta } from "./cul_scope_0.mjs";import { concentration_factor } from "./cul_scope_0.mjs";import { temperature } from "./cul_scope_0.mjs";import { CO2_concentration_delta } from "./cul_scope_0.mjs";import { net_carbon } from "./cul_scope_0.mjs";import { CO2_concentration } from "./cul_scope_0.mjs";import { drawdown } from "./cul_scope_0.mjs";import { absorption } from "./cul_scope_0.mjs";import { year } from "./cul_scope_0.mjs";import { climate_change_sensitivity } from "./cul_scope_0.mjs";import { CO2_concentration_0 } from "./cul_scope_0.mjs";import { temperature_0 } from "./cul_scope_0.mjs";import { year_0 } from "./cul_scope_0.mjs";import { emissions_rate } from "./cul_scope_0.mjs"; // minimise wip: just plan this on paper for now

// todo: validate against what I've been told.
// reconcile to UCAR Simple Climate Model: https://scied.ucar.edu/interactive/simple-climate-model

export const emissions_rate_ = ({ emissions_rate_in }) => emissions_rate_in; // gigatons carbon per year, not CO2 (=> no oxygen mass) // 10.5

export const year_0_ = ({}) => 2015;
export const temperature_0_ = ({}) => 14.65;
export const CO2_concentration_0_ = ({}) => 399.4;

export const climate_change_sensitivity_ = ({ climate_change_sensitivity_in }) => climate_change_sensitivity_in; // 3

export const year_ = ({ year_in }) => year_in;

export const absorption_ = ({ emissions_rate_in }) => emissions_rate({ emissions_rate_in }) * 0.55;

export const drawdown_ = ({ year_in, emissions_rate_in }) => 0.005 * CO2_concentration({ year_in, emissions_rate_in });

export const CO2_concentration_ = ({ year_in, emissions_rate_in }) => {
  if (year({ year_in }) == year_0({})) return CO2_concentration_0({});else

  return (
    CO2_concentration({ emissions_rate_in, year_in: year({ year_in }) - 1 }) + CO2_concentration_delta({ emissions_rate_in, year_in }));

};

export const net_carbon_ = ({ emissions_rate_in, year_in }) =>
/* _rate? */emissions_rate({ emissions_rate_in }) - absorption({ emissions_rate_in }) - drawdown({ year_in, emissions_rate_in }); // can be negative because of drawdown

export const CO2_concentration_delta_ = ({ emissions_rate_in, year_in }) =>
net_carbon({ emissions_rate_in, year_in: year({ year_in }) - 1 }) * 0.000001; // TODO put a real value here?

export const temperature_ = ({ year_in, emissions_rate_in, climate_change_sensitivity_in }) =>
temperature_0({}) + (concentration_factor({ year_in, emissions_rate_in }) - 1) * climate_change_sensitivity({ climate_change_sensitivity_in });

export const concentration_factor_ = ({ year_in, emissions_rate_in }) =>
CO2_concentration({ year_in, emissions_rate_in }) / CO2_concentration_0({});

export const temperature_delta_ = ({ year_in, emissions_rate_in, climate_change_sensitivity_in }) =>
CO2_concentration({ year_in, emissions_rate_in }) / CO2_concentration_0({}) * climate_change_sensitivity({ climate_change_sensitivity_in });