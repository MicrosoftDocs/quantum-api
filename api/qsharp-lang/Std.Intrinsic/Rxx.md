---
uid: Qdk.Std.Intrinsic.Rxx
title: Rxx operation
description: "Q# Rxx operation: Applies the two qubit Ising _XX_ rotation gate."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: Rxx
qsharp.summary: "Applies the two qubit Ising _XX_ rotation gate."
---

# Rxx operation

Fully qualified name: Std.Intrinsic.Rxx

```qsharp
operation Rxx(theta : Double, qubit0 : Qubit, qubit1 : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies the two qubit Ising _XX_ rotation gate.

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
    R_{xx}(\theta) \mathrel{:=}
    \begin{bmatrix}
        \cos \theta & 0 & 0 & -i\sin \theta  \\\\
        0 & \cos \theta & -i\sin \theta & 0  \\\\
        0 & -i\sin \theta & \cos \theta & 0  \\\\
        -i\sin \theta & 0 & 0 & \cos \theta
    \end{bmatrix}.
\end{align}
$$
