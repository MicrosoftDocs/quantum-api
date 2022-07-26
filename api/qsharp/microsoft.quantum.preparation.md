---
uid: Microsoft.Quantum.Preparation
title: Microsoft.Quantum.Preparation namespace
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Preparation
qsharp.summary: >-
  This namespace contains functions and operations for preparing qubits into
  arbitrary initial states.
---

# Microsoft.Quantum.Preparation namespace

This namespace contains functions and operations for preparing qubits into
arbitrary initial states.


<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[ApproximatelyPrepareArbitraryState](xref:Microsoft.Quantum.Preparation.ApproximatelyPrepareArbitraryState) |> [!WARNING] |
|[ApproximatelyPrepareArbitraryStateCP](xref:Microsoft.Quantum.Preparation.ApproximatelyPrepareArbitraryStateCP) |Given a set of coefficients and a little-endian encoded quantum register, prepares an state on that register described by the given coefficients, up to a given approximation tolerance. |
|[ApproximatelyPrepareArbitraryStateD](xref:Microsoft.Quantum.Preparation.ApproximatelyPrepareArbitraryStateD) |Given a set of coefficients and a little-endian encoded quantum register, prepares an state on that register described by the given coefficients, up to a given approximation tolerance. |
|[PrepareArbitraryState](xref:Microsoft.Quantum.Preparation.PrepareArbitraryState) |> [!WARNING] |
|[PrepareArbitraryStateCP](xref:Microsoft.Quantum.Preparation.PrepareArbitraryStateCP) |Given a set of coefficients and a little-endian encoded quantum register, prepares an state on that register described by the given coefficients. |
|[PrepareArbitraryStateD](xref:Microsoft.Quantum.Preparation.PrepareArbitraryStateD) |Given a set of coefficients and a little-endian encoded quantum register, prepares an state on that register described by the given coefficients. |
|[PrepareChoiState](xref:Microsoft.Quantum.Preparation.PrepareChoiState) |Prepares the Choi–Jamiołkowski state for a given operation onto given reference and target registers. |
|[PrepareChoiStateA](xref:Microsoft.Quantum.Preparation.PrepareChoiStateA) |Prepares the Choi–Jamiołkowski state for a given operation with an adjoint variant onto given reference and target registers. |
|[PrepareChoiStateC](xref:Microsoft.Quantum.Preparation.PrepareChoiStateC) |Prepares the Choi–Jamiołkowski state for a given operation with a controlled variant onto given reference and target registers. |
|[PrepareChoiStateCA](xref:Microsoft.Quantum.Preparation.PrepareChoiStateCA) |Prepares the Choi–Jamiołkowski state for a given operation with both controlled and adjoint variants onto given reference and target registers. |
|[PrepareEntangledState](xref:Microsoft.Quantum.Preparation.PrepareEntangledState) |Pairwise entangles two qubit registers. |
|[PrepareIdentity](xref:Microsoft.Quantum.Preparation.PrepareIdentity) |Given a register, prepares that register in the maximally mixed state. |
|[PreparePauliEigenstate](xref:Microsoft.Quantum.Preparation.PreparePauliEigenstate) |Prepares a qubit in the positive eigenstate of a given Pauli operator. If the identity operator is given, then the qubit is prepared in the maximally mixed state. |
|[PrepareQubit](xref:Microsoft.Quantum.Preparation.PrepareQubit) |> [!WARNING] |
|[PrepareSingleQubitIdentity](xref:Microsoft.Quantum.Preparation.PrepareSingleQubitIdentity) |Prepares a qubit in the maximally mixed state. |
|[PrepareUniformSuperposition](xref:Microsoft.Quantum.Preparation.PrepareUniformSuperposition) |Creates a uniform superposition over states that encode 0 through `nIndices - 1`. |
|[_PrepareAmplitudesFromZeroState](xref:Microsoft.Quantum.Preparation._PrepareAmplitudesFromZeroState) |Given a set of coefficients and a little-endian encoded quantum register of unentangled qubits, all of which are in zero state, prepares a state on that register described by the given coefficients. Uses state emulation if supported by the target. |

## Functions

| Name | Summary |
|------|---------|
|[BlochSphereCoordinates](xref:Microsoft.Quantum.Preparation.BlochSphereCoordinates) |Computes the Bloch sphere coordinates for a single-qubit state. |
|[PurifiedMixedState](xref:Microsoft.Quantum.Preparation.PurifiedMixedState) |Returns an operation that prepares a a purification of a given mixed state. |
|[PurifiedMixedStateRequirements](xref:Microsoft.Quantum.Preparation.PurifiedMixedStateRequirements) |Returns the total number of qubits that must be allocated in order to apply the operation returned by @"Microsoft.Quantum.Preparation.PurifiedMixedState". |
|[PurifiedMixedStateWithData](xref:Microsoft.Quantum.Preparation.PurifiedMixedStateWithData) |Returns an operation that prepares a a purification of a given mixed |
|[QuantumROM](xref:Microsoft.Quantum.Preparation.QuantumROM) |> [!WARNING] |
|[QuantumROMQubitCount](xref:Microsoft.Quantum.Preparation.QuantumROMQubitCount) |> [!WARNING] |
|[StatePreparationComplexCoefficients](xref:Microsoft.Quantum.Preparation.StatePreparationComplexCoefficients) |> [!WARNING] |
|[StatePreparationPositiveCoefficients](xref:Microsoft.Quantum.Preparation.StatePreparationPositiveCoefficients) |> [!WARNING] |
|[_CompileApproximateArbitraryStatePreparation](xref:Microsoft.Quantum.Preparation._CompileApproximateArbitraryStatePreparation) | |
|[_QuantumROMDiscretization](xref:Microsoft.Quantum.Preparation._QuantumROMDiscretization) | |

## User-defined types

| Name | Summary |
|------|---------|
|[MixedStatePreparation](xref:Microsoft.Quantum.Preparation.MixedStatePreparation) |Represents a particular mixed state that can be prepared on an index and a garbage register. |
|[MixedStatePreparationRequirements](xref:Microsoft.Quantum.Preparation.MixedStatePreparationRequirements) |Represents the number of qubits required in order to prepare a given mixed state. |
<!-- /summaries -->
