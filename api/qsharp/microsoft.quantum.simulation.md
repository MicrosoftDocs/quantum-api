---
uid: Microsoft.Quantum.Simulation
title: Microsoft.Quantum.Simulation namespace
ms.date: 1/20/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Simulation
qsharp.summary: >-
  This namespace contains functions and operations for coherently simulating
  the dynamics of quantum systems.
---

# Microsoft.Quantum.Simulation namespace

This namespace contains functions and operations for coherently simulating
the dynamics of quantum systems.


<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[AdiabaticStateEnergyUnitary](xref:Microsoft.Quantum.Simulation.AdiabaticStateEnergyUnitary) |Performs state preparation by applying a `statePrepUnitary` on the input state, followed by adiabatic state preparation using a `adiabaticUnitary`, and finally phase estimation with respect to `qpeUnitary`on the resulting state using a `phaseEstAlgorithm`. |
|[EstimateEnergy](xref:Microsoft.Quantum.Simulation.EstimateEnergy) |Performs state preparation by applying a `statePrepUnitary` on an automatically allocated input state phase estimation with respect to `qpeUnitary`on the resulting state using a `phaseEstAlgorithm`. |
|[EstimateEnergyWithAdiabaticEvolution](xref:Microsoft.Quantum.Simulation.EstimateEnergyWithAdiabaticEvolution) |Performs state preparation by applying a `statePrepUnitary` on an automatically allocated input state, followed by adiabatic state preparation using a `adiabaticUnitary`, and finally phase estimation with respect to `qpeUnitary`on the resulting state using a `phaseEstAlgorithm`. |

## Functions

| Name | Summary |
|------|---------|
|[AddGeneratorSystems](xref:Microsoft.Quantum.Simulation.AddGeneratorSystems) |Adds two `GeneratorSystem`s to create a new `GeneratorSystem`. |
|[BlockEncodingByLCU](xref:Microsoft.Quantum.Simulation.BlockEncodingByLCU) |Encodes an operator of interest into a `BlockEncoding`. |
|[BlockEncodingReflectionByLCU](xref:Microsoft.Quantum.Simulation.BlockEncodingReflectionByLCU) |Encodes an operator of interest into a `BlockEncodingReflection`. |
|[BlockEncodingToReflection](xref:Microsoft.Quantum.Simulation.BlockEncodingToReflection) |Converts a `BlockEncoding` into an equivalent `BLockEncodingReflection`. |
|[GetGeneratorSystemFunction](xref:Microsoft.Quantum.Simulation.GetGeneratorSystemFunction) |Retrieves the `GeneratorIndex` function in a `GeneratorSystem`. |
|[GetGeneratorSystemNTerms](xref:Microsoft.Quantum.Simulation.GetGeneratorSystemNTerms) |Retrieves the number of terms in a `GeneratorSystem`. |
|[IdentityGeneratorIndex](xref:Microsoft.Quantum.Simulation.IdentityGeneratorIndex) |Returns a generator index consistent with the zero Hamiltonian, `H = 0`, which corresponds to the identity evolution operation. |
|[IdentityGeneratorSystem](xref:Microsoft.Quantum.Simulation.IdentityGeneratorSystem) |Returns a generator system consistent with the zero Hamiltonian `H = 0`, which corresponds to the identity evolution operation. |
|[IdentityTimeDependentGeneratorSystem](xref:Microsoft.Quantum.Simulation.IdentityTimeDependentGeneratorSystem) |Returns a time-dependent generator system consistent with the Hamiltonian `H(s) = 0`. |
|[IntToPauli](xref:Microsoft.Quantum.Simulation.IntToPauli) |Converts a integer to a single-qubit Pauli operator. |
|[InterpolateGeneratorSystems](xref:Microsoft.Quantum.Simulation.InterpolateGeneratorSystems) |Returns a `TimeDependentGeneratorSystem` representing the linear interpolation between two `GeneratorSystem`s. |
|[InterpolatedEvolution](xref:Microsoft.Quantum.Simulation.InterpolatedEvolution) |Interpolates between two generators with a uniform schedule, returning an operation that applies simulated evolution under the resulting time-dependent generator to a qubit register. |
|[IntsToPaulis](xref:Microsoft.Quantum.Simulation.IntsToPaulis) |Converts an array of integers to an array of single-qubit Pauli operators. |
|[MultiplyGeneratorIndex](xref:Microsoft.Quantum.Simulation.MultiplyGeneratorIndex) |Multiplies the coefficient in a `GeneratorIndex`. |
|[MultiplyGeneratorSystem](xref:Microsoft.Quantum.Simulation.MultiplyGeneratorSystem) |Multiplies the coefficient of all terms in a `GeneratorSystem`. |
|[PauliBlockEncoding](xref:Microsoft.Quantum.Simulation.PauliBlockEncoding) |Creates a block-encoding unitary for a Hamiltonian. |
|[PauliCoefficientFromGenIdx](xref:Microsoft.Quantum.Simulation.PauliCoefficientFromGenIdx) |Extracts the coefficient of a Pauli term described by a `GeneratorIndex`. |
|[PauliEvolutionFunction](xref:Microsoft.Quantum.Simulation.PauliEvolutionFunction) |Represents a dynamical generator as a set of simulatable gates and an expansion in the Pauli basis. |
|[PauliEvolutionSet](xref:Microsoft.Quantum.Simulation.PauliEvolutionSet) |Represents a dynamical generator as a set of simulatable gates and an expansion in the Pauli basis. |
|[PauliStringFromGenIdx](xref:Microsoft.Quantum.Simulation.PauliStringFromGenIdx) |Extracts the Pauli string and its qubit indices of a Pauli term described by a `GeneratorIndex`. |
|[QuantumWalkByQubitization](xref:Microsoft.Quantum.Simulation.QuantumWalkByQubitization) |Converts a block-encoding reflection into a quantum walk. |
|[SumGeneratorSystems](xref:Microsoft.Quantum.Simulation.SumGeneratorSystems) |Adds multiple `GeneratorSystem`s to create a new GeneratorSystem. |
|[TimeDependentTrotterSimulationAlgorithm](xref:Microsoft.Quantum.Simulation.TimeDependentTrotterSimulationAlgorithm) |`TimeDependentSimulationAlgorithm` function that uses a Trotter–Suzuki decomposition to approximate a unitary operator that solves the time-dependent Schrodinger equation. |
|[TrotterSimulationAlgorithm](xref:Microsoft.Quantum.Simulation.TrotterSimulationAlgorithm) |`SimulationAlgorithm` function that uses a Trotter–Suzuki decomposition to approximate the time-evolution operator _exp(-iHt)_. |
|[TrotterStep](xref:Microsoft.Quantum.Simulation.TrotterStep) |Implements a single time-step of time-evolution by the system described in an `EvolutionGenerator` using a Trotter–Suzuki decomposition. |

