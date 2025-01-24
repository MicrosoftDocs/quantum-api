---
uid: Qdk.Std.Diagnostics.CheckOperationsAreEqual
title: CheckOperationsAreEqual operation
description: "Q# CheckOperationsAreEqual operation: Given two operations, checks that they act identically for all input states."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Diagnostics
qsharp.name: CheckOperationsAreEqual
qsharp.summary: "Given two operations, checks that they act identically for all input states."
---

# CheckOperationsAreEqual operation

Fully qualified name: Std.Diagnostics.CheckOperationsAreEqual

```qsharp
operation CheckOperationsAreEqual(nQubits : Int, actual : (Qubit[] => Unit), expected : (Qubit[] => Unit is Adj)) : Bool
```

## Summary
Given two operations, checks that they act identically for all input states.

## Description
This check is implemented by using the Choi–Jamiołkowski isomorphism to reduce
this check to a check on two entangled registers.
Thus, this operation needs only a single call to each operation being tested,
but requires twice as many qubits to be allocated.
This check can be used to ensure, for instance, that an optimized version of an
operation acts identically to its naïve implementation, or that an operation
which acts on a range of non-quantum inputs agrees with known cases.

## Remarks
This operation requires that the operation modeling the expected behavior is
adjointable, so that the inverse can be performed on the target register alone.
Formally, one can specify a transpose operation, which relaxes this requirement,
but the transpose operation is not in general physically realizable for arbitrary
quantum operations and thus is not included here as an option.

## Input
### nQubits
Number of qubits to pass to each operation.
### actual
Operation to be tested.
### expected
Operation defining the expected behavior for the operation under test.
## Output
True if operations are equal, false otherwise.
