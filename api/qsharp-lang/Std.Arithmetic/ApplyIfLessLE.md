---
uid: Qdk.Std.Arithmetic.ApplyIfLessLE
title: ApplyIfLessLE operation
description: "Q# ApplyIfLessLE operation: Computes `if x < y { action(target) }`, that is, applies `action` to `target` if register `x` is less than the register `y`. Both qubit registers should be in a little-endian format."
ms.date: 01/24/2025
ms.topic: generated-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: ApplyIfLessLE
qsharp.summary: "Computes `if x < y { action(target) }`, that is, applies `action` to `target` if register `x` is less than the register `y`. Both qubit registers should be in a little-endian format."
---

# ApplyIfLessLE operation

Fully qualified name: Std.Arithmetic.ApplyIfLessLE

```qsharp
operation ApplyIfLessLE<'T>(action : ('T => Unit is Adj + Ctl), x : Qubit[], y : Qubit[], target : 'T) : Unit is Adj + Ctl
```

## Summary
Computes `if x < y { action(target) }`, that is, applies `action` to `target`
if register `x` is less than the register `y`.
Both qubit registers should be in a little-endian format.
