---
uid: Qdk.Std.Intrinsic.Ry
title: Ry operation
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: Ry
qsharp.summary: "Applies a rotation about the _y_-axis by a given angle."
---

# Ry operation

Fully qualified name: Std.Intrinsic.Ry

```qsharp
operation Ry(theta : Double, qubit : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies a rotation about the _y_-axis by a given angle.

## Input
### theta
Angle about which the qubit is to be rotated.
### qubit
Qubit to which the gate should be applied.

## Remarks
$$
\begin{align}
    R_y(\theta) \mathrel{:=}
    e^{-i \theta \sigma_y / 2} =
    \begin{bmatrix}
        \cos \frac{\theta}{2} & -\sin \frac{\theta}{2}  \\\\
        \sin \frac{\theta}{2} & \cos \frac{\theta}{2}
    \end{bmatrix}.
\end{align}
$$

Equivalent to:
```qsharp
R(PauliY, theta, qubit);
```
