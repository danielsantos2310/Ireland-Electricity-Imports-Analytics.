from __future__ import annotations

def gas_fuel_carbon_cost(gas_price_eur_per_mwh_fuel: float,
                         efficiency: float,
                         gas_emission_factor_tco2_per_mwh_fuel: float,
                         ets_eur_per_tco2: float) -> dict[str, float]:
    if not 0 < efficiency <= 1:
        raise ValueError("efficiency must be between 0 and 1")
    fuel = gas_price_eur_per_mwh_fuel / efficiency
    carbon = gas_emission_factor_tco2_per_mwh_fuel / efficiency * ets_eur_per_tco2
    return {
        "fuel_eur_per_mwh_electricity": fuel,
        "carbon_eur_per_mwh_electricity": carbon,
        "fuel_plus_carbon_eur_per_mwh_electricity": fuel + carbon,
    }
