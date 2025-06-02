---
uid: Qdk.Std.Intrinsic.Measure
title: Measure operation
description: "Q# Measure operation: Performs a joint measurement of one or more qubits in the specified Pauli bases.  If the basis array and qubit array are different lengths, then the operation will fail."
ms.date: 06/02/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: Measure
qsharp.summary: "Performs a joint measurement of one or more qubits in the specified Pauli bases.  If the basis array and qubit array are different lengths, then the operation will fail."
---

# Measure operation

Fully qualified name: Std.Intrinsic.Measure

```qsharp
operation Measure(bases : Pauli[], qubits : Qubit[]) : Result
```

## Summary
Performs a joint measurement of one or more qubits in the
specified Pauli bases.

If the basis array and qubit array are different lengths, then the
operation will fail.

## Input
### bases
Array of single-qubit Pauli values indicating the tensor product
factors on each qubit.
### qubits
Register of qubits to be measured.

## Output
`Zero` if the +1 eigenvalue is observed, and `One` if
the -1 eigenvalue is observed.

## Remarks
The probability of getting `Zero` is
$\bra{\psi} \frac{I + P_0 \otimes \ldots \otimes P_{N-1}}{2} \ket{\psi}$
where $P_i$ is the $i$-th element of `bases`, and where
$N$ is the `Length(bases)`.
That is, measurement returns a `Result` $d$ such that the eigenvalue of the
observed measurement effect is $(-1)^d$.
