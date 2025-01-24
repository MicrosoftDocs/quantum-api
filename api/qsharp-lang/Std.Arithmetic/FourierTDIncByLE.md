---
uid: Qdk.Std.Arithmetic.FourierTDIncByLE
title: FourierTDIncByLE operation
description: "Q# FourierTDIncByLE operation: Increments a little-endian register ys by a little-endian register xs using Quantum Fourier Transform."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: FourierTDIncByLE
qsharp.summary: "Increments a little-endian register ys by a little-endian register xs using Quantum Fourier Transform."
---

# FourierTDIncByLE operation

Fully qualified name: Std.Arithmetic.FourierTDIncByLE

```qsharp
operation FourierTDIncByLE(xs : Qubit[], ys : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Increments a little-endian register ys by a little-endian register xs
using Quantum Fourier Transform.

## Description
Computes ys += xs modulo 2ⁿ, where xs and ys are little-endian registers,
and Length(xs) = Length(ys) = n.
This operation uses Quantum Fourier Transform.

## Reference
- [arXiv:quant-ph/0008033](https://arxiv.org/abs/quant-ph/0008033)
  "Addition on a Quantum Computer", Thomas G. Draper