## User-defined types

| Name | Summary |
|------|---------|
|[BlockEncoding](xref:Microsoft.Quantum.Simulation.BlockEncoding) |Represents a unitary where an arbitrary operator of interest is encoded in the top-left block. |
|[BlockEncodingReflection](xref:Microsoft.Quantum.Simulation.BlockEncodingReflection) |Represents a `BlockEncoding` that is also a reflection. |
|[EvolutionGenerator](xref:Microsoft.Quantum.Simulation.EvolutionGenerator) |Represents a dynamical generator as a set of simulatable gates and an expansion in terms of that basis. |
|[EvolutionSchedule](xref:Microsoft.Quantum.Simulation.EvolutionSchedule) |Represents a time-dependent dynamical generator. |
|[EvolutionSet](xref:Microsoft.Quantum.Simulation.EvolutionSet) |Represents a set of gates that can be readily implemented and used to implement simulation algorithms. |
|[EvolutionUnitary](xref:Microsoft.Quantum.Simulation.EvolutionUnitary) |Represents a unitary time-evolution operator. |
|[GeneratorIndex](xref:Microsoft.Quantum.Simulation.GeneratorIndex) |Represents a single primitive term in the set of all dynamical generators, e.g. Hermitian operators, for which there exists a map from that generator to time-evolution by that generator, through `EvolutionSet`. |
|[GeneratorSystem](xref:Microsoft.Quantum.Simulation.GeneratorSystem) |Represents a collection of `GeneratorIndex`es. |
|[SimulationAlgorithm](xref:Microsoft.Quantum.Simulation.SimulationAlgorithm) |Represents a time-independent simulation algorithm. |
|[TimeDependentBlockEncoding](xref:Microsoft.Quantum.Simulation.TimeDependentBlockEncoding) |Represents a `BlockEncoding` that is controlled by a clock register. |
|[TimeDependentGeneratorSystem](xref:Microsoft.Quantum.Simulation.TimeDependentGeneratorSystem) |Represents a time-dependent dynamical generator as a function from time to the value of the dynamical generator at that time. |
|[TimeDependentSimulationAlgorithm](xref:Microsoft.Quantum.Simulation.TimeDependentSimulationAlgorithm) |Represents a time-dependent simulation algorithm. |
|[Unitary](xref:Microsoft.Quantum.Simulation.Unitary) |Represents evolution under a unitary operator. |
<!-- /summaries -->
