---
uid: Qdk.Std.Intrinsic.H
title: H operation
description: "Q# H operation: Applies the Hadamard transformation to a single qubit."
ms.date: 06/02/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: H
qsharp.summary: "Applies the Hadamard transformation to a single qubit."
---

# H operation

Fully qualified name: Std.Intrinsic.H

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
