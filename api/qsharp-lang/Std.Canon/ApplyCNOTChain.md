---
uid: Qdk.Std.Canon.ApplyCNOTChain
title: ApplyCNOTChain operation
description: "Q# ApplyCNOTChain operation: Computes the parity of a register of qubits in-place."
ms.date: 06/02/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: ApplyCNOTChain
qsharp.summary: "Computes the parity of a register of qubits in-place."
---

# ApplyCNOTChain operation

Fully qualified name: Std.Canon.ApplyCNOTChain

```qsharp
operation ApplyCNOTChain(qubits : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Computes the parity of a register of qubits in-place.

## Input
### qubits
Array of qubits whose parity is to be computed and stored.

## Remarks
This operation transforms the state of its input as
$$
\begin{align}
    \ket{q_0} \ket{q_1} \cdots \ket{q_{n - 1}} & \mapsto
    \ket{q_0} \ket{q_0 \oplus q_1} \ket{q_0 \oplus q_1 \oplus q_2} \cdots
        \ket{q_0 \oplus \cdots \oplus q_{n - 1}}.
\end{align}
$$
