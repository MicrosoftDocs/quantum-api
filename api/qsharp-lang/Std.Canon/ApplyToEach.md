---
uid: Qdk.Std.Canon.ApplyToEach
title: ApplyToEach operation
description: "Q# ApplyToEach operation: Applies an operation to each element in a register."
ms.date: 06/02/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: ApplyToEach
qsharp.summary: "Applies an operation to each element in a register."
---

# ApplyToEach operation

Fully qualified name: Std.Canon.ApplyToEach

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
