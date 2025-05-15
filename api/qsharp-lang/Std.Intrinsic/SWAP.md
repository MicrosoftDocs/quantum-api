---
uid: Qdk.Std.Intrinsic.SWAP
title: SWAP operation
description: "Q# SWAP operation: Applies the SWAP gate to a pair of qubits."
ms.date: 01/24/2025
ms.topic: generated-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: SWAP
qsharp.summary: "Applies the SWAP gate to a pair of qubits."
---

# SWAP operation

Fully qualified name: Std.Intrinsic.SWAP

```qsharp
operation SWAP(qubit1 : Qubit, qubit2 : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies the SWAP gate to a pair of qubits.

## Input
### qubit1
First qubit to be swapped.
### qubit2
Second qubit to be swapped.

## Remarks
$$
\begin{align}
    \operatorname{SWAP} \mathrel{:=}
    \begin{bmatrix}
        1 & 0 & 0 & 0 \\\\
        0 & 0 & 1 & 0 \\\\
        0 & 1 & 0 & 0 \\\\
        0 & 0 & 0 & 1
    \end{bmatrix},
\end{align}
$$

where rows and columns are ordered as in the quantum concepts guide.

Equivalent to:
```qsharp
CNOT(qubit1, qubit2);
CNOT(qubit2, qubit1);
CNOT(qubit1, qubit2);
```
