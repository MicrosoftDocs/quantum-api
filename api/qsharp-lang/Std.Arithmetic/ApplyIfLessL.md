---
uid: Qdk.Std.Arithmetic.ApplyIfLessL
title: ApplyIfLessL operation
description: "Q# ApplyIfLessL operation: Computes `if (c < x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is less than the little-endian qubit register `x`"
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: ApplyIfLessL
qsharp.summary: "Computes `if (c < x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is less than the little-endian qubit register `x`"
---

# ApplyIfLessL operation

Fully qualified name: Std.Arithmetic.ApplyIfLessL

```qsharp
operation ApplyIfLessL<'T>(action : ('T => Unit is Adj + Ctl), c : BigInt, x : Qubit[], target : 'T) : Unit is Adj + Ctl
```

## Summary
Computes `if (c < x) { action(target) }`, that is, applies `action` to `target`
if a BigInt value `c` is less than the little-endian qubit register `x`
