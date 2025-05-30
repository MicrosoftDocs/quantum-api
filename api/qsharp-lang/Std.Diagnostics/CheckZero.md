---
uid: Qdk.Std.Diagnostics.CheckZero
title: CheckZero operation
description: "Q# CheckZero operation: Checks whether a qubit is in the |0⟩ state, returning true if it is."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Diagnostics
qsharp.name: CheckZero
qsharp.summary: "Checks whether a qubit is in the |0⟩ state, returning true if it is."
---

# CheckZero operation

Fully qualified name: Std.Diagnostics.CheckZero

```qsharp
operation CheckZero(qubit : Qubit) : Bool
```

## Summary
Checks whether a qubit is in the |0⟩ state, returning true if it is.

## Description
This operation checks whether a qubit is in the |0⟩ state. It will return true only
if the qubit is deterministically in the |0⟩ state, and will return false otherwise. This operation
does not change the state of the qubit.

## Input
### qubit
The qubit to check.
## Output
True if the qubit is in the |0⟩ state, false otherwise.

## Remarks
This operation is useful for checking whether a qubit is in the |0⟩ state during simulation. It is not possible to check
this on hardware without measuring the qubit, which could change the state.
