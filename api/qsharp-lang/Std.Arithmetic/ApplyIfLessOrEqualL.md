---
uid: Qdk.Std.Arithmetic.ApplyIfLessOrEqualL
title: ApplyIfLessOrEqualL operation
description: "Q# ApplyIfLessOrEqualL operation: Computes `if (c <= x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is less or equal to the little-endian qubit register `x`"
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: ApplyIfLessOrEqualL
qsharp.summary: "Computes `if (c <= x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is less or equal to the little-endian qubit register `x`"
---

# ApplyIfLessOrEqualL operation

Fully qualified name: Std.Arithmetic.ApplyIfLessOrEqualL

```qsharp
operation ApplyIfLessOrEqualL<'T>(action : ('T => Unit is Adj + Ctl), c : BigInt, x : Qubit[], target : 'T) : Unit is Adj + Ctl
```

## Summary
Computes `if (c <= x) { action(target) }`, that is, applies `action` to `target`
if a BigInt value `c` is less or equal to the little-endian qubit register `x`
