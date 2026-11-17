# Data dictionary

## generation_monthly_2010_2025.csv
Monthly SEAI generation by source.

- `period` — YYYY-MM
- `year`
- `month`
- `month_name`
- `source`
- `source_group` — broad analytical label only
- `generation_gwh`
- `source_dataset`

## generation_annual_long_2010_2025.csv
Annual generation by source in long format.

- `year`
- `source`
- `source_group`
- `generation_gwh`
- `share_pct`

## generation_annual_summary_2010_2025.csv
Annual one-row summary for the key technologies.

Includes:
- total generation
- gas/wind/solar/coal/hydro/oil/peat-biomass/waste generation
- technology shares
- combined gas + wind share

## cso_supply_monthly_2025.csv
CSO ESSA02 monthly grid-scale supply converted to GWh.

## generation_source_validation_2023_2025.csv
SEAI monthly aggregates versus CSO annual values.

## thermal_generation_efficiency_2010_2025.csv
SEAI National Energy Balance-derived public thermal inputs, output, efficiency and fuel shares.

## fuel_supply_dependency_2010_2025.csv
SEAI Energy-by-Fuel origin data and analytical import-share calculation.

## generation_concentration_2010_2025.csv
Generation-concentration metrics:
- HHI
- top source
- top-two combined share
- effective equal-source count

## monthly_operating_relationships_by_year.csv
Year-by-year monthly correlations and coefficients of variation for gas, wind and solar.

## seasonality_profile_2021_2025.csv
Average/min/max/std monthly profiles for gas, wind and solar over 2021–2025.

## monthly_grid_operating_metrics_2025.csv
Monthly 2025 gas/wind/solar/coal generation, imports, exports, storage and supply proxy.

## ress_auction_price_history_2020_2025.csv
Published RESS auction-price benchmarks and source URLs.

## gas_fuel_carbon_cost_sensitivity_2025.csv
Illustrative gas fuel + direct-carbon cost under different fuel-price and efficiency assumptions.

## project04_evidence_hierarchy.csv
Question-by-question evidence-strength table used to discipline final claims.
