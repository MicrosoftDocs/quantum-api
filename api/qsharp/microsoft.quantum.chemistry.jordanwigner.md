---
uid: Microsoft.Quantum.Chemistry.JordanWigner
title: Microsoft.Quantum.Chemistry.JordanWigner namespace
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Chemistry.JordanWigner
qsharp.summary: ''
---

# Microsoft.Quantum.Chemistry.JordanWigner namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[JordanWignerFermionImpl](xref:Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerFermionImpl) |Represents a dynamical generator as a set of simulatable gates and an expansion in the JordanWigner basis. |
|[OptimizedBEXY](xref:Microsoft.Quantum.Chemistry.JordanWigner.OptimizedBEXY) |Applies a sequence of Z operations and either an X or Y operation to a register of qubits, where the selection of target qubits and basis are conditioned on the state of a control register. |
|[PrepareSingleConfigurationalStateSingleSiteOccupation](xref:Microsoft.Quantum.Chemistry.JordanWigner.PrepareSingleConfigurationalStateSingleSiteOccupation) |Simple state preparation of trial state by occupying spin-orbitals |
|[PrepareSparseMultiConfigurationalState](xref:Microsoft.Quantum.Chemistry.JordanWigner.PrepareSparseMultiConfigurationalState) |Sparse multi-configurational state preparation of trial state by adding excitations to initial trial state. |
|[PrepareTrialState](xref:Microsoft.Quantum.Chemistry.JordanWigner.PrepareTrialState) | |
|[PrepareUnitaryCoupledClusterState](xref:Microsoft.Quantum.Chemistry.JordanWigner.PrepareUnitaryCoupledClusterState) |Unitary coupled-cluster state preparation of trial state |
|[SelectZ](xref:Microsoft.Quantum.Chemistry.JordanWigner.SelectZ) |Applies a Z operation to a qubit indicated by the state of another register. |
|[_ApplyJordanWignerPQTerm_](xref:Microsoft.Quantum.Chemistry.JordanWigner._ApplyJordanWignerPQTerm_) |Applies time-evolution by a PQ term described by a `GeneratorIndex`. |
|[_ApplyJordanWignerPQandPQQRTerm_](xref:Microsoft.Quantum.Chemistry.JordanWigner._ApplyJordanWignerPQandPQQRTerm_) |Applies time-evolution by a PQ or PQQR term described by a `GeneratorIndex`. |
|[_ApplyJordanWignerZTerm_](xref:Microsoft.Quantum.Chemistry.JordanWigner._ApplyJordanWignerZTerm_) |Applies time-evolution by a Z term described by a `GeneratorIndex`. |
|[_ApplyJordanWignerZZTerm_](xref:Microsoft.Quantum.Chemistry.JordanWigner._ApplyJordanWignerZZTerm_) |Applies time-evolution by a ZZ term described by a `GeneratorIndex`. |

## Functions

| Name | Summary |
|------|---------|
|[JordanWignerBlockEncodingGeneratorSystem](xref:Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerBlockEncodingGeneratorSystem) |Converts a Hamiltonian described by `JWOptimizedHTerms` to a `GeneratorSystem` expressed in terms of the Pauli `GeneratorIndex`. |
|[JordanWignerClusterOperatorEvolutionSet](xref:Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerClusterOperatorEvolutionSet) |Represents a dynamical generator as a set of simulatable gates and an expansion in the JordanWigner basis. |
|[JordanWignerClusterOperatorGeneratorSystem](xref:Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerClusterOperatorGeneratorSystem) |Converts a Hamiltonian described by `JWOptimizedHTerms` to a `GeneratorSystem` expressed in terms of the `GeneratorIndex` convention defined in this file. |
|[JordanWignerFermionEvolutionSet](xref:Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerFermionEvolutionSet) |Represents a dynamical generator as a set of simulatable gates and an expansion in the JordanWigner basis. |
|[JordanWignerFermionFunction](xref:Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerFermionFunction) |Represents a dynamical generator as a set of simulatable gates and an expansion in the JordanWigner basis. |
|[JordanWignerGeneratorSystem](xref:Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerGeneratorSystem) |Converts a Hamiltonian described by `JWOptimizedHTerms` to a `GeneratorSystem` expressed in terms of the `GeneratorIndex` convention defined in this file. |
|[OptimizedBlockEncodingGeneratorSystem](xref:Microsoft.Quantum.Chemistry.JordanWigner.OptimizedBlockEncodingGeneratorSystem) |Converts a Hamiltonian described by `JWOptimizedHTerms` to a `GeneratorSystem` expressed in terms of the Pauli `GeneratorIndex`. |
|[OptimizedQubitizationOracle](xref:Microsoft.Quantum.Chemistry.JordanWigner.OptimizedQubitizationOracle) |Returns T-count optimized Qubitization operation and the parameters necessary to run it. |
|[QubitizationOracle](xref:Microsoft.Quantum.Chemistry.JordanWigner.QubitizationOracle) |Returns Qubitization operation and the parameters necessary to run it. |
|[TrotterStepOracle](xref:Microsoft.Quantum.Chemistry.JordanWigner.TrotterStepOracle) |Returns Trotter step operation and the parameters necessary to run it. |
|[_ComputeJordanWignerBitString](xref:Microsoft.Quantum.Chemistry.JordanWigner._ComputeJordanWignerBitString) |Computes Z component of Jordan–Wigner string between fermion indices in a fermionic operator with an even number of creation / annihilation operators. |
|[_ComputeJordanWignerPauliString](xref:Microsoft.Quantum.Chemistry.JordanWigner._ComputeJordanWignerPauliString) | |
|[_ComputeJordanWignerPauliZString](xref:Microsoft.Quantum.Chemistry.JordanWigner._ComputeJordanWignerPauliZString) | |
|[_JordanWignerClusterOperatorPQRSTermSigns](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerClusterOperatorPQRSTermSigns) | |
|[_JordanWignerOptimizedBlockEncoding_](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerOptimizedBlockEncoding_) | |
|[_V0123TermToPauliMajIdx_](xref:Microsoft.Quantum.Chemistry.JordanWigner._V0123TermToPauliMajIdx_) |Converts a GeneratorIndex describing a PQRS term to an expression 'GeneratorIndex[]' in terms of Paulis |

## User-defined types

| Name | Summary |
|------|---------|
|[JWOptimizedHTerms](xref:Microsoft.Quantum.Chemistry.JordanWigner.JWOptimizedHTerms) |Format of data passed from C# to Q# to represent terms of the Hamiltonian. The meaning of the data represented is determined by the algorithm that receives it. |
|[JordanWignerEncodingData](xref:Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerEncodingData) |Format of data passed from C# to Q# to represent all information for Hamiltonian simulation. The meaning of the data represented is determined by the algorithm that receives it. |
|[JordanWignerInputState](xref:Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerInputState) |Format of data passed from C# to Q# to represent preparation of the initial state The meaning of the data represented is determined by the algorithm that receives it. |
|[OptimizedBEGeneratorSystem](xref:Microsoft.Quantum.Chemistry.JordanWigner.OptimizedBEGeneratorSystem) |Function that returns `OptimizedBETermIndex` data for term `n` given an integer `n`, together with the number of terms in the first `Int` and the sum of absolute-values of all term coefficients in the `Double`. |
|[OptimizedBETermIndex](xref:Microsoft.Quantum.Chemistry.JordanWigner.OptimizedBETermIndex) |Term data in the optimized block-encoding algorithm. |
<!-- /summaries -->
