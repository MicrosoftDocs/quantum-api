---
uid: Qdk.Microsoft.Quantum.Intrinsic.ResetAll
title: ResetAll operation
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: ResetAll
qsharp.summary: Given an array of qubits, measure them and ensure they are in the |0⟩ state such that they can be safely released.
---

# ResetAll operation

Namespace: Microsoft.Quantum.Intrinsic

```qsharp
operation ResetAll(qubits : Qubit[]) : Unit
```

## Summary
Given an array of qubits, measure them and ensure they are in the |0⟩ state
such that they can be safely released.

## Input
### qubits
An array of qubits whose states are to be reset to |0⟩.
