---
uid: Azure.Quantum.Canon.ApplyToEachC
title: ApplyToEachC operation
ms.date: 02/21/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyToEachC
qsharp.summary: Applies an operation to each element in a register. The modifier `C` indicates that the single-element operation is controllable.
---

# ApplyToEachC operation

Namespace: [Microsoft.Quantum.Canon](xref:Azure.Quantum.Canon)

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
- Microsoft.Quantum.Canon.ApplyToEach
