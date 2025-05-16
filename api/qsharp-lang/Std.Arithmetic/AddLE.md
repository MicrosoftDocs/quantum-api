---
uid: Qdk.Std.Arithmetic.AddLE
title: AddLE operation
description: "Q# AddLE operation: Sets a zero-initialized little-endian register zs to the sum of little-endian registers xs and ys"
ms.date: 01/24/2025
ms.topic: generated-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: AddLE
qsharp.summary: "Sets a zero-initialized little-endian register zs to the sum of little-endian registers xs and ys"
---

# AddLE operation

Fully qualified name: Std.Arithmetic.AddLE

```qsharp
operation AddLE(xs : Qubit[], ys : Qubit[], zs : Qubit[]) : Unit is Adj
```

## Summary
Sets a zero-initialized little-endian register zs to the sum of
little-endian registers xs and ys

## Description
Computes zs := xs + ys modulo 2ⁿ, where xs, ys, and zs are little-endian registers,
Length(xs) = Length(ys) ≤ Length(zs) = n, assuming zs is 0-initialized.
NOTE: Use operations like RippleCarryCGAddLE directly if
the choice of implementation is important.
