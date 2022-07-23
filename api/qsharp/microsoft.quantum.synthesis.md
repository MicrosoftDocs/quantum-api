---
uid: Microsoft.Quantum.Synthesis
title: Microsoft.Quantum.Synthesis namespace
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Synthesis
qsharp.summary: >-
  This namespace contains functions and operations for
  synthesizing quantum operations based on permutations
  and Boolean functions.
---

# Microsoft.Quantum.Synthesis namespace

This namespace contains functions and operations for
synthesizing quantum operations based on permutations
and Boolean functions.


<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[Apply1C](xref:Microsoft.Quantum.Synthesis.Apply1C) |Given a single-qubit Clifford operator, applies the corresponding operation to a single qubit. |
|[ApplyPermutationUsingDecomposition](xref:Microsoft.Quantum.Synthesis.ApplyPermutationUsingDecomposition) |Permutes the amplitudes in a quantum state given a permutation using decomposition-based synthesis. |
|[ApplyPermutationUsingDecompositionWithVariableOrder](xref:Microsoft.Quantum.Synthesis.ApplyPermutationUsingDecompositionWithVariableOrder) |Permutes the amplitudes in a quantum state given a permutation using decomposition-based synthesis. |
|[ApplyPermutationUsingTransformation](xref:Microsoft.Quantum.Synthesis.ApplyPermutationUsingTransformation) |Permutes the amplitudes in a quantum state given a permutation using transformation-based synthesis. |
|[ApplyTransposition](xref:Microsoft.Quantum.Synthesis.ApplyTransposition) | |
|[ApplyUnitary](xref:Microsoft.Quantum.Synthesis.ApplyUnitary) |Applies gate defined by a 2ⁿ × 2ⁿ unitary matrix. |
|[ApplyXControlledOnTruthTable](xref:Microsoft.Quantum.Synthesis.ApplyXControlledOnTruthTable) |Applies the @"Microsoft.Quantum.Intrinsic.X" operation on `target`, if the Boolean function `func` evaluates to true for the classical assignment in `controlRegister`. |
|[ApplyXControlledOnTruthTableWithCleanTarget](xref:Microsoft.Quantum.Synthesis.ApplyXControlledOnTruthTableWithCleanTarget) |Applies the @"Microsoft.Quantum.Intrinsic.X" operation on `target`, if the Boolean function `func` evaluates to true for the classical assignment in `controlRegister`. |

## Functions

| Name | Summary |
|------|---------|
|[Action1C](xref:Microsoft.Quantum.Synthesis.Action1C) |Returns the action by conjugation of a single-qubit Clifford operator on a single-qubit Pauli operator. |
|[EqualityFact1C](xref:Microsoft.Quantum.Synthesis.EqualityFact1C) |Requires that a single-qubit Clifford operator has the expected value. |
|[Identity1C](xref:Microsoft.Quantum.Synthesis.Identity1C) |Returns a representation of the identity as a single-qubit Clifford operator. |
|[IdentityFact1C](xref:Microsoft.Quantum.Synthesis.IdentityFact1C) |Requires that a single-qubit Clifford operator is equal to the identity. |
|[Inverse1C](xref:Microsoft.Quantum.Synthesis.Inverse1C) |Returns the inverse of a single-qubit Clifford operators. |
|[PauliAsSingleQubitClifford](xref:Microsoft.Quantum.Synthesis.PauliAsSingleQubitClifford) |Returns a representation of a single-qubit Pauli operator as a single-qubit Clifford operator that acts by conjugation. |
|[SingleQubitCliffordAsOperation](xref:Microsoft.Quantum.Synthesis.SingleQubitCliffordAsOperation) |Returns a representation of a single-qubit Clifford operator as an operation acting on a single qubit. |
|[Times1C](xref:Microsoft.Quantum.Synthesis.Times1C) |Returns the product of two single-qubit Clifford operators. |
|[_TwoLevelDecomposition](xref:Microsoft.Quantum.Synthesis._TwoLevelDecomposition) | |

## User-defined types

| Name | Summary |
|------|---------|
|[SingleQubitClifford](xref:Microsoft.Quantum.Synthesis.SingleQubitClifford) |An element of the single-qubit Clifford group. |
<!-- /summaries -->
