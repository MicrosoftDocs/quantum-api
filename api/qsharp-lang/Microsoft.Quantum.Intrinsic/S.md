---
uid: Qdk.Microsoft.Quantum.Intrinsic.S
title: S operation
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: S
qsharp.summary: Applies the π/4 phase gate to a single qubit.
---

# S operation

Namespace: Microsoft.Quantum.Intrinsic

```qsharp
operation S(qubit : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies the π/4 phase gate to a single qubit.

## Input
### qubit
Qubit to which the gate should be applied.

## Remarks
$$
\begin{align}
    S \mathrel{:=}
    \begin{bmatrix}
        1 & 0 \\\\
        0 & i
    \end{bmatrix}.
\end{align}
$$
