---
uid: Qdk.Std.Arithmetic.RippleCarryCGAddLE
title: RippleCarryCGAddLE operation
description: "Q# RippleCarryCGAddLE operation: Sets a zero-initialized little-endian register zs to the sum of little-endian registers xs and ys using the ripple-carry algorithm."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: RippleCarryCGAddLE
qsharp.summary: "Sets a zero-initialized little-endian register zs to the sum of little-endian registers xs and ys using the ripple-carry algorithm."
---

# RippleCarryCGAddLE operation

Fully qualified name: Std.Arithmetic.RippleCarryCGAddLE

```qsharp
operation RippleCarryCGAddLE(xs : Qubit[], ys : Qubit[], zs : Qubit[]) : Unit is Adj
```

## Summary
Sets a zero-initialized little-endian register zs to the sum of
little-endian registers xs and ys using the ripple-carry algorithm.

## Description
Computes zs := xs + ys + zs[0] modulo 2ⁿ, where xs, ys, and zs are
little-endian registers, Length(xs) = Length(ys) ≤ Length(zs) = n,
assuming zs is 0-initialized, except for maybe zs[0], which can be
This operation uses the ripple-carry algorithm.
NOTE: `zs[Length(xs)]` can be used as carry-out, if `zs` is longer than `xs`.

## Reference
- [arXiv:1709.06648](https://arxiv.org/pdf/1709.06648.pdf)
  "Halving the cost of quantum addition", Craig Gidney.
