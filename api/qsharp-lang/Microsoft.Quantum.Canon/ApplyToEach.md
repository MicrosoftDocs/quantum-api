---
uid: Qdk.Microsoft.Quantum.Canon.ApplyToEach
title: ApplyToEach operation
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyToEach
qsharp.summary: Applies an operation to each element in a register.
---

# ApplyToEach operation

Namespace: Microsoft.Quantum.Canon

```qsharp
operation ApplyToEach<'T>(singleElementOperation : ('T => Unit), register : 'T[]) : Unit
```

## Summary
Applies an operation to each element in a register.

## Input
### singleElementOperation
Operation to apply to each element.
### register
Array of elements on which to apply the given operation.

## Type Parameters
### 'T
The target on which the operation acts.

## Example
Prepare a three-qubit |+⟩ state:
```qsharp
use register = Qubit[3];
ApplyToEach(H, register);
```
