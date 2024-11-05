---
uid: Qdk.Std.Intrinsic.S
title: S operation
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: S
qsharp.summary: "Applies the π/4 phase gate to a single qubit."
---

# S operation

Fully qualified name: Std.Intrinsic.S

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
