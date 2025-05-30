---
uid: Qdk.Std.Intrinsic.SX
title: SX operation
description: "Q# SX operation: Applies the square root of X gate to a single qubit."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: SX
qsharp.summary: "Applies the square root of X gate to a single qubit."
---

# SX operation

Fully qualified name: Std.Intrinsic.SX

```qsharp
operation SX(qubit : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies the square root of X gate to a single qubit.

## Input
### qubit
Qubit to which the gate should be applied.

## Remarks
$$
\begin{align}
    SX \mathrel{:=}
    \begin{bmatrix}
        \frac{1}{2} + \frac{i}{2} & \frac{1}{2} - \frac{i}{2} \\\\
        \frac{1}{2} - \frac{i}{2} & \frac{1}{2} + \frac{i}{2}
    \end{bmatrix}.
\end{align}
$$
