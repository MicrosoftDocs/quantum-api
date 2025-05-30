---
uid: Qdk.Std.Canon.ApplyToEachC
title: ApplyToEachC operation
description: "Q# ApplyToEachC operation: Applies an operation to each element in a register. The modifier `C` indicates that the single-element operation is controllable."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: ApplyToEachC
qsharp.summary: "Applies an operation to each element in a register. The modifier `C` indicates that the single-element operation is controllable."
---

# ApplyToEachC operation

Fully qualified name: Std.Canon.ApplyToEachC

```qsharp
operation ApplyToEachC<'T>(singleElementOperation : ('T => Unit is Ctl), register : 'T[]) : Unit is Ctl
```

## Summary
Applies an operation to each element in a register.
The modifier `C` indicates that the single-element operation is controllable.

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
