---
uid: Qdk.Microsoft.Quantum.Unstable.Arithmetic.ApplyIfEqualLE
title: ApplyIfEqualLE operation
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Unstable.Arithmetic
qsharp.name: ApplyIfEqualLE
qsharp.summary: Computes `if x == y { action(target) }`, that is, applies `action` to `target` if register `x` is equal to the register `y`. Both qubit registers should be in a little-endian format.
---

# ApplyIfEqualLE operation

Namespace: Microsoft.Quantum.Unstable.Arithmetic

```qsharp
operation ApplyIfEqualLE<'T>(action : ('T => Unit is Adj + Ctl), x : Qubit[], y : Qubit[], target : 'T) : Unit is Adj + Ctl
```

## Summary
Computes `if x == y { action(target) }`, that is, applies `action` to `target`
if register `x` is equal to the register `y`.
Both qubit registers should be in a little-endian format.
