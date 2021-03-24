---
uid: Microsoft.Quantum.Samples.Ising
title: Microsoft.Quantum.Samples.Ising namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Samples.Ising
qsharp.summary: ''
---

# Microsoft.Quantum.Samples.Ising namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[EstimateIsingEnergy](xref:Microsoft.Quantum.Samples.Ising.EstimateIsingEnergy) |We perform adiabatic state preparation, and then phase estimation on the resulting state.
|[EstimateIsingEnergyUsingBuiltin](xref:Microsoft.Quantum.Samples.Ising.EstimateIsingEnergyUsingBuiltin) |We perform adiabatic state preparation, and then phase estimation on the resulting state. We use built-in function `AdiabaticStateEnergyEstimate` which automatically allocates qubits, performs state preparation, and then phase estimation.
|[Ising1DAdiabaticAndMeasureBuiltIn](xref:Microsoft.Quantum.Samples.Ising.Ising1DAdiabaticAndMeasureBuiltIn) |We now choose uniform coupling coefficients, allocate qubits to the simulation, implement adiabatic state preparation, and then return the results of spin measurement on each site.
|[Ising1DAdiabaticAndMeasureManual](xref:Microsoft.Quantum.Samples.Ising.Ising1DAdiabaticAndMeasureManual) |We now allocate qubits to the simulation, implement adiabatic state preparation, and then return the results of spin measurement on each site.
|[Ising1DAntiFerromagneticTest](xref:Microsoft.Quantum.Samples.Ising.Ising1DAntiFerromagneticTest) |
|[Ising1DExcitationCorrelation](xref:Microsoft.Quantum.Samples.Ising.Ising1DExcitationCorrelation) |Implements time-evolution by the Ising Hamiltonian on a line of qubits initialized in |100...0⟩ state, then measures each site.
|[IsingAdiabaticEvolutionManualImpl](xref:Microsoft.Quantum.Samples.Ising.IsingAdiabaticEvolutionManualImpl) |This feeds the Ising model `EvolutionSchedule` into a choice of a `TimeDependentSimulationAlgorithm' to implement time-dependent evolution by the interpolated Hamiltonian over its schedule.
|[Prepare1DIsingState](xref:Microsoft.Quantum.Samples.Ising.Prepare1DIsingState) |This initializes the qubits in an easy-to-prepare eigenstate of the initial Hamiltonian.
|[SimulateIsingStep](xref:Microsoft.Quantum.Samples.Ising.SimulateIsingStep) |This defines the unitary on which phase estimation is performed.
|[_Ising1DTrotterUnitaries](xref:Microsoft.Quantum.Samples.Ising._Ising1DTrotterUnitaries) |Implements time-evolution by a single term in the Ising Hamiltonian.

## Functions

| Name | Summary |
|------|---------|
|[EndEvoGen](xref:Microsoft.Quantum.Samples.Ising.EndEvoGen) |
|[HeisenbergXXZGeneratorIndex](xref:Microsoft.Quantum.Samples.Ising.HeisenbergXXZGeneratorIndex) |Returns a generator index for a term in the Heisenberg model with uniform couplings.
|[HeisenbergXXZGeneratorSystem](xref:Microsoft.Quantum.Samples.Ising.HeisenbergXXZGeneratorSystem) |Returns a generator system for the Heisenberg XXZ model.
|[Ising1DEvolutionGenerator](xref:Microsoft.Quantum.Samples.Ising.Ising1DEvolutionGenerator) |Returns an EvolutionGenerator for the Ising model.
|[Ising1DTrotterEvolution](xref:Microsoft.Quantum.Samples.Ising.Ising1DTrotterEvolution) |Returns a unitary operation that simulates time evolution by the Hamiltonian for a single Trotter step.
|[Ising1DTrotterUnitaries](xref:Microsoft.Quantum.Samples.Ising.Ising1DTrotterUnitaries) |Returns a description of the Ising Hamiltonian that is compatible with the Trotterization control structure.
|[IsingAdiabaticEvolutionBuiltIn](xref:Microsoft.Quantum.Samples.Ising.IsingAdiabaticEvolutionBuiltIn) |
|[IsingAdiabaticEvolutionManual](xref:Microsoft.Quantum.Samples.Ising.IsingAdiabaticEvolutionManual) |We make a choice of the Trotter–Suzuki decomposition as our `TimeDependentSimulationAlgorithm` for implementing time-dependent evolution. We also use partial application over the qubit register to return a unitary operation.
|[IsingEvolutionSchedule](xref:Microsoft.Quantum.Samples.Ising.IsingEvolutionSchedule) |We package the `GeneratorSystem` of the interpolated Hamiltonian H(s) as an `EvolutionSchedule` type by partial application of the schedule parameter.
|[IsingEvolutionScheduleImpl](xref:Microsoft.Quantum.Samples.Ising.IsingEvolutionScheduleImpl) |This uses the Ising model `GeneratorSystem` constructed previously to represent the desired interpolated Hamiltonian H(s). This is accomplished by choosing an appropriate function for its coefficients.
|[IsingGeneratorSystem](xref:Microsoft.Quantum.Samples.Ising.IsingGeneratorSystem) |Returns a generator system for the Ising model.
|[OneSiteGeneratorIndex](xref:Microsoft.Quantum.Samples.Ising.OneSiteGeneratorIndex) |Returns a generator index that is supported on a single site.
|[OneSiteGeneratorSystem](xref:Microsoft.Quantum.Samples.Ising.OneSiteGeneratorSystem) |Returns a generator system for a sum of generator indices each supported on a single site.
|[StartEvoGen](xref:Microsoft.Quantum.Samples.Ising.StartEvoGen) |This specifies the initial and target Hamiltonians as separate `EvolutionGenerator` types.
|[TwoSiteGeneratorIndex](xref:Microsoft.Quantum.Samples.Ising.TwoSiteGeneratorIndex) |Returns a generator index that is supported on two sites.
|[TwoSiteGeneratorSystem](xref:Microsoft.Quantum.Samples.Ising.TwoSiteGeneratorSystem) |Returns a generator system for a sum of generator indices each supported on two neighboring sites.
|[Uniform1DIsingGeneratorIndex](xref:Microsoft.Quantum.Samples.Ising.Uniform1DIsingGeneratorIndex) |Returns a generator index for a term in the Ising model with uniform couplings.
|[Uniform1DJCoupling](xref:Microsoft.Quantum.Samples.Ising.Uniform1DJCoupling) |A function that outputs uniform two-site coupling coefficients `Jₖ` with open boundary conditions.
|[UniformHCoupling](xref:Microsoft.Quantum.Samples.Ising.UniformHCoupling) |A function that outputs uniform single-site coupling coefficients `hₖ`.

<!-- /summaries -->
