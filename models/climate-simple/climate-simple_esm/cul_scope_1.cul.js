
// minimise wip: just plan this on paper for now

// todo: validate against what I've been told.
// reconcile to UCAR Simple Climate Model: https://scied.ucar.edu/interactive/simple-climate-model

export const emissions_rate = () => emissions_rate_in; // gigatons carbon per year, not CO2 (=> no oxygen mass) // 10.5

export const year_0 = () => 2015;
export const temperature_0 = () => 14.65;
export const CO2_concentration_0 = () => 399.4;

export const climate_change_sensitivity = () => climate_change_sensitivity_in; // 3

export const year = () => year_in;

export const absorption = () => emissions_rate() * 0.55;

export const drawdown = () => 0.005 * CO2_concentration();

export const CO2_concentration = () => {
  if (year() == year_0()) return CO2_concentration_0();
  else
    return (
      CO2_concentration({ year_in: year() - 1 }) + CO2_concentration_delta()
    );
};

export const net_carbon = () => emissions_rate() - absorption() - drawdown(); // can be negative because of drawdown

export const CO2_concentration_delta = () => net_carbon() * 0.000001; // TODO put a real value here?

export const temperature = () =>
  temperature_0() + (concentration_factor() - 1) * climate_change_sensitivity();

export const concentration_factor = () =>
  CO2_concentration() / CO2_concentration_0();

export const temperature_delta = () =>
  (CO2_concentration() / CO2_concentration_0()) * climate_change_sensitivity();
