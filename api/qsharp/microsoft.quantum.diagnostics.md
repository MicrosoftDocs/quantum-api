---
uid: Microsoft.Quantum.Diagnostics
title: Microsoft.Quantum.Diagnostics namespace
ms.date: 10/22/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Diagnostics
qsharp.summary: >-
  This namespace contains function and operations that help
  ensure correctness of Q# programs and inspect their behavior.
---

# Microsoft.Quantum.Diagnostics namespace

This namespace contains function and operations that help
ensure correctness of Q# programs and inspect their behavior.



## Description

To learn more about the testing and diagnostics tools available in Q#, see
[Diagnostics](xref:microsoft.quantum.libraries.overview.diagnostics) and
[Testing and Debugging](xref:microsoft.quantum.user-guide-qdk.overview.testingdebugging)
articles.
<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[AllowAtMostNCallsCA](xref:Microsoft.Quantum.Diagnostics.AllowAtMostNCallsCA) |Between a call to this operation and its adjoint, asserts that a given operation is called at most a certain number of times. |
|[AllowAtMostNQubits](xref:Microsoft.Quantum.Diagnostics.AllowAtMostNQubits) |Between a call to this operation and its adjoint, asserts that at most a given number of additional qubits are allocated with using statements. |
|[AssertAllZero](xref:Microsoft.Quantum.Diagnostics.AssertAllZero) |Assert that given qubits are all in $\ket{0}$ state. |
|[AssertAllZeroWithinTolerance](xref:Microsoft.Quantum.Diagnostics.AssertAllZeroWithinTolerance) |Assert that given qubits are all in $\ket{0}$ state up to a given tolerance. |
|[AssertMeasurement](xref:Microsoft.Quantum.Diagnostics.AssertMeasurement) |Asserts that measuring the given qubits in the given Pauli basis will always have the given result. |
|[AssertMeasurementProbability](xref:Microsoft.Quantum.Diagnostics.AssertMeasurementProbability) |Asserts that measuring the given qubits in the given Pauli basis will have the given result with the given probability, within some tolerance. |
|[AssertOperationsEqualInPlace](xref:Microsoft.Quantum.Diagnostics.AssertOperationsEqualInPlace) |Given two operations, asserts that they act identically for all input states. |
|[AssertOperationsEqualInPlaceCompBasis](xref:Microsoft.Quantum.Diagnostics.AssertOperationsEqualInPlaceCompBasis) |Checks if the operation `givenU` is equal to the operation `expectedU` on the given input size  by checking the action of the operations only on the vectors from the computational basis. This is a necessary, but not sufficient, condition for the equality of two unitaries. |
|[AssertOperationsEqualReferenced](xref:Microsoft.Quantum.Diagnostics.AssertOperationsEqualReferenced) |Given two operations, asserts that they act identically for all input states. |
|[AssertPhase](xref:Microsoft.Quantum.Diagnostics.AssertPhase) |Asserts that the phase of an equal superposition state has the expected value. |
|[AssertQubit](xref:Microsoft.Quantum.Diagnostics.AssertQubit) |Asserts that the qubit `q` is in the expected eigenstate of the Pauli Z operator. |
|[AssertQubitIsInStateWithinTolerance](xref:Microsoft.Quantum.Diagnostics.AssertQubitIsInStateWithinTolerance) |Asserts that a qubit in the expected state. |
|[AssertQubitWithinTolerance](xref:Microsoft.Quantum.Diagnostics.AssertQubitWithinTolerance) |Asserts that the qubit `q` is in the expected eigenstate of the Pauli Z operator up to a given tolerance. |
|[DumpOperation](xref:Microsoft.Quantum.Diagnostics.DumpOperation) |Given an operation, displays diagnostics about the operation that are made available by the current execution target. |

## Functions

| Name | Summary |
|------|---------|
|[AllEqualityFactB](xref:Microsoft.Quantum.Diagnostics.AllEqualityFactB) |Asserts that two arrays of boolean values are equal. |
|[AllEqualityFactI](xref:Microsoft.Quantum.Diagnostics.AllEqualityFactI) |Asserts that two arrays of integer values are equal. |
|[Contradiction](xref:Microsoft.Quantum.Diagnostics.Contradiction) |Declares that a classical condition is false. |
|[DumpMachine](xref:Microsoft.Quantum.Diagnostics.DumpMachine) |Dumps the current target machine's status. |
|[DumpRegister](xref:Microsoft.Quantum.Diagnostics.DumpRegister) |Dumps the current target machine's status associated with the given qubits. |
|[EqualityFactB](xref:Microsoft.Quantum.Diagnostics.EqualityFactB) |Asserts that a classical Bool variable has the expected value. |
|[EqualityFactC](xref:Microsoft.Quantum.Diagnostics.EqualityFactC) |Asserts that a complex number has the expected value. |
|[EqualityFactCP](xref:Microsoft.Quantum.Diagnostics.EqualityFactCP) |Asserts that a complex number has the expected value. |
|[EqualityFactI](xref:Microsoft.Quantum.Diagnostics.EqualityFactI) |Asserts that a classical Int variable has the expected value. |
|[EqualityFactL](xref:Microsoft.Quantum.Diagnostics.EqualityFactL) |Asserts that a classical BigInt variable has the expected value. |
|[EqualityFactR](xref:Microsoft.Quantum.Diagnostics.EqualityFactR) |Asserts that a classical Result variable has the expected value. |
|[EqualityWithinToleranceFact](xref:Microsoft.Quantum.Diagnostics.EqualityWithinToleranceFact) |Represents the claim that a classical floating point value has the expected value up to a given absolute tolerance. |
|[Fact](xref:Microsoft.Quantum.Diagnostics.Fact) |Declares that a classical condition is true. |
|[FiniteFact](xref:Microsoft.Quantum.Diagnostics.FiniteFact) |Declares that a given floating-point value represents a finite number, failing when this is not the case. |
|[NearEqualityFactC](xref:Microsoft.Quantum.Diagnostics.NearEqualityFactC) |Asserts that a classical complex number has the expected value up to a small tolerance of 1e-10. |
|[NearEqualityFactCP](xref:Microsoft.Quantum.Diagnostics.NearEqualityFactCP) |Asserts that a classical complex number has the expected value up to a small tolerance of 1e-10. |
|[NearEqualityFactD](xref:Microsoft.Quantum.Diagnostics.NearEqualityFactD) |Asserts that a classical floating point value has the expected value up to a small tolerance of 1e-10. |

## User-defined types

| Name | Summary |
|------|---------|
|[EnableTestingViaName](xref:Microsoft.Quantum.Diagnostics.EnableTestingViaName) |Compiler-recognized attribute via which an alternative name can be defined that may be used when loading a type or callable for testing purposes. |
|[Test](xref:Microsoft.Quantum.Diagnostics.Test) |Compiler-recognized attribute used to mark a unit test. |
<!-- /summaries -->
