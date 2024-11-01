---
uid: Qdk.Microsoft.Quantum.Intrinsic.H
title: H operation
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: H
qsharp.summary: Applies the Hadamard transformation to a single qubit.
---

# H operation

Namespace: Microsoft.Quantum.Intrinsic

```qsharp
operation H(qubit : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies the Hadamard transformation to a single qubit.

## Input
### qubit
Qubit to which the gate should be applied.

## Remarks
$$
\begin{align}
    H \mathrel{:=}
    \frac{1}{\sqrt{2}}
    \begin{bmatrix}
        1 & 1 \\\\
        1 & -1
    \end{bmatrix}
\end{align}
$$
