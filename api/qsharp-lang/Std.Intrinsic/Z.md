---
uid: Qdk.Std.Intrinsic.Z
title: Z operation
ms.date: 10/30/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: Z
qsharp.summary: "Applies the Pauli _Z_ gate."
---

# Z operation

Fully qualified name: Std.Intrinsic.Z

```qsharp
operation Z(qubit : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies the Pauli _Z_ gate.

## Input
### qubit
Qubit to which the gate should be applied.

## Remarks
$$
\begin{align}
    \sigma_z \mathrel{:=}
    \begin{bmatrix}
        1 & 0 \\\\
        0 & -1
    \end{bmatrix}.
\end{align}
$$
