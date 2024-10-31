---
uid: Qdk.Std.Intrinsic.Ryy
title: Ryy operation
ms.date: 10/30/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: Ryy
qsharp.summary: "Applies the two qubit Ising _YY_ rotation gate."
---

# Ryy operation

Fully qualified name: Std.Intrinsic.Ryy

```qsharp
operation Ryy(theta : Double, qubit0 : Qubit, qubit1 : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies the two qubit Ising _YY_ rotation gate.

## Input
### theta
The angle about which the qubits are rotated.
### qubit0
The first qubit input to the gate.
### qubit1
The second qubit input to the gate.

## Remarks
$$
\begin{align}
    R_{yy}(\theta) \mathrel{:=}
    \begin{bmatrix}
        \cos \theta & 0 & 0 & i\sin \theta  \\\\
        0 & \cos \theta & -i\sin \theta & 0  \\\\
        0 & -i\sin \theta & \cos \theta & 0  \\\\
        i\sin \theta & 0 & 0 & \cos \theta
    \end{bmatrix}.
\end{align}
$$
