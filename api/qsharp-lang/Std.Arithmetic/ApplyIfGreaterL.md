---
uid: Qdk.Std.Arithmetic.ApplyIfGreaterL
title: ApplyIfGreaterL operation
description: "Q# ApplyIfGreaterL operation: Computes `if (c > x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is greater than the little-endian qubit register `x`"
ms.date: 06/02/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: ApplyIfGreaterL
qsharp.summary: "Computes `if (c > x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is greater than the little-endian qubit register `x`"
---

# ApplyIfGreaterL operation

Fully qualified name: Std.Arithmetic.ApplyIfGreaterL

```qsharp
operation ApplyIfGreaterL<'T>(action : ('T => Unit is Adj + Ctl), c : BigInt, x : Qubit[], target : 'T) : Unit is Adj + Ctl
```

## Summary
Computes `if (c > x) { action(target) }`, that is, applies `action` to `target`
if a BigInt value `c` is greater than the little-endian qubit register `x`
