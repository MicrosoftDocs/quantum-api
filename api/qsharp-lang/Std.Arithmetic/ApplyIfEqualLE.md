---
uid: Qdk.Std.Arithmetic.ApplyIfEqualLE
title: ApplyIfEqualLE operation
description: "Q# ApplyIfEqualLE operation: Computes `if x == y { action(target) }`, that is, applies `action` to `target` if register `x` is equal to the register `y`. Both qubit registers should be in a little-endian format."
ms.date: 01/24/2025
ms.topic: generated-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: ApplyIfEqualLE
qsharp.summary: "Computes `if x == y { action(target) }`, that is, applies `action` to `target` if register `x` is equal to the register `y`. Both qubit registers should be in a little-endian format."
---

# ApplyIfEqualLE operation

Fully qualified name: Std.Arithmetic.ApplyIfEqualLE

```qsharp
operation ApplyIfEqualLE<'T>(action : ('T => Unit is Adj + Ctl), x : Qubit[], y : Qubit[], target : 'T) : Unit is Adj + Ctl
```

## Summary
Computes `if x == y { action(target) }`, that is, applies `action` to `target`
if register `x` is equal to the register `y`.
Both qubit registers should be in a little-endian format.
