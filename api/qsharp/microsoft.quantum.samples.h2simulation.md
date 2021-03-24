---
uid: Microsoft.Quantum.Samples.H2Simulation
title: Microsoft.Quantum.Samples.H2Simulation namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Samples.H2Simulation
qsharp.summary: ''
---

# Microsoft.Quantum.Samples.H2Simulation namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[H2EstimateEnergy](xref:Microsoft.Quantum.Samples.H2Simulation.H2EstimateEnergy) |We can now use Canon's phase estimation algorithms to learn the ground state energy using the above simulation.
|[H2EstimateEnergyRPE](xref:Microsoft.Quantum.Samples.H2Simulation.H2EstimateEnergyRPE) |We finish by using the Robust Phase Estimation algorithm of Kimmel, Low and Yoder.
|[H2StatePrep](xref:Microsoft.Quantum.Samples.H2Simulation.H2StatePrep) |Prepares the an approximation to the H₂ ground state, assuming an initial state of |00〉.
|[H2TrotterStep](xref:Microsoft.Quantum.Samples.H2Simulation.H2TrotterStep) |We now provide Canon's Hamiltonian simulation functions with the above representation to automatically decompose the H₂ Hamiltonian into an appropriate operation that we can apply to qubits as we please.
|[H2TrotterUnitariesImpl](xref:Microsoft.Quantum.Samples.H2Simulation.H2TrotterUnitariesImpl) |Given the index of bond length, the index of a term in the corresponding Hamiltonian, and a step size, applies the given term to a register of qubits for that step size.
|[_H2TrotterUnitaries](xref:Microsoft.Quantum.Samples.H2Simulation._H2TrotterUnitaries) |Given the index of bond length, the index of a term in the corresponding Hamiltonian, and a step size, applies the given term to a register of qubits for that step size.

## Functions

| Name | Summary |
|------|---------|
|[H2BondLengths](xref:Microsoft.Quantum.Samples.H2Simulation.H2BondLengths) |
|[H2Coeff](xref:Microsoft.Quantum.Samples.H2Simulation.H2Coeff) |
|[H2EvolutionGenerator](xref:Microsoft.Quantum.Samples.H2Simulation.H2EvolutionGenerator) |We finish our description of the H₂ Hamiltonian for a given bond length by specifying that we wish to use the above description with the PauliEvolutionSet.
We could choose other evolution sets as well, allowing the canon to be very general with respect to how Hamiltonians are represented.
|[H2GeneratorIndex](xref:Microsoft.Quantum.Samples.H2Simulation.H2GeneratorIndex) |Represents a term in the H₂ Hamiltonian for a particular bond length using the GeneratorTerm type from Canon.
|[H2GeneratorSystem](xref:Microsoft.Quantum.Samples.H2Simulation.H2GeneratorSystem) |Represents the sum of all Hamiltonian terms for a given bond length using the GeneratorSystem type from Canon.
|[H2IdentityCoeff](xref:Microsoft.Quantum.Samples.H2Simulation.H2IdentityCoeff) |
|[H2Terms](xref:Microsoft.Quantum.Samples.H2Simulation.H2Terms) |Given an index, returns a description of the corresponding term in the Hamiltonian for H₂. Each term is described by a pair of integer arrays representing a sparse Pauli operator.
|[H2TrotterStepManual](xref:Microsoft.Quantum.Samples.H2Simulation.H2TrotterStepManual) |Uses the DecomposeIntoTimeSteps flow control library to express the above decomposition.
|[H2TrotterUnitaries](xref:Microsoft.Quantum.Samples.H2Simulation.H2TrotterUnitaries) |Given the index of a bond length, returns an operation that represents the decomposition of the corresponding Hamiltonian into unitary gates.

<!-- /summaries -->
