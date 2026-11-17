# Methodology

## 1. Scope

The core analytical period is 2010–2025. It is long enough to capture Ireland's structural generation transition while maintaining consistent monthly generation coverage.

## 2. Source hierarchy

### Long-run generation backbone
SEAI monthly electricity-generation export is aggregated to annual totals and shares.

### Recent grid-supply validation
CSO ESSA04 annual grid-scale electricity supply is used to validate 2023–2025 generation totals and recent import/storage measures.

### Operational 2025 layer
CSO ESSA02 monthly supply data provide gas, wind, solar, imports, exports and storage by month.

### Thermal efficiency
SEAI National Energy Balance public thermal power-plant input and output rows are used to derive:

`public thermal efficiency = electricity output / total public thermal input`

This is an aggregate accounting measure, not plant-by-plant engineering efficiency.

### Fuel origin
SEAI Energy by Fuel is used to compare indigenous production and imports. The project reports:

`import share = imports / (indigenous production + imports)`

This describes source origin; it is not the same as net-import dependence after exports, stocks and transformation.

## 3. Reconciliation

SEAI monthly generation is independently checked against CSO annual grid-scale generation for 2023–2025. Small differences are retained and documented rather than overwritten.

## 4. Mixed fuel categories

The long-run SEAI export contains categories such as `Peat & Biomass` and `Waste`. These cannot be cleanly assigned wholesale to renewable or fossil generation. The project therefore avoids manufacturing a long-run total renewable share from that file.

Where an official renewable share is needed, the official CSO/SEAI definition is preferred.

## 5. Operating relationships

Monthly Pearson correlations are used only as descriptive diagnostics. They do not establish causality or balancing responsibility.

The gas–wind relationship can be influenced by:
- demand;
- imports and exports;
- outages;
- storage;
- hydro and solar;
- fuel and carbon prices;
- dispatch constraints.

## 6. Generation concentration

The project reports:
- largest-source share;
- top-two combined share;
- Herfindahl–Hirschman Index (HHI);
- effective number of equal-sized sources (`1 / HHI`).

This distinguishes single-source dominance from a system in which two large technologies share leadership.

## 7. Gas-generation economics

The sensitivity model is:

`fuel cost per MWh electricity = gas price per MWh fuel / thermal efficiency`

`carbon cost per MWh electricity = gas combustion factor / thermal efficiency × EU ETS allowance price`

The model intentionally excludes:
- plant-specific variable O&M;
- startup/ramping cost;
- hedging;
- capacity payments;
- financing;
- network charges;
- private gas procurement contracts.

It is therefore a **fuel + direct-carbon sensitivity**, not total plant LCOE.

## 8. Renewable economics

RESS final-auction weighted-average strike prices are used as Irish renewable investment/support benchmarks.

They are **not** treated as:
- dispatch marginal cost;
- universal project LCOE;
- wholesale market price.

## 9. Gas-price market context

Gas Networks Ireland publishes IBP and NBP SAP values on its transparency portal. Its Code of Operations defines NBP SAP as the UK OCM System Average Price and IBP SAP as the average of trades at the Irish Balancing Point.

The ONS publishes the official National Gas Transmission daily SAP dataset for Great Britain. These series provide wholesale-market context, but the project does not substitute them for unknown private generator contracts.

## 10. Interpretation standard

Claims are separated into:
- **observed facts** — directly in source data;
- **derived metrics** — transparent calculations;
- **descriptive associations** — correlations/seasonality;
- **limitations / not identifiable** — claims the public data cannot support.
