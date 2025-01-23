---
uid: Qdk.Std.Arithmetic.ApplyIfGreaterOrEqualL
title: ApplyIfGreaterOrEqualL operation
description: "Q# ApplyIfGreaterOrEqualL operation: Computes `if (c >= x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is greater or equal to the little-endian qubit register `x`"
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: ApplyIfGreaterOrEqualL
qsharp.summary: "Computes `if (c >= x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is greater or equal to the little-endian qubit register `x`"
---

# ApplyIfGreaterOrEqualL operation

Fully qualified name: Std.Arithmetic.ApplyIfGreaterOrEqualL

```qsharp
operation ApplyIfGreaterOrEqualL<'T>(action : ('T => Unit is Adj + Ctl), c : BigInt, x : Qubit[], target : 'T) : Unit is Adj + Ctl
```

## Summary
Computes `if (c >= x) { action(target) }`, that is, applies `action` to `target`
if a BigInt value `c` is greater or equal to the little-endian qubit register `x`
