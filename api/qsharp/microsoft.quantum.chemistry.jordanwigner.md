---
uid: Microsoft.Quantum.Chemistry.JordanWigner
title: Microsoft.Quantum.Chemistry.JordanWigner namespace
ms.date: 5/21/2021 12:00:00 AM
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
|[OptimizedBEXY](xref:Microsoft.Quantum.Chemistry.JordanWigner.OptimizedBEXY) |A unitary $U$ that applies the Pauli string on $(X^{z+1}\_pY^{z}\_p)Z\_{p-1}...Z_0$ on qubits $0..p$ conditioned on an index $z\in\{0,1\}$ and $p$. That is, $$ \begin{align} U\ket{z}\ket{p}\ket{\psi} = \ket{z}\ket{p}(X^{z+1}\_pY^{z}\_p)Z\_{p-1}...Z_0\ket{\psi} \end{align} $$ |
|[PrepareSingleConfigurationalStateSingleSiteOccupation](xref:Microsoft.Quantum.Chemistry.JordanWigner.PrepareSingleConfigurationalStateSingleSiteOccupation) |Simple state preparation of trial state by occupying spin-orbitals |
|[PrepareSparseMultiConfigurationalState](xref:Microsoft.Quantum.Chemistry.JordanWigner.PrepareSparseMultiConfigurationalState) |Sparse multi-configurational state preparation of trial state by adding excitations to initial trial state. |
|[PrepareTrialState](xref:Microsoft.Quantum.Chemistry.JordanWigner.PrepareTrialState) | |
|[PrepareUnitaryCoupledClusterState](xref:Microsoft.Quantum.Chemistry.JordanWigner.PrepareUnitaryCoupledClusterState) |Unitary coupled-cluster state preparation of trial state |
|[SelectZ](xref:Microsoft.Quantum.Chemistry.JordanWigner.SelectZ) |A unitary $U$ that applies the Pauli $Z$ gate on a qubits $p$ conditioned on an index state $\ket{p}$. That is, $$ \begin{align} U\ket{p}\ket{\psi} = \ket{p}Z\_p\ket{\psi} \end{align} $$ |
|[_ApplyJordanWigner0123Term_](xref:Microsoft.Quantum.Chemistry.JordanWigner._ApplyJordanWigner0123Term_) |Applies time-evolution by a PQRS term described by a `GeneratorIndex`. |
|[_ApplyJordanWignerClusterOperatorPQRSTerm](xref:Microsoft.Quantum.Chemistry.JordanWigner._ApplyJordanWignerClusterOperatorPQRSTerm) |Applies time-evolution by a cluster operator PQRS term described by a `GeneratorIndex`. |
|[_ApplyJordanWignerClusterOperatorPQTerm](xref:Microsoft.Quantum.Chemistry.JordanWigner._ApplyJordanWignerClusterOperatorPQTerm) |Applies time-evolution by a cluster operator PQ term described by a `GeneratorIndex`. |
|[_ApplyJordanWignerPQTerm_](xref:Microsoft.Quantum.Chemistry.JordanWigner._ApplyJordanWignerPQTerm_) |Applies time-evolution by a PQ term described by a `GeneratorIndex`. |
|[_ApplyJordanWignerPQandPQQRTerm_](xref:Microsoft.Quantum.Chemistry.JordanWigner._ApplyJordanWignerPQandPQQRTerm_) |Applies time-evolution by a PQ or PQQR term described by a `GeneratorIndex`. |
|[_ApplyJordanWignerZTerm_](xref:Microsoft.Quantum.Chemistry.JordanWigner._ApplyJordanWignerZTerm_) |Applies time-evolution by a Z term described by a `GeneratorIndex`. |
|[_ApplyJordanWignerZZTerm_](xref:Microsoft.Quantum.Chemistry.JordanWigner._ApplyJordanWignerZZTerm_) |Applies time-evolution by a ZZ term described by a `GeneratorIndex`. |
|[_JordanWignerClusterOperatorImpl](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerClusterOperatorImpl) |Represents a dynamical generator as a set of simulatable gates and an expansion in the JordanWigner basis. |
|[_JordanWignerOptimizedBlockEncodingSelect_](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerOptimizedBlockEncodingSelect_) | |
|[_JordanWignerOptimizedBlockEncodingStatePrep](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerOptimizedBlockEncodingStatePrep) | |
|[_JordanWignerOptimizedBlockEncodingStatePrep_](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerOptimizedBlockEncodingStatePrep_) | |
|[_JordanWignerSelect_](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerSelect_) | |
|[_MergeTwoRegisters_](xref:Microsoft.Quantum.Chemistry.JordanWigner._MergeTwoRegisters_) | |
|[_OptimizedBEXY](xref:Microsoft.Quantum.Chemistry.JordanWigner._OptimizedBEXY) | |
|[_SelectZ](xref:Microsoft.Quantum.Chemistry.JordanWigner._SelectZ) | |
|[_ToJordanWignerSelectInput](xref:Microsoft.Quantum.Chemistry.JordanWigner._ToJordanWignerSelectInput) | |
|[_ToPauliBases](xref:Microsoft.Quantum.Chemistry.JordanWigner._ToPauliBases) | |

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
|[_GetOptimizedBETermIndexCoeff_](xref:Microsoft.Quantum.Chemistry.JordanWigner._GetOptimizedBETermIndexCoeff_) | |
|[_JordanWignerClusterOperatorFunction](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerClusterOperatorFunction) |Represents a dynamical generator as a set of simulatable gates and an expansion in the JordanWigner basis. |
|[_JordanWignerClusterOperatorGeneratorIndex](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerClusterOperatorGeneratorIndex) | |
|[_JordanWignerClusterOperatorGeneratorSystemImpl](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerClusterOperatorGeneratorSystemImpl) | |
|[_JordanWignerClusterOperatorPQRSTermSigns](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerClusterOperatorPQRSTermSigns) | |
|[_JordanWignerOptimizedBlockEncodingQubitCount_](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerOptimizedBlockEncodingQubitCount_) | |
|[_JordanWignerOptimizedBlockEncodingQubitManager_](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerOptimizedBlockEncodingQubitManager_) | |
|[_JordanWignerOptimizedBlockEncoding_](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerOptimizedBlockEncoding_) | |
|[_JordanWignerOptimizedQuantumWalkByQubitization_](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerOptimizedQuantumWalkByQubitization_) | |
|[_JordanWignerSelectQubitCount_](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerSelectQubitCount_) | |
|[_JordanWignerSelectQubitManager_](xref:Microsoft.Quantum.Chemistry.JordanWigner._JordanWignerSelectQubitManager_) | |
|[_OptimizedBEGeneratorSystemCoeff_](xref:Microsoft.Quantum.Chemistry.JordanWigner._OptimizedBEGeneratorSystemCoeff_) | |
|[_OptimizedBEXY_](xref:Microsoft.Quantum.Chemistry.JordanWigner._OptimizedBEXY_) | |
|[_OptimizedQubitizationOracleSeperatedRegisters_](xref:Microsoft.Quantum.Chemistry.JordanWigner._OptimizedQubitizationOracleSeperatedRegisters_) | |
|[_PQTermToPauliGenIdx_](xref:Microsoft.Quantum.Chemistry.JordanWigner._PQTermToPauliGenIdx_) |Converts a GeneratorIndex describing a PQ term to an expression 'GeneratorIndex[]' in terms of Paulis |
|[_PQTermToPauliMajIdx_](xref:Microsoft.Quantum.Chemistry.JordanWigner._PQTermToPauliMajIdx_) |Converts a GeneratorIndex describing a PQ term to an expression 'GeneratorIndex[]' in terms of Paulis |
|[_PQandPQQRTermToPauliGenIdx_](xref:Microsoft.Quantum.Chemistry.JordanWigner._PQandPQQRTermToPauliGenIdx_) |Converts a GeneratorIndex describing a PQ or PQQR term to an expression 'GeneratorIndex[]' in terms of Paulis |
|[_PQandPQQRTermToPauliMajIdx_](xref:Microsoft.Quantum.Chemistry.JordanWigner._PQandPQQRTermToPauliMajIdx_) |Converts a GeneratorIndex describing a PQ or PQQR term to an expression 'GeneratorIndex[]' in terms of Paulis |
|[_PrepareSingleConfigurationalStateSingleSiteOccupation](xref:Microsoft.Quantum.Chemistry.JordanWigner._PrepareSingleConfigurationalStateSingleSiteOccupation) | |
|[_QubitizationOracleSeperatedRegisters](xref:Microsoft.Quantum.Chemistry.JordanWigner._QubitizationOracleSeperatedRegisters) | |
|[_SelectZ_](xref:Microsoft.Quantum.Chemistry.JordanWigner._SelectZ_) | |
|[_ToJordanWignerSelectInput_](xref:Microsoft.Quantum.Chemistry.JordanWigner._ToJordanWignerSelectInput_) | |
|[_ToPauliBases_](xref:Microsoft.Quantum.Chemistry.JordanWigner._ToPauliBases_) | |
|[_V0123TermToPauliGenIdx_](xref:Microsoft.Quantum.Chemistry.JordanWigner._V0123TermToPauliGenIdx_) |Converts a GeneratorIndex describing a PQRS term to an expression 'GeneratorIndex[]' in terms of Paulis |
|[_V0123TermToPauliMajIdx_](xref:Microsoft.Quantum.Chemistry.JordanWigner._V0123TermToPauliMajIdx_) |Converts a GeneratorIndex describing a PQRS term to an expression 'GeneratorIndex[]' in terms of Paulis |
|[_ZTermToPauliGenIdx](xref:Microsoft.Quantum.Chemistry.JordanWigner._ZTermToPauliGenIdx) |Converts a GeneratorIndex describing a Z term to an expression 'GeneratorIndex[]' in terms of Paulis. |
|[_ZTermToPauliMajIdx_](xref:Microsoft.Quantum.Chemistry.JordanWigner._ZTermToPauliMajIdx_) |Converts a GeneratorIndex describing a Z term to an expression 'GeneratorIndex[]' in terms of Paulis. |
|[_ZZTermToPauliGenIdx](xref:Microsoft.Quantum.Chemistry.JordanWigner._ZZTermToPauliGenIdx) |Converts a GeneratorIndex describing a ZZ term to an expression 'GeneratorIndex[]' in terms of Paulis. |
|[_ZZTermToPauliMajIdx_](xref:Microsoft.Quantum.Chemistry.JordanWigner._ZZTermToPauliMajIdx_) |Converts a GeneratorIndex describing a ZZ term to an expression 'GeneratorIndex[]' in terms of Paulis. |

## User-defined types

| Name | Summary |
|------|---------|
|[JWOptimizedHTerms](xref:Microsoft.Quantum.Chemistry.JordanWigner.JWOptimizedHTerms) |Format of data passed from C# to Q# to represent terms of the Hamiltonian. The meaning of the data represented is determined by the algorithm that receives it. |
|[JordanWignerEncodingData](xref:Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerEncodingData) |Format of data passed from C# to Q# to represent all information for Hamiltonian simulation. The meaning of the data represented is determined by the algorithm that receives it. |
|[JordanWignerInputState](xref:Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerInputState) |Format of data passed from C# to Q# to represent preparation of the initial state The meaning of the data represented is determined by the algorithm that receives it. |
|[OptimizedBEGeneratorSystem](xref:Microsoft.Quantum.Chemistry.JordanWigner.OptimizedBEGeneratorSystem) |Function that returns `OptimizedBETermIndex` data for term `n` given an integer `n`, together with the number of terms in the first `Int` and the sum of absolute-values of all term coefficients in the `Double`. |
|[OptimizedBETermIndex](xref:Microsoft.Quantum.Chemistry.JordanWigner.OptimizedBETermIndex) |Term data in the optimized block-encoding algorithm. |
<!-- /summaries -->
