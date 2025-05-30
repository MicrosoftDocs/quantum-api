---
uid: Qdk.Std.Arithmetic.ApplyIfLessOrEqualLE
title: ApplyIfLessOrEqualLE operation
description: "Q# ApplyIfLessOrEqualLE operation: Computes `if x <= y { action(target) }`, that is, applies `action` to `target` if register `x` is less or equal to the register `y`. Both qubit registers should be in a little-endian format."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: ApplyIfLessOrEqualLE
qsharp.summary: "Computes `if x <= y { action(target) }`, that is, applies `action` to `target` if register `x` is less or equal to the register `y`. Both qubit registers should be in a little-endian format."
---

# ApplyIfLessOrEqualLE operation

Fully qualified name: Std.Arithmetic.ApplyIfLessOrEqualLE

```qsharp
operation ApplyIfLessOrEqualLE<'T>(action : ('T => Unit is Adj + Ctl), x : Qubit[], y : Qubit[], target : 'T) : Unit is Adj + Ctl
```

## Summary
Computes `if x <= y { action(target) }`, that is, applies `action` to `target`
if register `x` is less or equal to the register `y`.
Both qubit registers should be in a little-endian format.
