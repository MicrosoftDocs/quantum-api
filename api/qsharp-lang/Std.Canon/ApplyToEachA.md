---
uid: Qdk.Std.Canon.ApplyToEachA
title: ApplyToEachA operation
description: "Q# ApplyToEachA operation: Applies an operation to each element in a register. The modifier `A` indicates that the single-element operation is adjointable."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: ApplyToEachA
qsharp.summary: "Applies an operation to each element in a register. The modifier `A` indicates that the single-element operation is adjointable."
---

# ApplyToEachA operation

Fully qualified name: Std.Canon.ApplyToEachA

```qsharp
operation ApplyToEachA<'T>(singleElementOperation : ('T => Unit is Adj), register : 'T[]) : Unit is Adj
```

## Summary
Applies an operation to each element in a register.
The modifier `A` indicates that the single-element operation is adjointable.

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

## See Also
- [Std.Canon.ApplyToEach](xref:Qdk.Std.Canon.ApplyToEach)
