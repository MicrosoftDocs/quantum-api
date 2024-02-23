---
uid: Qdk.Microsoft.Quantum.Unstable.Arithmetic.ApplyIfGreaterLE
title: ApplyIfGreaterLE operation
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Unstable.Arithmetic
qsharp.name: ApplyIfGreaterLE
qsharp.summary: Computes `if x > y { action(target) }`, that is, applies `action` to `target` if register `x` is greater than the register `y`. Both qubit registers should be in a little-endian format.
---

# ApplyIfGreaterLE operation

Namespace: Microsoft.Quantum.Unstable.Arithmetic

```qsharp
operation ApplyIfGreaterLE<'T>(action : ('T => Unit is Adj + Ctl), x : Qubit[], y : Qubit[], target : 'T) : Unit is Adj + Ctl
```

## Summary
Computes `if x > y { action(target) }`, that is, applies `action` to `target`
if register `x` is greater than the register `y`.
Both qubit registers should be in a little-endian format.
