---
uid: Qdk.Std.Arithmetic.ApplyIfEqualL
title: ApplyIfEqualL operation
description: "Q# ApplyIfEqualL operation: Computes `if (c == x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is equal to the little-endian qubit register `x`"
ms.date: 06/02/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: ApplyIfEqualL
qsharp.summary: "Computes `if (c == x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is equal to the little-endian qubit register `x`"
---

# ApplyIfEqualL operation

Fully qualified name: Std.Arithmetic.ApplyIfEqualL

```qsharp
operation ApplyIfEqualL<'T>(action : ('T => Unit is Adj + Ctl), c : BigInt, xs : Qubit[], target : 'T) : Unit is Adj + Ctl
```

## Summary
Computes `if (c == x) { action(target) }`, that is, applies `action` to `target`
if a BigInt value `c` is equal to the little-endian qubit register `x`
