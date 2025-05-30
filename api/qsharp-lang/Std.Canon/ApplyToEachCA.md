---
uid: Qdk.Std.Canon.ApplyToEachCA
title: ApplyToEachCA operation
description: "Q# ApplyToEachCA operation: Applies an operation to each element in a register. The modifier `CA` indicates that the single-element operation is controllable and adjointable."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: ApplyToEachCA
qsharp.summary: "Applies an operation to each element in a register. The modifier `CA` indicates that the single-element operation is controllable and adjointable."
---

# ApplyToEachCA operation

Fully qualified name: Std.Canon.ApplyToEachCA

```qsharp
operation ApplyToEachCA<'T>(singleElementOperation : ('T => Unit is Adj + Ctl), register : 'T[]) : Unit is Adj + Ctl
```

## Summary
Applies an operation to each element in a register.
The modifier `CA` indicates that the single-element operation is controllable and adjointable.

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
