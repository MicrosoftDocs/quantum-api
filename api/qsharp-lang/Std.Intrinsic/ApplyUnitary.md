---
uid: Qdk.Std.Intrinsic.ApplyUnitary
title: ApplyUnitary operation
description: "Q# ApplyUnitary operation: Applies the given unitary matrix to the given qubits. The matrix is checked at runtime to ensure it's shape is square and that the matrix dimensions are `2 ^ Length(qubits)`. This operation is simulator-only and is not supported on hardware."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: ApplyUnitary
qsharp.summary: "Applies the given unitary matrix to the given qubits. The matrix is checked at runtime to ensure it's shape is square and that the matrix dimensions are `2 ^ Length(qubits)`. This operation is simulator-only and is not supported on hardware."
---

# ApplyUnitary operation

Fully qualified name: Std.Intrinsic.ApplyUnitary

```qsharp
operation ApplyUnitary(matrix : Complex[][], qubits : Qubit[]) : Unit
```

## Summary
Applies the given unitary matrix to the given qubits. The matrix is checked at runtime to ensure it's shape is square and that the matrix dimensions are `2 ^ Length(qubits)`.
This operation is simulator-only and is not supported on hardware.

## Input
### matrix
The unitary matrix to apply.
### qubits
The qubits to which the unitary matrix should be applied.

## Example
This performs a two qubit CNOT using the unitary matrix representation:
```qsharp
import Std.Math.Complex;
use qs = Qubit[2];
let one = new Complex { Real = 1.0, Imag = 0.0 };
let zero = new Complex { Real = 0.0, Imag = 0.0 };
ApplyUnitary(
    [
        [one, zero, zero, zero],
        [zero, one, zero, zero],
        [zero, zero, zero, one],
        [zero, zero, one, zero]
    ],
    qs
);
```
