---
uid: Microsoft.Quantum.Simulation
title: Microsoft.Quantum.Simulation namespace
ms.date: 3/24/2021 12:00:00 AM
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
|[AdiabaticStateEnergyUnitary](xref:Microsoft.Quantum.Simulation.AdiabaticStateEnergyUnitary) |Performs state preparation by applying a `statePrepUnitary` on the input state, followed by adiabatic state preparation using a `adiabaticUnitary`, and finally phase estimation with respect to `qpeUnitary`on the resulting state using a `phaseEstAlgorithm`.
|[EstimateEnergy](xref:Microsoft.Quantum.Simulation.EstimateEnergy) |Performs state preparation by applying a `statePrepUnitary` on an automatically allocated input state phase estimation with respect to `qpeUnitary`on the resulting state using a `phaseEstAlgorithm`.
|[EstimateEnergyWithAdiabaticEvolution](xref:Microsoft.Quantum.Simulation.EstimateEnergyWithAdiabaticEvolution) |Performs state preparation by applying a `statePrepUnitary` on an automatically allocated input state, followed by adiabatic state preparation using a `adiabaticUnitary`, and finally phase estimation with respect to `qpeUnitary`on the resulting state using a `phaseEstAlgorithm`.
|[PauliEvolutionImpl](xref:Microsoft.Quantum.Simulation.PauliEvolutionImpl) |Represents a dynamical generator as a set of simulatable gates and an expansion in the Pauli basis.
See [Dynamical Generator Modeling](/quantum/libraries/data-structures#dynamical-generator-modeling) for more details.
|[TimeDependentTrotterSimulationAlgorithmImpl](xref:Microsoft.Quantum.Simulation.TimeDependentTrotterSimulationAlgorithmImpl) |Implementation of multiple Trotter steps to approximate a unitary operator that solves the time-dependent Schrödinger equation.
|[TrotterSimulationAlgorithmImpl](xref:Microsoft.Quantum.Simulation.TrotterSimulationAlgorithmImpl) |Makes repeated calls to `TrotterStep` to approximate the time-evolution operator exp(_-iHt_).
|[TrotterStepImpl](xref:Microsoft.Quantum.Simulation.TrotterStepImpl) |Implements time-evolution by a term contained in a `GeneratorSystem`.

## Functions

| Name | Summary |
|------|---------|
|[AddGeneratorSystems](xref:Microsoft.Quantum.Simulation.AddGeneratorSystems) |Adds two `GeneratorSystem`s to create a new `GeneratorSystem`.
|[BlockEncodingByLCU](xref:Microsoft.Quantum.Simulation.BlockEncodingByLCU) |Encodes an operator of interest into a `BlockEncoding`.
This constructs a `BlockEncoding` unitary $U=P\cdot V\cdot P^\dagger$ that encodes some operator $H=\sum_{j}|\alpha_j|U_j$ of interest that is a linear combination of unitaries. Typically, $P$ is a state preparation unitary such that $P\ket{0}\_a=\sum_j\sqrt{\alpha_j/\|\vec\alpha\|\_2}\ket{j}\_a$, and $V=\sum_{j}\ket{j}\bra{j}\_a\otimes U_j$.
|[BlockEncodingReflectionByLCU](xref:Microsoft.Quantum.Simulation.BlockEncodingReflectionByLCU) |Encodes an operator of interest into a `BlockEncodingReflection`.
This constructs a `BlockEncodingReflection` unitary $U=P\cdot V\cdot P^\dagger$ that encodes some operator $H=\sum_{j}|\alpha_j|U_j$ of interest that is a linear combination of unitaries. Typically, $P$ is a state preparation unitary such that $P\ket{0}\_a\sum_j\sqrt{\alpha_j/\|\vec\alpha\|\_2}\ket{j}\_a$, and $V=\sum_{j}\ket{j}\bra{j}\_a\otimes U_j$.
|[BlockEncodingToReflection](xref:Microsoft.Quantum.Simulation.BlockEncodingToReflection) |Converts a `BlockEncoding` into an equivalent `BLockEncodingReflection`.
That is, given a `BlockEncoding` unitary $U$ that encodes some operator $H$ of interest, converts it into a `BlockEncodingReflection` $U'$ that encodes the same operator, but also satisfies $U'^\dagger = U'$. This increases the size of the auxiliary register of $U$ by one qubit.
|[GetGeneratorSystemFunction](xref:Microsoft.Quantum.Simulation.GetGeneratorSystemFunction) |Retrieves the `GeneratorIndex` function in a `GeneratorSystem`.
|[GetGeneratorSystemNTerms](xref:Microsoft.Quantum.Simulation.GetGeneratorSystemNTerms) |Retrieves the number of terms in a `GeneratorSystem`.
|[IdentityGeneratorIndex](xref:Microsoft.Quantum.Simulation.IdentityGeneratorIndex) |Returns a generator index consistent with the zero Hamiltonian, `H = 0`, which corresponds to the identity evolution operation.
|[IdentityGeneratorSystem](xref:Microsoft.Quantum.Simulation.IdentityGeneratorSystem) |Returns a generator system consistent with the zero Hamiltonian `H = 0`, which corresponds to the identity evolution operation.
|[IdentityTimeDependentGeneratorSystem](xref:Microsoft.Quantum.Simulation.IdentityTimeDependentGeneratorSystem) |Returns a time-dependent generator system consistent with the Hamiltonian `H(s) = 0`.
|[IntToPauli](xref:Microsoft.Quantum.Simulation.IntToPauli) |Converts a integer to a single-qubit Pauli operator.
|[InterpolateGeneratorSystems](xref:Microsoft.Quantum.Simulation.InterpolateGeneratorSystems) |Returns a `TimeDependentGeneratorSystem` representing the linear interpolation between two `GeneratorSystem`s.
|[InterpolateGeneratorSystemsImpl](xref:Microsoft.Quantum.Simulation.InterpolateGeneratorSystemsImpl) |Linearly interpolates between two `GeneratorSystems` according to a schedule parameter `s` between 0 and 1 (inclusive).
|[InterpolatedEvolution](xref:Microsoft.Quantum.Simulation.InterpolatedEvolution) |Interpolates between two generators with a uniform schedule, returning an operation that applies simulated evolution under the resulting time-dependent generator to a qubit register.
|[IntsToPaulis](xref:Microsoft.Quantum.Simulation.IntsToPaulis) |Converts an array of integers to an array of single-qubit Pauli operators.
|[MultiplyGeneratorIndex](xref:Microsoft.Quantum.Simulation.MultiplyGeneratorIndex) |Multiplies the coefficient in a `GeneratorIndex`.
|[MultiplyGeneratorSystem](xref:Microsoft.Quantum.Simulation.MultiplyGeneratorSystem) |Multiplies the coefficient of all terms in a `GeneratorSystem`.
|[PauliBlockEncoding](xref:Microsoft.Quantum.Simulation.PauliBlockEncoding) |Creates a block-encoding unitary for a Hamiltonian.
The Hamiltonian $H=\sum_{j}\alpha_j P_j$ is described by a sum of Pauli terms $P_j$, each with real coefficient $\alpha_j$.
|[PauliCoefficientFromGenIdx](xref:Microsoft.Quantum.Simulation.PauliCoefficientFromGenIdx) |Extracts the coefficient of a Pauli term described by a `GeneratorIndex`.
|[PauliEvolutionFunction](xref:Microsoft.Quantum.Simulation.PauliEvolutionFunction) |Represents a dynamical generator as a set of simulatable gates and an expansion in the Pauli basis.
|[PauliEvolutionSet](xref:Microsoft.Quantum.Simulation.PauliEvolutionSet) |Represents a dynamical generator as a set of simulatable gates and an expansion in the Pauli basis.
|[PauliStringFromGenIdx](xref:Microsoft.Quantum.Simulation.PauliStringFromGenIdx) |Extracts the Pauli string and its qubit indices of a Pauli term described by a `GeneratorIndex`.
|[QuantumWalkByQubitization](xref:Microsoft.Quantum.Simulation.QuantumWalkByQubitization) |Converts a block-encoding reflection into a quantum walk.
|[SumGeneratorSystems](xref:Microsoft.Quantum.Simulation.SumGeneratorSystems) |Adds multiple `GeneratorSystem`s to create a new GeneratorSystem.
|[TimeDependentTrotterSimulationAlgorithm](xref:Microsoft.Quantum.Simulation.TimeDependentTrotterSimulationAlgorithm) |`TimeDependentSimulationAlgorithm` function that uses a Trotter–Suzuki decomposition to approximate a unitary operator that solves the time-dependent Schrodinger equation.
|[TrotterSimulationAlgorithm](xref:Microsoft.Quantum.Simulation.TrotterSimulationAlgorithm) |`SimulationAlgorithm` function that uses a Trotter–Suzuki decomposition to approximate the time-evolution operator _exp(-iHt)_.
|[TrotterStep](xref:Microsoft.Quantum.Simulation.TrotterStep) |Implements a single time-step of time-evolution by the system described in an `EvolutionGenerator` using a Trotter–Suzuki decomposition.
|[_AddGeneratorSystems](xref:Microsoft.Quantum.Simulation._AddGeneratorSystems) |Adds two `GeneratorSystem`s to create a new `GeneratorSystem`.
|[_IdentityTimeDependentGeneratorSystem](xref:Microsoft.Quantum.Simulation._IdentityTimeDependentGeneratorSystem) |Returns a generator system consistent with the Hamiltonian `H(s) = 0`, where `s` is a schedule parameter.
|[_MultiplyGeneratorSystem](xref:Microsoft.Quantum.Simulation._MultiplyGeneratorSystem) |Multiplies the coefficient of all terms in a `GeneratorSystem`.
|[_PauliBlockEncoding](xref:Microsoft.Quantum.Simulation._PauliBlockEncoding) |Creates a block-encoding unitary for a Hamiltonian.
The Hamiltonian $H=\sum_{j}\alpha_j P_j$ is described by a sum of Pauli terms $P_j$, each with real coefficient $\alpha_j$.

## User-defined types

| Name | Summary |
|------|---------|
|[BlockEncoding](xref:Microsoft.Quantum.Simulation.BlockEncoding) |Represents a unitary where an arbitrary operator of interest is encoded in the top-left block.
That is, a `BlockEncoding` is a unitary $U$ where an arbitrary operator $H$ of interest that acts on the system register `s` is encoded in the top- left block corresponding to auxiliary state $\ket{0}_a$. That is,
$$ \begin{align} (\bra{0}_a\otimes I_s)U(\ket{0}_a\otimes I_s) = H \end{align} $$.
|[BlockEncodingReflection](xref:Microsoft.Quantum.Simulation.BlockEncodingReflection) |Represents a `BlockEncoding` that is also a reflection.
|[EvolutionGenerator](xref:Microsoft.Quantum.Simulation.EvolutionGenerator) |Represents a dynamical generator as a set of simulatable gates and an expansion in terms of that basis.
Last parameter for number of terms.
|[EvolutionSchedule](xref:Microsoft.Quantum.Simulation.EvolutionSchedule) |Represents a time-dependent dynamical generator.
The `Double` parameter is a schedule in $[0, 1]$.
|[EvolutionSet](xref:Microsoft.Quantum.Simulation.EvolutionSet) |Represents a set of gates that can be readily implemented and used to implement simulation algorithms.
Elements in the set are indexed by a  <xref:microsoft.quantum.simulation.generatorindex>, and each set is described by a function from `GeneratorIndex` to  <xref:microsoft.quantum.simulation.evolutionunitary>, which are operations parameterized by a real number representing time
|[EvolutionUnitary](xref:Microsoft.Quantum.Simulation.EvolutionUnitary) |Represents a unitary time-evolution operator.
The first parameter is is duration of time-evolution, and the second parameter is the qubit register acted upon by the unitary.
|[GeneratorIndex](xref:Microsoft.Quantum.Simulation.GeneratorIndex) |Represents a single primitive term in the set of all dynamical generators, e.g. Hermitian operators, for which there exists a map from that generator to time-evolution by that generator, through `EvolutionSet`.
The first element (Int[], Double[]) is indexes that single term -- For instance, the Pauli string XXY with coefficient 0.5 would be indexed by ([1,1,2], [0.5]). Alternatively, Hamiltonians parameterized by a continuous variable, such as X cos φ + Y sin φ, might for instance be represented by ([], [φ]). The second element indexes the subsystem on which the generator acts on.
|[GeneratorSystem](xref:Microsoft.Quantum.Simulation.GeneratorSystem) |Represents a collection of `GeneratorIndex`es.
We iterate over this collection using a single-index integer, and the size of the collection is assumed to be known.
|[SimulationAlgorithm](xref:Microsoft.Quantum.Simulation.SimulationAlgorithm) |Represents a time-independent simulation algorithm.
A time-independent simulation technique converts an <xref:microsoft.quantum.simulation.evolutiongenerator> to unitary time evolution for some time-interval.
|[TimeDependentBlockEncoding](xref:Microsoft.Quantum.Simulation.TimeDependentBlockEncoding) |Represents a `BlockEncoding` that is controlled by a clock register.
That is, a `TimeDependentBlockEncoding` is a unitary $U$ controlled by a state $\ket{k}_d$ in clock register `d` such that an arbitrary operator $H_k$ of interest that acts on the system register `s` is encoded in the top- left block corresponding to auxiliary state $\ket{0}_a$. That is,
$$ \begin{align} (\bra{0}\_a\otimes I_{ds})U(\ket{0}\_a\otimes I_{ds}) = \sum_{k}\ket{k}\bra{k}\_d\otimes H_k. \end{align} $$.
|[TimeDependentGeneratorSystem](xref:Microsoft.Quantum.Simulation.TimeDependentGeneratorSystem) |Represents a time-dependent dynamical generator as a function from time to the value of the dynamical generator at that time.
|[TimeDependentSimulationAlgorithm](xref:Microsoft.Quantum.Simulation.TimeDependentSimulationAlgorithm) |Represents a time-dependent simulation algorithm.
A time-dependent simulation technique converts an <xref:microsoft.quantum.simulation.evolutionschedule> to unitary time-evolution for some time-interval.
|[Unitary](xref:Microsoft.Quantum.Simulation.Unitary) |Represents evolution under a unitary operator.
<!-- /summaries -->
