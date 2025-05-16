---
uid: Qdk.Std.Intrinsic.Rz
title: Rz operation
description: "Q# Rz operation: Applies a rotation about the _z_-axis by a given angle."
ms.date: 01/24/2025
ms.topic: generated-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: Rz
qsharp.summary: "Applies a rotation about the _z_-axis by a given angle."
---

# Rz operation

Fully qualified name: Std.Intrinsic.Rz

```qsharp
operation Rz(theta : Double, qubit : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies a rotation about the _z_-axis by a given angle.

## Input
### theta
Angle about which the qubit is to be rotated.
### qubit
Qubit to which the gate should be applied.

## Remarks
$$
\begin{align}
    R_z(\theta) \mathrel{:=}
    e^{-i \theta \sigma_z / 2} =
    \begin{bmatrix}
        e^{-i \theta / 2} & 0 \\\\
        0 & e^{i \theta / 2}
    \end{bmatrix}.
\end{align}
$$

Equivalent to:
```qsharp
R(PauliZ, theta, qubit);
```
