---
uid: Qdk.Std.Arithmetic.ApplyIfGreaterOrEqualLE
title: ApplyIfGreaterOrEqualLE operation
description: "Q# ApplyIfGreaterOrEqualLE operation: Computes `if x >= y { action(target) }`, that is, applies `action` to `target` if register `x` is greater or equal to the register `y`. Both qubit registers should be in a little-endian format."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: ApplyIfGreaterOrEqualLE
qsharp.summary: "Computes `if x >= y { action(target) }`, that is, applies `action` to `target` if register `x` is greater or equal to the register `y`. Both qubit registers should be in a little-endian format."
---

# ApplyIfGreaterOrEqualLE operation

Fully qualified name: Std.Arithmetic.ApplyIfGreaterOrEqualLE

```qsharp
operation ApplyIfGreaterOrEqualLE<'T>(action : ('T => Unit is Adj + Ctl), x : Qubit[], y : Qubit[], target : 'T) : Unit is Adj + Ctl
```

## Summary
Computes `if x >= y { action(target) }`, that is, applies `action` to `target`
if register `x` is greater or equal to the register `y`.
Both qubit registers should be in a little-endian format.
