---
uid: Microsoft.Quantum.Research.Chemistry
title: Microsoft.Quantum.Research.Chemistry namespace
ms.date: 1/20/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Research.Chemistry
qsharp.summary: >-
  This namespace provides advanced research methods for quantum
  chemistry simulation.
---

# Microsoft.Quantum.Research.Chemistry namespace

This namespace provides advanced research methods for quantum
chemistry simulation.


<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[ApplyDeltaParity](xref:Microsoft.Quantum.Research.Chemistry.ApplyDeltaParity) |Computes difference in parity between a previous PQRS... terms and the next PQRS... term. This difference is computed on a auxiliary qubit. |
|[JWOptimizedStatePreparation](xref:Microsoft.Quantum.Research.Chemistry.JWOptimizedStatePreparation) |Simple state preparation of trial state by occupying spin-orbitals |
|[_ApplyOptimizedTrotterStep](xref:Microsoft.Quantum.Research.Chemistry._ApplyOptimizedTrotterStep) | |
|[_JWOptimizedFermionEvolution](xref:Microsoft.Quantum.Research.Chemistry._JWOptimizedFermionEvolution) |Represents a dynamical generator as a set of simulatable gates and an expansion in the JWOptimized basis. |

## Functions

| Name | Summary |
|------|---------|
|[JWOptimizedFermionEvolutionFunction](xref:Microsoft.Quantum.Research.Chemistry.JWOptimizedFermionEvolutionFunction) |Represents a dynamical generator as a set of simulatable gates and an expansion in the JWOptimized basis. |
|[JWOptimizedGeneratorSystem](xref:Microsoft.Quantum.Research.Chemistry.JWOptimizedGeneratorSystem) |Converts a Hamiltonian described by `JWOptimizedHTerms` to a `GeneratorSystem` expressed in terms of the `GeneratorIndex` convention defined in this file. |
|[JordanWignerOptimizedFermionEvolutionSet](xref:Microsoft.Quantum.Research.Chemistry.JordanWignerOptimizedFermionEvolutionSet) |Represents a dynamical generator as a set of simulatable gates and an expansion in the Pauli basis. |
|[OptimizedTrotterStepOracle](xref:Microsoft.Quantum.Research.Chemistry.OptimizedTrotterStepOracle) |Returns optimized Trotter step operation and the parameters necessary to run it. |
|[_DeltaParityCNOTbitstring](xref:Microsoft.Quantum.Research.Chemistry._DeltaParityCNOTbitstring) |Classical processing step of `ApplyDeltaParity`. This computes a list of control qubits for evaluating parity difference between any two PQRS... terms of even length. |

<!-- /summaries -->
