---
uid: Qdk.Std.Intrinsic.T
title: T operation
description: "Q# T operation: Applies the π/8 gate to a single qubit."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: T
qsharp.summary: "Applies the π/8 gate to a single qubit."
---

# T operation

Fully qualified name: Std.Intrinsic.T

```qsharp
operation T(qubit : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies the π/8 gate to a single qubit.

## Input
### qubit
Qubit to which the gate should be applied.

## Remarks
$$
\begin{align}
    T \mathrel{:=}
    \begin{bmatrix}
        1 & 0 \\\\
        0 & e^{i \pi / 4}
    \end{bmatrix}.
\end{align}
$$
