# Ireland Electricity Generation Analytics

**Project 04 — Ireland / Energy / Data**

> **How did Ireland change what powers its electricity system?**

An evidence-first analysis of Ireland's electricity-generation transition from 2010 to 2025, connecting generation by source with operating variability, public-thermal efficiency, imported-fuel exposure and carefully defined generation-economics benchmarks.

## Explore

- `notebooks/Ireland_Electricity_Generation_Analytics_Final.ipynb` — final reproducible notebook
- `data/processed/` — clean analytical datasets
- `charts/` — publication charts
- `docs/` — sources, methodology, data dictionary and conclusion
- `index.html` — interactive project story for GitHub Pages

## Research question

**How did Ireland transform its electricity-generation system between 2010 and 2025, and what does that transition mean for generation mix, operating flexibility, thermal efficiency, imported-fuel exposure, carbon cost and generation economics?**

## Key findings

- Domestic generation increased from **26.63 TWh in 2010 to 29.31 TWh in 2025** — only about **10.0%**.
- Wind's share rose from **10.5% to 40.1%**.
- Gas's share fell from **64.4% to 47.5%**, while gas became more dominant within the remaining public-thermal fuel mix.
- Gas + wind supplied approximately **87.6%** of the 2025 long-run domestic-generation series.
- Public-thermal conversion efficiency improved from approximately **45.5% to 49.5%**.
- Natural-gas import dependence was approximately **82.3%** in 2025.
- Net electricity imports increased sharply from 2023 to 2025 while domestic grid-scale generation was broadly flat.
- Gas generation economics are highly sensitive to fuel and EU ETS carbon prices; renewable RESS prices are treated as auction/support benchmarks rather than directly equivalent marginal costs.

## Main conclusion

Ireland's electricity transition is mainly a **change in composition rather than a dramatic expansion of domestic generation**.

Coal and peat retreated, wind became one of the two dominant generation sources, solar began scaling rapidly, and public thermal generation became smaller and somewhat more efficient. But external exposure did not disappear: gas remains central to the thermal system and mostly imported, while direct electricity imports have also become more important.

The system increasingly combines **indigenous variable renewables, gas flexibility, interconnection and emerging storage**.

## Technologies

`Python` · `pandas` · `NumPy` · `matplotlib` · `Jupyter` · `HTML` · `CSS` · `JavaScript`

## Primary sources

- CSO — Electricity Supply by Source
- SEAI — Electricity Generation, National Energy Balance, Energy by Fuel, conversion factors
- EirGrid — Renewable Electricity Support Scheme auction results
- European Commission — EU ETS auction reporting
- Gas Networks Ireland — imbalance prices / SAP framework
- ONS / National Gas Transmission — official GB SAP series for gas-market context

## Important limitations

- CSO grid-scale supply does not capture every autoproducer or rooftop generator.
- Some long-run SEAI categories combine fuels; mixed categories are not reclassified into simplistic renewable/fossil totals.
- Monthly correlations are descriptive, not causal.
- Public thermal efficiency is an aggregate system measure, not the efficiency of every plant.
- RESS strike prices and gas fuel + carbon costs are different economic concepts.
- Private fuel contracts, hedging, PPAs and plant-specific O&M are not observed.

## Project series

1. Ireland Data Centre Energy Analytics
2. Ireland Electricity Price Analytics
3. Ireland Data Centre Demand × Price Analytics
4. **Ireland Electricity Generation Analytics**
5. Ireland Electricity Imports Analytics *(next)*
6. Ireland Produce vs Import Analytics *(planned synthesis)*
