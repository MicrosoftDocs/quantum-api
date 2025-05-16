---
uid: Qdk.Std.Intrinsic.X
title: X operation
description: "Q# X operation: Applies the Pauli _X_ gate."
ms.date: 01/24/2025
ms.topic: generated-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: X
qsharp.summary: "Applies the Pauli _X_ gate."
---

# X operation

Fully qualified name: Std.Intrinsic.X

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
