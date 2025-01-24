---
uid: Qdk.Std.Intrinsic.Rzz
title: Rzz operation
description: "Q# Rzz operation: Applies the two qubit Ising _ZZ_ rotation gate."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: Rzz
qsharp.summary: "Applies the two qubit Ising _ZZ_ rotation gate."
---

# Rzz operation

Fully qualified name: Std.Intrinsic.Rzz

```qsharp
operation Rzz(theta : Double, qubit0 : Qubit, qubit1 : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies the two qubit Ising _ZZ_ rotation gate.

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
    R_{zz}(\theta) \mathrel{:=}
    \begin{bmatrix}
        e^{-i \theta / 2} & 0 & 0 & 0 \\\\
        0 & e^{i \theta / 2} & 0 & 0 \\\\
        0 & 0 & e^{i \theta / 2} & 0 \\\\
        0 & 0 & 0 & e^{-i \theta / 2}
    \end{bmatrix}.
\end{align}
$$
