---
uid: Qdk.Microsoft.Quantum.Intrinsic.X
title: X operation
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: X
qsharp.summary: Applies the Pauli _X_ gate.
---

# X operation

Namespace: Microsoft.Quantum.Intrinsic

```qsharp
operation X(qubit : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies the Pauli _X_ gate.

## Input
### qubit
Qubit to which the gate should be applied.

## Remarks
$$
\begin{align}
    \sigma_x \mathrel{:=}
    \begin{bmatrix}
        0 & 1 \\\\
        1 & 0
    \end{bmatrix}.
\end{align}
$$
