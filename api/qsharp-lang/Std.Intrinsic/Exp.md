---
uid: Qdk.Std.Intrinsic.Exp
title: Exp operation
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: Exp
qsharp.summary: "Applies the exponential of a multi-qubit Pauli operator."
---

# Exp operation

Fully qualified name: Std.Intrinsic.Exp

```qsharp
operation Exp(paulis : Pauli[], theta : Double, qubits : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Applies the exponential of a multi-qubit Pauli operator.

## Input
### paulis
Array of single-qubit Pauli values indicating the tensor product
factors on each qubit.
### theta
Angle about the given multi-qubit Pauli operator by which the
target register is to be rotated.
### qubits
Register to apply the given rotation to.

## Remarks
$$
\begin{align}
    e^{i \theta [P_0 \otimes P_1 \cdots P_{N-1}]},
\end{align}
$$
where $P_i$ is the $i$-th element of `paulis`, and where
$N = $`Length(paulis)`.
