---
uid: Qdk.Std.Arithmetic.RippleCarryCGIncByLE
title: RippleCarryCGIncByLE operation
description: "Q# RippleCarryCGIncByLE operation: Increments a little-endian register ys by a little-endian register xs using the ripple-carry algorithm."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: RippleCarryCGIncByLE
qsharp.summary: "Increments a little-endian register ys by a little-endian register xs using the ripple-carry algorithm."
---

# RippleCarryCGIncByLE operation

Fully qualified name: Std.Arithmetic.RippleCarryCGIncByLE

```qsharp
operation RippleCarryCGIncByLE(xs : Qubit[], ys : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Increments a little-endian register ys by a little-endian register xs
using the ripple-carry algorithm.

## Description
Computes ys += xs modulo 2ⁿ, where xs and ys are little-endian registers,
and Length(xs) ≤ Length(ys) = n.
Note that if Length(xs) != Length(ys), xs is padded with 0-initialized
qubits to match ys's length.
This operation uses the ripple-carry algorithm.

## Reference
- [arXiv:1709.06648](https://arxiv.org/pdf/1709.06648.pdf)
  "Halving the cost of quantum addition", Craig Gidney.
