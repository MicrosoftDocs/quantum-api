---
uid: Qdk.Std.Diagnostics.CheckAllZero
title: CheckAllZero operation
description: "Q# CheckAllZero operation: Checks whether all qubits in the provided array are in the |0⟩ state. Returns true if they are."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Diagnostics
qsharp.name: CheckAllZero
qsharp.summary: "Checks whether all qubits in the provided array are in the |0⟩ state. Returns true if they are."
---

# CheckAllZero operation

Fully qualified name: Std.Diagnostics.CheckAllZero

```qsharp
operation CheckAllZero(qubits : Qubit[]) : Bool
```

## Summary
Checks whether all qubits in the provided array are in the |0⟩ state. Returns true if they are.

## Description
This operation checks whether all qubits in the provided array are in the |0⟩ state. It will return true only
if all qubits are deterministically in the |0⟩ state, and will return false otherwise. This operation
does not change the state of the qubits.

## Input
### qubits
The qubits to check.
## Output
True if all qubits are in the |0⟩ state, false otherwise.

## Remarks
This operation is useful for checking whether a qubit is in the |0⟩ state during simulation. It is not possible to check
this on hardware without measuring the qubit, which could change the state.
