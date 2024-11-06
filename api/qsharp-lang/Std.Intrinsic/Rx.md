---
uid: Qdk.Std.Intrinsic.Rx
title: Rx operation
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: Rx
qsharp.summary: "Applies a rotation about the _x_-axis by a given angle."
---

# Rx operation

Fully qualified name: Std.Intrinsic.Rx

```qsharp
operation Rx(theta : Double, qubit : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies a rotation about the _x_-axis by a given angle.

## Input
### theta
Angle about which the qubit is to be rotated.
### qubit
Qubit to which the gate should be applied.

## Remarks
$$
\begin{align}
    R_x(\theta) \mathrel{:=}
    e^{-i \theta \sigma_x / 2} =
    \begin{bmatrix}
        \cos \frac{\theta}{2} & -i\sin \frac{\theta}{2}  \\\\
        -i\sin \frac{\theta}{2} & \cos \frac{\theta}{2}
    \end{bmatrix}.
\end{align}
$$

Equivalent to:
```qsharp
R(PauliX, theta, qubit);
```
