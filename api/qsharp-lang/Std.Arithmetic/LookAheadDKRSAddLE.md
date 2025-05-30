---
uid: Qdk.Std.Arithmetic.LookAheadDKRSAddLE
title: LookAheadDKRSAddLE operation
description: "Q# LookAheadDKRSAddLE operation: Sets a zero-initialized little-endian register zs to the sum of little-endian registers xs and ys using the carry-lookahead algorithm."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: LookAheadDKRSAddLE
qsharp.summary: "Sets a zero-initialized little-endian register zs to the sum of little-endian registers xs and ys using the carry-lookahead algorithm."
---

# LookAheadDKRSAddLE operation

Fully qualified name: Std.Arithmetic.LookAheadDKRSAddLE

```qsharp
operation LookAheadDKRSAddLE(xs : Qubit[], ys : Qubit[], zs : Qubit[]) : Unit is Adj
```

## Summary
Sets a zero-initialized little-endian register zs to the sum of
little-endian registers xs and ys using the carry-lookahead algorithm.

## Description
Computes zs := xs + ys + zs[0] modulo 2ⁿ, where xs, ys, and zs are
little-endian registers, Length(xs) = Length(ys) ≤ Length(zs) = n,
assuming zs is 0-initialized, except for maybe zs[0], which can be
in |0> or |1> state and can be used as carry-in.
NOTE: `zs[Length(xs)]` can be used as carry-out, if `zs` is longer than `xs`.
This operation uses the carry-lookahead algorithm.

## Reference
- [arXiv:quant-ph/0406142](https://arxiv.org/abs/quant-ph/0406142)
  "A logarithmic-depth quantum carry-lookahead adder",
  Thomas G. Draper, Samuel A. Kutin, Eric M. Rains, Krysta M. Svore
